import React, { useState } from 'react';
import { Trash2, BookOpen, Heart, Bookmark, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import VocabularyList from '../components/VocabularyList';
import BottomNav from '../components/BottomNav';
import { useApp } from '../context/AppContext';

type TabType = 'words' | 'articles' | 'bookmarks';

const VocabularyPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('words');
  const {
    favorites,
    removeFromFavorites,
    favoriteArticles,
    removeFromFavoriteArticles,
    bookmarks,
    removeFromBookmarks,
  } = useApp();

  // 今日新增单词
  const todayCount = favorites.filter(f => {
    const today = new Date().toDateString();
    return new Date(f.createdAt).toDateString() === today;
  }).length;

  const handleDeleteWord = (wordId: string) => {
    removeFromFavorites(wordId);
  };

  const handleDeleteArticle = (articleId: string) => {
    removeFromFavoriteArticles(articleId);
  };

  const handleDeleteBookmark = (bookmarkId: string) => {
    removeFromBookmarks(bookmarkId);
  };

  const tabs = [
    { id: 'words' as TabType, label: '单词', count: favorites.length, icon: BookOpen },
    { id: 'articles' as TabType, label: '文章', count: favoriteArticles.length, icon: Heart },
    { id: 'bookmarks' as TabType, label: '书签', count: bookmarks.length, icon: Bookmark },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="我的收藏" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 统计卡片 */}
        <div className="grid grid-cols-3 gap-3 mb-5 sm:mb-6">
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-3 sm:w-4 h-3 sm:h-4 text-green-600" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{favorites.length}</p>
            <p className="text-xs text-gray-500">单词</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-red-600" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{favoriteArticles.length}</p>
            <p className="text-xs text-gray-500">文章</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Bookmark className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-600" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{bookmarks.length}</p>
            <p className="text-xs text-gray-500">书签</p>
          </div>
        </div>

        {/* 标签切换 */}
        <div className="flex space-x-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 单词收藏 */}
        {activeTab === 'words' && (
          <>
            {favorites.length > 0 && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                <p className="text-sm text-amber-700">
                  💡 点击单词可听发音，点击删除按钮可移除生词
                </p>
              </div>
            )}
            <VocabularyList favorites={favorites} onDelete={handleDeleteWord} />
          </>
        )}

        {/* 文章收藏 */}
        {activeTab === 'articles' && (
          <>
            {favoriteArticles.length > 0 ? (
              <div className="space-y-3">
                {favoriteArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                  >
                    <div
                      className="flex-1 cursor-pointer"
                      onClick={() => navigate(`/articles/${article.articleId}`)}
                    >
                      <h3 className="font-semibold text-gray-800 mb-1">{article.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">{article.titleZh}</p>
                      <p className="text-xs text-gray-400">作者：{article.author}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteArticle(article.articleId)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">暂无收藏文章</h3>
                <p className="text-gray-500 text-sm">在阅读文章时点击❤️收藏喜欢的文章</p>
              </div>
            )}
          </>
        )}

        {/* 书签 */}
        {activeTab === 'bookmarks' && (
          <>
            {bookmarks.length > 0 && (
              <div className="mb-4 p-3 bg-indigo-50 border border-indigo-100 rounded-xl">
                <p className="text-sm text-indigo-700">
                  💡 点击书签可快速跳转到文章
                </p>
              </div>
            )}
            {bookmarks.length > 0 ? (
              <div className="space-y-3">
                {bookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                  >
                    <div
                      className="flex-1 cursor-pointer"
                      onClick={() => navigate(`/articles/${bookmark.articleId}`)}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <Bookmark className="w-4 h-4 text-indigo-500" />
                        <h3 className="font-semibold text-gray-800">{bookmark.articleTitleZh}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{bookmark.articleTitle}</p>
                      <p className="text-xs text-gray-400">
                        添加于：{new Date(bookmark.createdAt).toLocaleDateString('zh-CN')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteBookmark(bookmark.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="text-5xl mb-4">🔖</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">暂无书签</h3>
                <p className="text-gray-500 text-sm">在阅读文章时点击📑添加书签</p>
              </div>
            )}
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default VocabularyPage;
