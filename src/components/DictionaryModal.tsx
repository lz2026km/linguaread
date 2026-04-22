import React, { useState, useEffect } from 'react';
import { X, Volume2, Star, Check, Loader2, Languages } from 'lucide-react';
import { WordDefinition, FavoriteWord } from '../types';
import { fetchWordDefinition, playPronunciation, getChineseTranslation } from '../utils/dictionary';
import { useApp } from '../context/AppContext';

interface DictionaryModalProps {
  word: string;
  sentence: string;
  articleTitle: string;
  onClose: () => void;
}

const DictionaryModal: React.FC<DictionaryModalProps> = ({ word, sentence, articleTitle, onClose }) => {
  const [definition, setDefinition] = useState<WordDefinition | null>(null);
  const [chineseTranslation, setChineseTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToFavorites, isFavorited, favorites } = useApp();

  const isFavoritedWord = isFavorited(word);

  useEffect(() => {
    const fetchDefinition = async () => {
      setLoading(true);
      setError(null);
      setChineseTranslation(null);

      try {
        // 同时获取英文释义和中文翻译
        const [result, cnTranslation] = await Promise.all([
          fetchWordDefinition(word),
          getChineseTranslation(word),
        ]);

        if (result) {
          setDefinition(result);
        } else {
          setError('未找到该单词的释义');
        }

        // 设置中文翻译
        if (cnTranslation) {
          setChineseTranslation(cnTranslation);
        }
      } catch (err) {
        setError('获取释义失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    if (word) {
      fetchDefinition();
    }
  }, [word]);

  const handlePlayAudio = () => {
    const audioUrl = definition?.phonetics?.find(p => p.audio)?.audio;
    playPronunciation(word, audioUrl);
  };

  const handleFavorite = () => {
    if (!definition) return;

    const favoriteWord: FavoriteWord = {
      id: Date.now().toString(),
      word: definition.word,
      phonetic: definition.phonetic || definition.phonetics[0]?.text,
      definition: definition.meanings[0]?.definitions[0]?.definition || '',
      partOfSpeech: definition.meanings[0]?.partOfSpeech || '',
      exampleSentence: sentence,
      articleTitle: articleTitle,
      createdAt: new Date().toISOString(),
    };

    addToFavorites(favoriteWord);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* 底部弹出面板 */}
      <div className="relative bg-white rounded-t-3xl w-full max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-hidden animate-slideUp">
        {/* 拖动手柄 */}
        <div className="flex justify-center py-2 sm:py-3">
          <div className="w-10 sm:w-12 h-1.5 bg-gray-200 rounded-full" />
        </div>

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors active:scale-95 touch-manipulation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 内容区域 */}
        <div className="px-4 sm:px-6 pb-6 sm:pb-8 overflow-y-auto max-h-[calc(85vh-40px)] sm:max-h-[calc(80vh-60px)]">
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
              <p className="text-gray-500">正在查询...</p>
            </div>
          )}

          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-4xl mb-3">😕</div>
              <p className="text-gray-600 mb-2">{error}</p>
              <p className="text-sm text-gray-400">您可以尝试查询其他单词</p>
            </div>
          )}

          {definition && !loading && (
            <div>
              {/* 单词头部 */}
              <div className="mb-3 sm:mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">{definition.word}</h2>
                    {definition.phonetic && (
                      <p className="text-base sm:text-lg text-gray-500">{definition.phonetic}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button
                      onClick={handlePlayAudio}
                      className="p-2.5 sm:p-3 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors active:scale-95 touch-manipulation"
                    >
                      <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                    <button
                      onClick={handleFavorite}
                      className={`p-2.5 sm:p-3 rounded-full transition-colors active:scale-95 touch-manipulation ${
                        isFavoritedWord
                          ? 'bg-amber-100 text-amber-500'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      <Star className={`w-4 sm:w-5 h-4 sm:h-5 ${isFavoritedWord ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
                {/* 中文翻译显示 - 更自然的展示方式 */}
                {chineseTranslation && (
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Languages className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-green-600 uppercase tracking-wide">中文释义</span>
                    </div>
                    <p className="text-lg sm:text-xl text-green-800 font-medium leading-relaxed">{chineseTranslation}</p>
                  </div>
                )}
              </div>

              {/* 收藏提示 */}
              {isFavoritedWord && (
                <div className="flex items-center space-x-2 text-sm text-amber-600 mb-3 sm:mb-4">
                  <Check className="w-4 h-4" />
                  <span>已加入生词本</span>
                </div>
              )}

              {/* 释义列表 */}
              <div className="space-y-3 sm:space-y-4">
                {definition.meanings.map((meaning, index) => (
                  <div key={index} className="border-l-4 border-indigo-200 pl-3 sm:pl-4">
                    <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded mb-1.5 sm:mb-2">
                      {meaning.partOfSpeech}
                    </span>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {meaning.definitions.slice(0, 3).map((def, defIndex) => (
                        <li key={defIndex} className="text-gray-700 text-sm sm:text-base">
                          <p className="leading-relaxed">{def.definition}</p>
                          {def.example && (
                            <p className="text-xs sm:text-sm text-gray-500 mt-1 italic">
                              "{def.example}"
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* 例句 */}
              {sentence && (
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-400 mb-1.5 sm:mb-2">例句</p>
                  <p className="text-sm sm:text-base text-gray-700 italic">"{sentence}"</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1.5 sm:mt-2">—— {articleTitle}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DictionaryModal;
