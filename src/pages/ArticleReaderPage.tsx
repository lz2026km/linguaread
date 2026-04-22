import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Bookmark, Check } from 'lucide-react';
import Header from '../components/Header';
import Reader from '../components/Reader';
import DictionaryModal from '../components/DictionaryModal';
import { getArticleById } from '../data/articles';
import { Article, FavoriteArticle, Bookmark as BookmarkType } from '../types';
import { useApp } from '../context/AppContext';
import { addReadingTime, addReadingHistory } from '../utils/storage';

const ArticleReaderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [selectedWord, setSelectedWord] = useState<string>('');
  const [selectedSentence, setSelectedSentence] = useState<string>('');
  const startTimeRef = useRef<number>(0);
  const {
    addToFavoriteArticles,
    removeFromFavoriteArticles,
    isArticleFavorited,
    addToBookmarks,
    isBookmarked,
  } = useApp();

  useEffect(() => {
    if (id) {
      const foundArticle = getArticleById(id);
      if (foundArticle) {
        setArticle(foundArticle);
        // 记录开始阅读时间
        startTimeRef.current = Date.now();
        // 添加到阅读历史
        addReadingHistory({
          articleId: foundArticle.id,
          title: foundArticle.title,
          titleZh: foundArticle.titleZh,
          author: foundArticle.author,
          level: foundArticle.level,
          readAt: new Date().toISOString(),
        });
      } else {
        navigate('/articles');
      }
    }
  }, [id, navigate]);

  // 离开页面时保存阅读时长
  useEffect(() => {
    return () => {
      if (startTimeRef.current > 0) {
        const readingSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
        if (readingSeconds > 5) { // 只记录超过5秒的阅读
          addReadingTime(readingSeconds);
        }
      }
    };
  }, []);

  const isFavorited = article ? isArticleFavorited(article.id) : false;
  const hasBookmark = article ? isBookmarked(article.id) : false;

  const handleWordClick = (word: string, sentence: string) => {
    setSelectedWord(word);
    setSelectedSentence(sentence);
  };

  const handleCloseModal = () => {
    setSelectedWord('');
    setSelectedSentence('');
  };

  const handleToggleFavorite = () => {
    if (!article) return;

    if (isFavorited) {
      removeFromFavoriteArticles(article.id);
    } else {
      const favoriteArticle: FavoriteArticle = {
        id: Date.now().toString(),
        articleId: article.id,
        title: article.title,
        titleZh: article.titleZh,
        level: article.level,
        author: article.author,
        createdAt: new Date().toISOString(),
      };
      addToFavoriteArticles(favoriteArticle);
    }
  };

  const handleAddBookmark = () => {
    if (!article) return;

    const bookmark: BookmarkType = {
      id: Date.now().toString(),
      articleId: article.id,
      articleTitle: article.title,
      articleTitleZh: article.titleZh,
      position: 0,
      createdAt: new Date().toISOString(),
    };
    addToBookmarks(bookmark);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack title={article.titleZh} />

      {/* 操作按钮 */}
      <div className="fixed top-14 right-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-2 px-3 flex items-center space-x-2 md:top-14">
        <button
          onClick={handleToggleFavorite}
          className={`p-2 rounded-full transition-all ${
            isFavorited
              ? 'bg-red-100 text-red-500'
              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
          }`}
          title={isFavorited ? '取消收藏' : '收藏文章'}
        >
          {isFavorited ? (
            <Heart className="w-5 h-5 fill-current" />
          ) : (
            <Heart className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={handleAddBookmark}
          className={`p-2 rounded-full transition-all ${
            hasBookmark
              ? 'bg-indigo-100 text-indigo-500'
              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
          }`}
          title={hasBookmark ? '已添加书签' : '添加书签'}
        >
          {hasBookmark ? (
            <Bookmark className="w-5 h-5 fill-current" />
          ) : (
            <Bookmark className="w-5 h-5" />
          )}
        </button>
      </div>

      <main className="pt-24 pb-8 px-3 sm:px-4 max-w-3xl mx-auto min-h-screen">
        <Reader article={article} onWordClick={handleWordClick} />
      </main>

      {/* 提示收藏成功 */}
      {isFavorited && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-fadeIn md:top-20">
          <Check className="w-4 h-4" />
          <span className="text-sm">已收藏到我的收藏</span>
        </div>
      )}

      {/* 提示书签成功 */}
      {hasBookmark && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-fadeIn md:top-20">
          <Check className="w-4 h-4" />
          <span className="text-sm">已添加书签</span>
        </div>
      )}

      {/* 查词浮层 */}
      {selectedWord && (
        <DictionaryModal
          word={selectedWord}
          sentence={selectedSentence}
          articleTitle={article.title}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ArticleReaderPage;
