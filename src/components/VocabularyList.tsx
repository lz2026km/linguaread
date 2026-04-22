import React from 'react';
import { Volume2, Trash2, BookOpen } from 'lucide-react';
import { FavoriteWord } from '../types';
import { playPronunciation } from '../utils/dictionary';

interface VocabularyListProps {
  favorites: FavoriteWord[];
  onDelete: (wordId: string) => void;
}

const VocabularyList: React.FC<VocabularyListProps> = ({ favorites, onDelete }) => {
  const handlePlayAudio = (word: string) => {
    playPronunciation(word);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return '今天';
    if (diffDays === 1) return '昨天';
    if (diffDays < 7) return `${diffDays}天前`;
    return date.toLocaleDateString('zh-CN');
  };

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">生词本为空</h3>
        <p className="text-gray-500 text-center max-w-xs">
          点击阅读文章，碰到不认识的单词点击查看释义并收藏
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {favorites.map((word) => (
        <div
          key={word.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="p-4">
            {/* 单词头部 */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{word.word}</h3>
                {word.phonetic && (
                  <p className="text-sm text-gray-500">{word.phonetic}</p>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handlePlayAudio(word.word)}
                  className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  title="播放发音"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(word.id)}
                  className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                  title="删除"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 词性和释义 */}
            <div className="mb-3">
              {word.partOfSpeech && (
                <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded mr-2">
                  {word.partOfSpeech}
                </span>
              )}
              <span className="text-gray-700">{word.definition}</span>
            </div>

            {/* 例句 */}
            {word.exampleSentence && (
              <div className="text-sm text-gray-500 italic border-l-2 border-gray-200 pl-3 py-1 mb-3">
                "{word.exampleSentence}"
              </div>
            )}

            {/* 底部信息 */}
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <BookOpen className="w-3 h-3" />
                <span>{word.articleTitle}</span>
              </div>
              <span>{formatDate(word.createdAt)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VocabularyList;
