import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, ThumbsUp, Trash2, X, User, Star } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { getMessages, addMessage, deleteMessage, likeMessage, GuestMessage } from '../utils/storage';

const GuestBookPage: React.FC = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem('linguaread_guest_nickname') || '';
  });
  const [content, setContent] = useState('');
  const [showNicknameInput, setShowNicknameInput] = useState(!nickname);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // 加载留言
  useEffect(() => {
    setMessages(getMessages());
  }, []);

  // 保存昵称
  const handleSaveNickname = () => {
    if (nickname.trim()) {
      localStorage.setItem('linguaread_guest_nickname', nickname.trim());
      setShowNicknameInput(false);
    }
  };

  // 提交留言
  const handleSubmit = () => {
    if (!content.trim() || !nickname.trim()) return;

    addMessage(nickname.trim(), content.trim(), rating > 0 ? rating : undefined);

    setMessages(getMessages());
    setContent('');
    setRating(0);
  };

  // 点赞
  const handleLike = (messageId: string) => {
    likeMessage(messageId);
    setMessages(getMessages());
  };

  // 删除留言
  const handleDelete = (messageId: string) => {
    deleteMessage(messageId);
    setMessages(getMessages());
  };

  // 格式化时间
  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    return date.toLocaleDateString('zh-CN');
  };

  // 渲染星星
  const renderStars = (ratingValue: number, interactive = false, size: 'sm' | 'md' = 'md') => {
    const stars = [];
    const starSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
    const gap = size === 'sm' ? 'gap-0.5' : 'gap-1';

    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= ratingValue;
      stars.push(
        <button
          key={i}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && setRating(i)}
          onMouseEnter={() => interactive && setHoverRating(i)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
        >
          <Star
            className={`${starSize} ${isFilled || (interactive && i <= hoverRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        </button>
      );
    }
    return <div className={`flex ${gap}`}>{stars}</div>;
  };

  // 计算平均评分
  const averageRating = messages.length > 0
    ? (messages.reduce((sum, m) => sum + (m.rating || 0), 0) / messages.filter(m => m.rating).length || 0).toFixed(1)
    : '0.0';

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header title="留言板" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-2xl mx-auto">
        {/* 欢迎语和评分统计 */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-600">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">欢迎留下您的宝贵意见</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                您的每条留言都是对我们最大的支持
              </p>
            </div>
            {messages.filter(m => m.rating).length > 0 && (
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">{averageRating}</div>
                <div className="flex justify-center">{renderStars(Math.round(Number(averageRating)), false, 'sm')}</div>
                <div className="text-xs text-gray-500">{messages.filter(m => m.rating).length} 人评分</div>
              </div>
            )}
          </div>
        </div>

        {/* 昵称设置 */}
        {showNicknameInput ? (
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
            <h3 className="font-medium text-gray-800 mb-3">请先设置您的昵称</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="输入昵称"
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
                maxLength={20}
              />
              <button
                onClick={handleSaveNickname}
                disabled={!nickname.trim()}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  nickname.trim()
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                确定
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-3 mb-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="font-medium text-gray-800">{nickname}</span>
              </div>
              <button
                onClick={() => setShowNicknameInput(true)}
                className="text-sm text-indigo-600 hover:text-indigo-700"
              >
                修改
              </button>
            </div>
          </div>
        )}

        {/* 留言输入 */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          {/* 评分选择 */}
          <div className="mb-3">
            <span className="text-sm text-gray-600 mr-2">为应用评分:</span>
            {renderStars(hoverRating || rating, true)}
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="写下您的留言..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 resize-none"
            rows={3}
            maxLength={500}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-400">{content.length}/500</span>
            <button
              onClick={handleSubmit}
              disabled={!content.trim() || !nickname.trim()}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                content.trim() && nickname.trim()
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
              提交
            </button>
          </div>
        </div>

        {/* 留言列表 */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-800">全部留言 ({messages.length})</h3>

          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {message.nickname.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">{message.nickname}</span>
                      <span className="text-xs text-gray-400 ml-2">{formatTime(message.createdAt)}</span>
                    </div>
                  </div>
                  {message.rating && message.rating > 0 && (
                    <div className="flex">
                      {renderStars(message.rating, false, 'sm')}
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{message.content}</p>

                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleLike(message.id)}
                    className="flex items-center gap-1 text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{message.likes}</span>
                  </button>

                  {/* 只有自己的留言可以删除 */}
                  {message.nickname === nickname && (
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">删除</span>
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400">暂无留言，快来抢沙发吧~</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default GuestBookPage;
