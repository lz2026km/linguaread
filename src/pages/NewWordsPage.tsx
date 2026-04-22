import React from 'react';
import { Trash2, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import VocabularyList from '../components/VocabularyList';
import BottomNav from '../components/BottomNav';
import { useApp } from '../context/AppContext';

const NewWordsPage: React.FC = () => {
  const { favorites, removeFromFavorites } = useApp();

  // 今日新增单词
  const todayCount = favorites.filter(f => {
    const today = new Date().toDateString();
    return new Date(f.createdAt).toDateString() === today;
  }).length;

  const handleDeleteWord = (wordId: string) => {
    removeFromFavorites(wordId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="生词本" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 统计卡片 */}
        <div className="grid grid-cols-2 gap-3 mb-5 sm:mb-6">
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-3 sm:w-4 h-3 sm:h-4 text-green-600" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{favorites.length}</p>
            <p className="text-xs text-gray-500">总计生词</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-sm">📅</span>
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{todayCount}</p>
            <p className="text-xs text-gray-500">今日新增</p>
          </div>
        </div>

        {/* 提示信息 */}
        {favorites.length > 0 && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
            <p className="text-sm text-amber-700">
              💡 点击单词可听发音，点击删除按钮可移除生词
            </p>
          </div>
        )}

        {/* 生词列表 */}
        {favorites.length > 0 ? (
          <VocabularyList favorites={favorites} onDelete={handleDeleteWord} />
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">生词本为空</h3>
            <p className="text-gray-500 text-sm text-center">
              在阅读英文文章时<br />
              点击不认识的单词<br />
              点击⭐️添加为生词
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default NewWordsPage;
