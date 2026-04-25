import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Trash2, RefreshCw, Filter, X } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { WrongWord, WrongType, WRONG_TYPE_LABELS } from '../types';
import {
  getWrongWords,
  markWrongWordMastered,
  markWrongWordNotMastered,
  deleteWrongWord,
  clearAllWrongWords,
  getUnmasteredWrongWordCount,
} from '../utils/storage';

const WrongBookPage: React.FC = () => {
  const [wrongWords, setWrongWords] = useState<WrongWord[]>([]);
  const [filterType, setFilterType] = useState<WrongType | 'all'>('all');
  const [showMastered, setShowMastered] = useState<boolean>(true);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    loadWrongWords();
  }, []);

  const loadWrongWords = () => {
    const words = getWrongWords();
    setWrongWords(words);
  };

  const filteredWords = wrongWords.filter(w => {
    if (filterType !== 'all' && w.wrongType !== filterType) return false;
    if (!showMastered && w.mastered) return false;
    return true;
  });

  const unmasteredCount = getUnmasteredWrongWordCount();

  const handleToggleMastered = (word: WrongWord) => {
    if (word.mastered) {
      markWrongWordNotMastered(word.id);
    } else {
      markWrongWordMastered(word.id);
    }
    loadWrongWords();
  };

  const handleDelete = (wordId: string) => {
    deleteWrongWord(wordId);
    loadWrongWords();
  };

  const handleClearAll = () => {
    clearAllWrongWords();
    setWrongWords([]);
    setShowClearConfirm(false);
  };

  const getWrongTypeLabel = (type: WrongType) => {
    const labels: Record<WrongType, { name: string; nameZh: string; icon: string }> = {
      spelling: { name: 'Spelling', nameZh: '拼写', icon: '✏️' },
      meaning: { name: 'Meaning', nameZh: '词义', icon: '📖' },
      pronunciation: { name: 'Pronunciation', nameZh: '发音', icon: '🔊' },
      grammar: { name: 'Grammar', nameZh: '语法', icon: '📝' },
    };
    return labels[type];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="错题本" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 统计卡片 */}
        <div className="grid grid-cols-3 gap-3 mb-5 sm:mb-6">
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-3 sm:w-4 h-3 sm:h-4 text-red-600" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{wrongWords.length}</p>
            <p className="text-xs text-gray-500">总错题</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-3 sm:w-4 h-3 sm:h-4 text-orange-600" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{unmasteredCount}</p>
            <p className="text-xs text-gray-500">待复习</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-600" />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{wrongWords.filter(w => w.mastered).length}</p>
            <p className="text-xs text-gray-500">已掌握</p>
          </div>
        </div>

        {/* 筛选栏 */}
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">筛选</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowMastered(!showMastered)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  showMastered
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {showMastered ? '显示已掌握' : '隐藏已掌握'}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filterType === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              全部
            </button>
            {(Object.keys(WRONG_TYPE_LABELS) as WrongType[]).map((type) => {
              const label = getWrongTypeLabel(type);
              return (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center space-x-1 ${
                    filterType === type
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{label.icon}</span>
                  <span>{label.nameZh}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 清空按钮 */}
        {wrongWords.length > 0 && (
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowClearConfirm(true)}
              className="flex items-center space-x-1 px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span className="text-sm">清空全部</span>
            </button>
          </div>
        )}

        {/* 错题列表 */}
        {filteredWords.length > 0 ? (
          <div className="space-y-3">
            {filteredWords.map((word) => {
              const label = getWrongTypeLabel(word.wrongType);
              return (
                <div
                  key={word.id}
                  className={`bg-white rounded-xl p-4 shadow-sm border transition-all ${
                    word.mastered
                      ? 'border-green-200 bg-green-50/50'
                      : 'border-gray-100 hover:border-red-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-800">{word.word}</span>
                      <span className={`px-2 py-0.5 rounded text-xs flex items-center space-x-1 ${
                        word.mastered
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        <span>{label.icon}</span>
                        <span>{label.nameZh}</span>
                      </span>
                      {word.mastered && (
                        <span className="px-2 py-0.5 rounded text-xs bg-green-500 text-white flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3" />
                          <span>已掌握</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleToggleMastered(word)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          word.mastered
                            ? 'text-green-600 hover:bg-green-100'
                            : 'text-gray-400 hover:bg-gray-100'
                        }`}
                        title={word.mastered ? '标记为未掌握' : '标记为已掌握'}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(word.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="删除"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm space-y-1">
                    <div className="flex items-start">
                      <span className="text-gray-500 w-16 flex-shrink-0">错误答案：</span>
                      <span className="text-red-600 line-through">{word.wrongAnswer}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 w-16 flex-shrink-0">正确答案：</span>
                      <span className="text-green-600 font-medium">{word.correctAnswer}</span>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>复习次数：{word.reviewCount}</span>
                    <span>添加时间：{new Date(word.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {wrongWords.length === 0 ? '错题本为空' : '没有符合条件的错题'}
            </h3>
            <p className="text-gray-500 text-sm text-center">
              {wrongWords.length === 0
                ? '在测试中答错的题目会自动添加到错题本'
                : '尝试调整筛选条件查看更多错题'}
            </p>
          </div>
        )}
      </main>

      {/* 清空确认弹窗 */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">确认清空</h3>
            <p className="text-gray-600 text-sm mb-4">
              确定要清空所有错题吗？此操作不可撤销。
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleClearAll}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
              >
                清空
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default WrongBookPage;
