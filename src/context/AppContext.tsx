import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FavoriteWord, FavoriteArticle, Bookmark, QuizHistory, Level } from '../types';
import {
  getFavoriteWords,
  addFavoriteWord,
  removeFavoriteWord,
  getFavoriteArticles,
  addFavoriteArticle,
  removeFavoriteArticle,
  isArticleFavorited,
  getBookmarks,
  addBookmark,
  removeBookmark,
  hasBookmark,
  getQuizHistory,
  addQuizHistory,
} from '../utils/storage';

interface AppContextType {
  // 单词收藏
  favorites: FavoriteWord[];
  selectedLevel: Level;
  setSelectedLevel: (level: Level) => void;
  addToFavorites: (word: FavoriteWord) => void;
  removeFromFavorites: (wordId: string) => void;
  isFavorited: (word: string) => boolean;
  refreshFavorites: () => void;

  // 文章收藏
  favoriteArticles: FavoriteArticle[];
  addToFavoriteArticles: (article: FavoriteArticle) => void;
  removeFromFavoriteArticles: (articleId: string) => void;
  isArticleFavorited: (articleId: string) => boolean;
  refreshFavoriteArticles: () => void;

  // 书签
  bookmarks: Bookmark[];
  addToBookmarks: (bookmark: Bookmark) => void;
  removeFromBookmarks: (bookmarkId: string) => void;
  isBookmarked: (articleId: string) => boolean;
  refreshBookmarks: () => void;

  // 测试历史
  quizHistory: QuizHistory[];
  addToQuizHistory: (history: QuizHistory) => void;
  refreshQuizHistory: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteWord[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<Level>('junior');
  const [favoriteArticles, setFavoriteArticles] = useState<FavoriteArticle[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [quizHistory, setQuizHistory] = useState<QuizHistory[]>([]);

  // 初始化加载所有数据
  useEffect(() => {
    refreshFavorites();
    refreshFavoriteArticles();
    refreshBookmarks();
    refreshQuizHistory();
  }, []);

  // 单词收藏相关
  const refreshFavorites = () => {
    setFavorites(getFavoriteWords());
  };

  const addToFavorites = (word: FavoriteWord) => {
    addFavoriteWord(word);
    refreshFavorites();
  };

  const removeFromFavorites = (wordId: string) => {
    removeFavoriteWord(wordId);
    refreshFavorites();
  };

  const isFavorited = (word: string): boolean => {
    return favorites.some(f => f.word.toLowerCase() === word.toLowerCase());
  };

  // 文章收藏相关
  const refreshFavoriteArticles = () => {
    setFavoriteArticles(getFavoriteArticles());
  };

  const addToFavoriteArticles = (article: FavoriteArticle) => {
    addFavoriteArticle(article);
    refreshFavoriteArticles();
  };

  const removeFromFavoriteArticles = (articleId: string) => {
    removeFavoriteArticle(articleId);
    refreshFavoriteArticles();
  };

  const isArticleFav = (articleId: string): boolean => {
    return isArticleFavorited(articleId);
  };

  // 书签相关
  const refreshBookmarks = () => {
    setBookmarks(getBookmarks());
  };

  const addToBookmarks = (bookmark: Bookmark) => {
    addBookmark(bookmark);
    refreshBookmarks();
  };

  const removeFromBookmarks = (bookmarkId: string) => {
    removeBookmark(bookmarkId);
    refreshBookmarks();
  };

  const isBookmarked = (articleId: string): boolean => {
    return hasBookmark(articleId);
  };

  // 测试历史相关
  const refreshQuizHistory = () => {
    setQuizHistory(getQuizHistory());
  };

  const addToQuizHistory = (history: QuizHistory) => {
    addQuizHistory(history);
    refreshQuizHistory();
  };

  return (
    <AppContext.Provider
      value={{
        // 单词收藏
        favorites,
        selectedLevel,
        setSelectedLevel,
        addToFavorites,
        removeFromFavorites,
        isFavorited,
        refreshFavorites,

        // 文章收藏
        favoriteArticles,
        addToFavoriteArticles,
        removeFromFavoriteArticles,
        isArticleFavorited: isArticleFav,
        refreshFavoriteArticles,

        // 书签
        bookmarks,
        addToBookmarks,
        removeFromBookmarks,
        isBookmarked,
        refreshBookmarks,

        // 测试历史
        quizHistory,
        addToQuizHistory,
        refreshQuizHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
