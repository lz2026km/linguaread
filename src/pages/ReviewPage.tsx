import React, { useState, useEffect, useRef } from 'react';
import { Brain, CheckCircle, XCircle, ChevronLeft, Volume2, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { ReviewRecord, EBBINGHAUS_INTERVALS } from '../types';
import {
  getTodayReviewWords,
  updateReviewRecord,
  deleteReviewRecord,
  getReviewRecordCount,
} from '../utils/storage';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

const ReviewPage: React.FC = () => {
  const [reviewWords, setReviewWords] = useState<ReviewRecord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    loadReviewWords();
  }, []);

  const loadReviewWords = () => {
    const words = getTodayReviewWords();
    setReviewWords(words);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const totalCount = getReviewRecordCount();
  const currentWord = reviewWords[currentIndex];
  const remainingCount = reviewWords.length - currentIndex;

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating || !currentWord) return;

    setIsAnimating(true);
    setAnimationDirection(direction);

    setTimeout(() => {
      if (direction === 'right') {
        // 记住了 - 右滑
        updateReviewRecord(currentWord.id, true);
      } else {
        // 没记住 - 左滑
        updateReviewRecord(currentWord.id, false);
      }

      setIsAnimating(false);
      setAnimationDirection(null);

      if (currentIndex >= reviewWords.length - 1) {
        // 复习完成
        setReviewWords([]);
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prev => prev + 1);
        setShowAnswer(false);
      }
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 80;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // 左滑 - 再记一次
        handleSwipe('left');
      } else {
        // 右滑 - 记住了
        handleSwipe('right');
      }
    }
  };

  const handleSpeak = (word: string) => {
    speak(word);
  };

  const getNextReviewText = (stage: number): string => {
    if (stage >= 5) return '已掌握';
    const days = EBBINGHAUS_INTERVALS[stage];
    return `${days}天后`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header title="艾宾浩斯复习" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 进度卡片 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-indigo-100 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">今日待复习</p>
                <p className="text-2xl font-bold text-indigo-600">
                  {currentWord ? remainingCount : 0}
                  <span className="text-sm text-gray-400 font-normal ml-1">/ {totalCount}</span>
                </p>
              </div>
            </div>
            {currentWord && (
              <div className="text-right">
                <p className="text-xs text-gray-500">下次复习</p>
                <p className="text-sm font-medium text-indigo-600">
                  {getNextReviewText(currentWord.reviewStage)}
                </p>
              </div>
            )}
          </div>
          {reviewWords.length > 0 && (
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex) / reviewWords.length) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* 艾宾浩斯说明 */}
        <div className="bg-indigo-50 rounded-xl p-3 mb-6 border border-indigo-100">
          <p className="text-xs text-indigo-700">
            💡 艾宾浩斯记忆法：分别在1、2、4、7、15天后复习，科学对抗遗忘曲线
          </p>
        </div>

        {currentWord ? (
          <>
            {/* 单词卡片 */}
            <div
              className={`relative transition-all duration-300 ${
                isAnimating
                  ? animationDirection === 'right'
                    ? 'translate-x-full opacity-0'
                    : '-translate-x-full opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                {/* 单词 */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <h2 className="text-3xl font-bold text-gray-800">{currentWord.word}</h2>
                    <button
                      onClick={() => handleSpeak(currentWord.word)}
                      className="p-2 rounded-full hover:bg-indigo-50 text-indigo-600 transition-colors"
                    >
                      <Volume2 className="w-6 h-6" />
                    </button>
                  </div>
                  {currentWord.phonetic && (
                    <p className="text-gray-500">{currentWord.phonetic}</p>
                  )}
                </div>

                {/* 提示文字 */}
                <p className="text-center text-gray-400 text-sm mb-4">
                  👆 左右滑动进行选择
                </p>

                {/* 释义区域 */}
                {!showAnswer ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-indigo-400" />
                    </div>
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                    >
                      显示释义
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">词性</p>
                      <p className="text-indigo-600 font-medium">{currentWord.partOfSpeech}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">释义</p>
                      <p className="text-gray-800">{currentWord.definition}</p>
                    </div>
                    {currentWord.exampleSentence && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-xs text-gray-500 mb-1">例句</p>
                        <p className="text-gray-700 italic">{currentWord.exampleSentence}</p>
                      </div>
                    )}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">来源</p>
                      <p className="text-gray-600 text-sm">{currentWord.articleTitle}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 左右滑动提示 */}
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-opacity ${
                  showAnswer ? 'opacity-100' : 'opacity-0'
                }`}>
                  <XCircle className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-opacity ${
                  showAnswer ? 'opacity-100' : 'opacity-0'
                }`}>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            {showAnswer && (
              <div className="flex justify-center space-x-6 mt-6 animate-fade-in">
                <button
                  onClick={() => handleSwipe('left')}
                  className="flex flex-col items-center space-y-1 group"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <XCircle className="w-7 h-7 text-red-600" />
                  </div>
                  <span className="text-xs text-red-600 font-medium">再记一次</span>
                </button>
                <button
                  onClick={() => handleSwipe('right')}
                  className="flex flex-col items-center space-y-1 group"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">记住了</span>
                </button>
              </div>
            )}

            {/* 进度指示器 */}
            <div className="flex justify-center space-x-2 mt-6">
              {reviewWords.slice(0, Math.min(10, reviewWords.length)).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-indigo-600'
                      : index < currentIndex
                        ? 'bg-indigo-300'
                        : 'bg-gray-300'
                  }`}
                />
              ))}
              {reviewWords.length > 10 && (
                <span className="text-xs text-gray-400 ml-1">...</span>
              )}
            </div>
          </>
        ) : (
          /* 复习完成或无可复习内容 */
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {totalCount === 0 ? '暂无复习计划' : '今日复习完成！'}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              {totalCount === 0
                ? '在生词本中添加单词即可开始艾宾浩斯复习'
                : '太棒了！所有待复习单词都已完成，记得明天继续复习哦~'}
            </p>
            {totalCount > 0 && (
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 w-full max-w-xs">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">复习计划总单词数</span>
                  <span className="text-lg font-bold text-indigo-600">{totalCount}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 操作提示 */}
        {currentWord && showAnswer && (
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              ← 左滑：没记住，继续当前阶段 &nbsp;&nbsp;|&nbsp;&nbsp; 右滑：记住了，进入下一阶段 →
            </p>
          </div>
        )}
      </main>

      <BottomNav />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ReviewPage;
