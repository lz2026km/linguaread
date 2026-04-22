import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Heart, Share2, MessageCircle, Bookmark, X, RefreshCw, Wifi, WifiOff } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  likes: number;
  category: string;
}

// 模拟英文学习视频数据
const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Daily English Conversation',
    titleZh: '日常英语对话',
    description: 'Learn common everyday English phrases and expressions used in daily life. Perfect for beginners.',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=600&fit=crop',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 12500,
    likes: 890,
    category: '口语',
  },
  {
    id: '2',
    title: 'English Grammar Tips',
    titleZh: '英语语法技巧',
    description: 'Master the most common English grammar rules with simple explanations and examples.',
    duration: '5:20',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 9800,
    likes: 720,
    category: '语法',
  },
  {
    id: '3',
    title: 'Business English Vocabulary',
    titleZh: '商务英语词汇',
    description: 'Essential business English words and phrases for professional settings and workplace communication.',
    duration: '4:30',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 15600,
    likes: 1100,
    category: '商务',
  },
  {
    id: '4',
    title: 'American Accent Training',
    titleZh: '美式口音训练',
    description: 'Practice speaking with an American accent. Learn the sounds and intonation patterns.',
    duration: '6:15',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=600&fit=crop',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 22400,
    likes: 1680,
    category: '口语',
  },
  {
    id: '5',
    title: 'IELTS Speaking Practice',
    titleZh: '雅思口语练习',
    description: 'Prepare for IELTS speaking test with these common topics and model answers.',
    duration: '8:00',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=600&fit=crop',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 18900,
    likes: 1340,
    category: '考试',
  },
  {
    id: '6',
    title: 'English Idioms Explained',
    titleZh: '英语习语讲解',
    description: 'Learn popular English idioms and phrases used by native speakers.',
    duration: '4:50',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=600&fit=crop',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    views: 11200,
    likes: 850,
    category: '词汇',
  },
];

const VideoLearningPage: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<Video>(sampleVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [favorites, setFavorites] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const categories = ['全部', '口语', '语法', '商务', '考试', '词汇'];

  const filteredVideos = selectedCategory === '全部'
    ? sampleVideos
    : sampleVideos.filter(v => v.category === selectedCategory);

  useEffect(() => {
    // 重置状态
    setIsPlaying(false);
    setProgress(0);
    setIsLoading(true);
    setError(null);
  }, [currentVideo.id]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError('视频加载失败，请检查网络连接');
    setIsLoading(false);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = percent * videoRef.current.duration;
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
    }
  };

  const toggleFavorite = (videoId: string) => {
    setFavorites(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const formatViews = (views: number) => {
    if (views >= 10000) {
      return `${(views / 10000).toFixed(1)}万`;
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-3 py-3">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg font-bold text-center">视频学英语</h1>
          <p className="text-gray-400 text-xs text-center mt-0.5">沉浸式英语学习视频</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row">
        {/* 视频播放区域 */}
        <div className="lg:w-2/3">
          {/* 视频容器 */}
          <div className="relative bg-black aspect-video lg:max-h-[70vh]">
            {/* 视频元素 */}
            <video
              ref={videoRef}
              className="w-full h-full"
              poster={currentVideo.thumbnail}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleVideoLoaded}
              onError={handleError}
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              <source src={currentVideo.videoUrl} type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>

            {/* 加载中覆盖层 */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-center">
                  <RefreshCw className="w-10 h-10 text-indigo-400 animate-spin mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">视频加载中...</p>
                </div>
              </div>
            )}

            {/* 错误覆盖层 */}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <div className="text-center px-4">
                  <WifiOff className="w-12 h-12 text-red-400 mx-auto mb-3" />
                  <p className="text-gray-300 mb-3">{error}</p>
                  <button
                    onClick={() => {
                      setError(null);
                      setIsLoading(true);
                      if (videoRef.current) {
                        videoRef.current.load();
                      }
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                  >
                    重试
                  </button>
                </div>
              </div>
            )}

            {/* 播放控制栏 */}
            {!error && !isLoading && (
              <>
                {/* 进度条 */}
                <div
                  ref={progressRef}
                  onClick={handleProgressClick}
                  className="absolute bottom-14 left-0 right-0 h-1 bg-gray-700 cursor-pointer group"
                >
                  <div
                    className="h-full bg-indigo-500 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* 控制按钮 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* 跳过 */}
                      <button onClick={skipBackward} className="text-white/80 hover:text-white transition-colors">
                        <SkipBack className="w-5 h-5" />
                      </button>

                      {/* 播放/暂停 */}
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-gray-800" />
                        ) : (
                          <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                        )}
                      </button>

                      {/* 跳过 */}
                      <button onClick={skipForward} className="text-white/80 hover:text-white transition-colors">
                        <SkipForward className="w-5 h-5" />
                      </button>

                      {/* 静音 */}
                      <button onClick={toggleMute} className="text-white/80 hover:text-white transition-colors">
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>

                      {/* 时间 */}
                      <span className="text-white/80 text-xs ml-2">
                        {currentVideo.duration}
                      </span>
                    </div>

                    {/* 全屏 */}
                    <button className="text-white/80 hover:text-white transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* 视频信息 */}
          <div className="p-4 bg-gray-900">
            <h2 className="text-lg font-bold">{currentVideo.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{currentVideo.titleZh}</p>
            <p className="text-gray-400 text-sm mt-2">{currentVideo.description}</p>

            <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
              <span>{formatViews(currentVideo.views)} 次观看</span>
              <span>{currentVideo.likes} 点赞</span>
            </div>

            {/* 操作按钮 */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800">
              <button
                onClick={() => toggleFavorite(currentVideo.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  favorites.includes(currentVideo.id)
                    ? 'bg-red-500/20 text-red-500'
                    : 'bg-gray-800 text-gray-400 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${favorites.includes(currentVideo.id) ? 'fill-current' : ''}`} />
                <span className="text-sm">收藏</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-full hover:text-indigo-500 transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="text-sm">分享</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-full hover:text-indigo-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">评论</span>
              </button>
            </div>
          </div>
        </div>

        {/* 视频列表 */}
        <div className="lg:w-1/3 lg:max-h-[calc(100vh-80px)] lg:overflow-y-auto border-l border-gray-800">
          {/* 分类筛选 */}
          <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm p-3 border-b border-gray-800">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 视频列表 */}
          <div className="divide-y divide-gray-800">
            {filteredVideos.map(video => (
              <button
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                className={`w-full p-3 flex gap-3 hover:bg-gray-800/50 transition-colors text-left ${
                  currentVideo.id === video.id ? 'bg-gray-800' : ''
                }`}
              >
                {/* 缩略图 */}
                <div className="relative w-28 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 px-1 rounded text-xs">
                    {video.duration}
                  </div>
                  {currentVideo.id === video.id && isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                        <Pause className="w-3 h-3 text-gray-800" />
                      </div>
                    </div>
                  )}
                </div>

                {/* 信息 */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-medium line-clamp-2 ${
                    currentVideo.id === video.id ? 'text-indigo-400' : 'text-white'
                  }`}>
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{video.titleZh}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{formatViews(video.views)}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs px-1.5 py-0.5 bg-gray-800 text-gray-400 rounded">
                      {video.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLearningPage;
