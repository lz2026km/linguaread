import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Volume2, Bookmark, BookmarkCheck, Settings, X, Type, AlignLeft } from 'lucide-react';
import { getCourseById, getUnitById } from '../data/courses';
import {
  saveCourseProgress,
  getCourseProgress,
  addCourseBookmark,
  removeCourseBookmark,
  getCourseBookmarksByUnit,
  saveCourseStudyRecord,
} from '../utils/storage';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

// 可选的英文字体
const fontFamilies = [
  { id: 'serif', name: '衬线体', class: 'font-serif' },
  { id: 'sans', name: '无衬线', class: 'font-sans' },
  { id: 'mono', name: '等宽体', class: 'font-mono' },
];

const CourseReaderPage: React.FC = () => {
  const { courseId, unitId } = useParams<{ courseId: string; unitId: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const { speak } = useSpeechSynthesis();

  const [showSettings, setShowSettings] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const [readProgress, setReadProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('linguaread_font_size');
    return saved ? parseInt(saved) : 18;
  });
  const [fontFamily, setFontFamily] = useState(() => {
    const saved = localStorage.getItem('linguaread_font_family');
    return saved || 'serif';
  });
  const [nightMode, setNightMode] = useState(() => {
    const saved = localStorage.getItem('linguaread_night_mode');
    return saved ? JSON.parse(saved) : false;
  });

  const course = courseId ? getCourseById(courseId) : undefined;
  const unit = courseId && unitId ? getUnitById(courseId, unitId) : undefined;

  // 查找当前单元索引
  const currentUnitIndex = unit ? course?.units.findIndex(u => u.id === unit.id) ?? -1 : -1;
  const prevUnit = currentUnitIndex > 0 ? course?.units[currentUnitIndex - 1] : null;
  const nextUnit = course && currentUnitIndex < course.units.length - 1 ? course.units[currentUnitIndex + 1] : null;

  // 监听夜晚模式变化
  useEffect(() => {
    const handleNightModeChange = (e: CustomEvent) => {
      setNightMode(e.detail);
    };
    window.addEventListener('nightModeChange', handleNightModeChange as EventListener);
    return () => {
      window.removeEventListener('nightModeChange', handleNightModeChange as EventListener);
    };
  }, []);

  // 加载进度和书签
  useEffect(() => {
    if (courseId && unitId) {
      // 加载阅读进度
      const progress = getCourseProgress(courseId, unitId);
      if (progress && contentRef.current) {
        const scrollHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        contentRef.current.scrollTop = (progress.progress / 100) * scrollHeight;
      }

      // 加载书签状态
      const bookmarks = getCourseBookmarksByUnit(courseId, unitId);
      if (bookmarks.length > 0) {
        setIsBookmarked(true);
        setBookmarkId(bookmarks[0].id);
      } else {
        setIsBookmarked(false);
        setBookmarkId(null);
      }

      // 更新学习记录
      saveCourseStudyRecord({
        courseId,
        lastUnitId: unitId,
        lastReadAt: new Date().toISOString(),
      });
    }
  }, [courseId, unitId]);

  // 滚动时更新进度
  const handleScroll = useCallback(() => {
    if (!contentRef.current || !courseId || !unitId) return;

    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    const progress = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);

    setReadProgress(progress);

    // 保存进度
    saveCourseProgress({
      courseId,
      unitId,
      progress,
      lastReadAt: new Date().toISOString(),
      completed: progress >= 90,
    });
  }, [courseId, unitId]);

  // 朗读单词
  const handleSpeakWord = (word: string) => {
    speak(word);
  };

  // 切换书签
  const toggleBookmark = () => {
    if (!courseId || !unitId || !unit) return;

    if (isBookmarked && bookmarkId) {
      removeCourseBookmark(bookmarkId);
      setIsBookmarked(false);
      setBookmarkId(null);
    } else {
      const newBookmark = {
        id: Date.now().toString(),
        courseId,
        unitId,
        unitTitle: unit.title,
        unitTitleZh: unit.titleZh,
        position: readProgress,
        createdAt: new Date().toISOString(),
      };
      addCourseBookmark(newBookmark);
      setIsBookmarked(true);
      setBookmarkId(newBookmark.id);
    }
  };

  // 导航到上一单元/下一单元
  const navigateToUnit = (direction: 'prev' | 'next') => {
    const targetUnit = direction === 'prev' ? prevUnit : nextUnit;
    if (targetUnit && courseId) {
      navigate(`/courses/${courseId}/units/${targetUnit.id}`);
    }
  };

  // 字体设置
  const increaseFontSize = () => {
    if (fontSize < 28) {
      const newSize = fontSize + 2;
      setFontSize(newSize);
      localStorage.setItem('linguaread_font_size', newSize.toString());
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 14) {
      const newSize = fontSize - 2;
      setFontSize(newSize);
      localStorage.setItem('linguaread_font_size', newSize.toString());
    }
  };

  const cycleFont = () => {
    const currentIndex = fontFamilies.findIndex(f => f.id === fontFamily);
    const nextIndex = (currentIndex + 1) % fontFamilies.length;
    setFontFamily(fontFamilies[nextIndex].id);
  };

  const currentFontClass = fontFamilies.find(f => f.id === fontFamily)?.class || 'font-serif';
  const currentFontName = fontFamilies.find(f => f.id === fontFamily)?.name || '衬线体';

  if (!course || !unit) {
    return (
      <div className={`min-h-screen ${nightMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="pt-12 px-4">
          <button onClick={() => navigate('/courses')} className={`flex items-center ${nightMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            <ArrowLeft className="w-5 h-5 mr-1" />
            返回
          </button>
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📚</div>
            <h3 className={`text-lg font-semibold ${nightMode ? 'text-white' : 'text-gray-700'} mb-2`}>内容不存在</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${nightMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* 顶部导航 */}
      <div className={`fixed top-0 left-0 right-0 z-40 border-b ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="pt-10 px-4 pb-3 flex items-center justify-between">
          <button onClick={() => navigate(`/courses/${courseId}`)} className={`flex items-center ${nightMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center mx-4">
            <h1 className={`text-sm font-medium truncate ${nightMode ? 'text-white' : 'text-gray-800'}`}>{unit.titleZh}</h1>
            <p className={`text-xs truncate ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>{unit.title}</p>
          </div>
          <button onClick={() => setShowSettings(true)} className={`p-2 ${nightMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* 进度条 */}
        <div className="px-4 pb-3">
          <div className={`flex items-center justify-between text-xs ${nightMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
            <span>阅读进度</span>
            <span>{readProgress}%</span>
          </div>
          <div className={`h-1.5 rounded-full overflow-hidden ${nightMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div
              className={`h-full bg-gradient-to-r ${course.coverColor} rounded-full transition-all duration-300`}
              style={{ width: `${readProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* 主内容区 */}
      <div
        ref={contentRef}
        onScroll={handleScroll}
        className="flex-1 pt-28 pb-24 px-4 overflow-y-auto"
      >
        <div className="max-w-2xl mx-auto">
          {/* 标题 */}
          <div className="mb-6">
            <h1 className={`text-2xl font-bold mb-2 ${nightMode ? 'text-white' : 'text-gray-800'}`}>{unit.titleZh}</h1>
            <p className={`text-lg ${nightMode ? 'text-gray-400' : 'text-gray-600'}`}>{unit.title}</p>
          </div>

          {/* 英文内容 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-sm font-medium ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>English</span>
              <button
                onClick={() => speak(unit.contentEn)}
                className={`p-2 rounded-lg ${nightMode ? 'text-indigo-400 hover:bg-gray-700' : 'text-indigo-600 hover:bg-indigo-50'}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="prose prose-lg max-w-none">
              {unit.contentEn.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className={`mb-4 leading-relaxed ${currentFontClass}`} style={{ fontSize: `${fontSize}px`, color: nightMode ? '#e5e7eb' : undefined }}>
                  {paragraph.split(' ').map((word, wIndex) => (
                    <span
                      key={wIndex}
                      className={`cursor-pointer rounded px-0.5 transition-colors ${
                        nightMode
                          ? 'hover:bg-gray-700 hover:text-yellow-300'
                          : 'hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                      onClick={() => handleSpeakWord(word.replace(/[.,!?;:]/g, ''))}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>

          {/* 中文翻译 */}
          {showTranslation && (
            <div className={`mb-6 pt-6 border-t ${nightMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <span className={`text-sm font-medium mb-3 block ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>中文译文</span>
              <div className="prose prose-lg max-w-none">
                {unit.contentZh.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className={`mb-4 leading-relaxed ${nightMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* 单元导航 */}
          <div className={`flex items-center justify-between pt-6 mt-6 border-t ${nightMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <button
              onClick={() => navigateToUnit('prev')}
              disabled={!prevUnit}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg ${
                prevUnit
                  ? nightMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-600 hover:bg-gray-100'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">上一单元</span>
            </button>
            <button
              onClick={() => navigateToUnit('next')}
              disabled={!nextUnit}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg ${
                nextUnit
                  ? nightMode
                    ? 'text-indigo-400 hover:bg-gray-700'
                    : 'text-indigo-600 hover:bg-indigo-50'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <span className="text-sm">下一单元</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 底部工具栏 */}
      <div className={`fixed bottom-0 left-0 right-0 border-t px-4 py-3 ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {/* 字体设置 */}
          <div className="flex items-center gap-1">
            <button
              onClick={cycleFont}
              className={`p-2 rounded-lg ${nightMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              title={`字体: ${currentFontName}`}
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button
              onClick={decreaseFontSize}
              className={`p-2 rounded-lg ${nightMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              title="减小字体"
            >
              <Type className="w-4 h-4" />
            </button>
            <span className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-400'} px-1`}>{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className={`p-2 rounded-lg ${nightMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              title="增大字体"
            >
              <Type className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-3 py-1.5 text-sm rounded-lg ${nightMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            {showTranslation ? '隐藏译文' : '显示译文'}
          </button>
          <button
            onClick={toggleBookmark}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
              isBookmarked
                ? nightMode
                  ? 'text-amber-400 bg-amber-900/30'
                  : 'text-amber-600 bg-amber-50'
                : nightMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {isBookmarked ? (
              <>
                <BookmarkCheck className="w-4 h-4" />
                <span className="text-sm">已书签</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span className="text-sm">书签</span>
              </>
            )}
          </button>
          <button
            onClick={() => speak(unit.contentEn)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
              nightMode ? 'text-indigo-400 hover:bg-gray-700' : 'text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span className="text-sm">朗读</span>
          </button>
        </div>
      </div>

      {/* 设置浮层 */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end">
          <div className={`rounded-t-2xl w-full p-4 max-w-2xl mx-auto ${nightMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${nightMode ? 'text-white' : 'text-gray-800'}`}>阅读设置</h3>
              <button onClick={() => setShowSettings(false)} className="p-2 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={nightMode ? 'text-gray-300' : 'text-gray-600'}>显示中文译文</span>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showTranslation ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showTranslation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <button
                  onClick={() => {
                    navigate(`/courses/${courseId}`);
                    setShowSettings(false);
                  }}
                  className={`w-full py-3 text-center rounded-lg ${
                    nightMode ? 'text-indigo-400 hover:bg-gray-700' : 'text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  返回课程目录
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseReaderPage;
