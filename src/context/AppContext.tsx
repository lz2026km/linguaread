import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FavoriteWord, FavoriteArticle, Bookmark, QuizHistory, Level } from '../types';
import { Note, HighlightColor } from '../utils/storage';
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
  getNotes,
  addNote,
  deleteNote as removeNote,
} from '../utils/storage';

interface AppContextType {
  // 深色模式
  darkMode: boolean;
  toggleDarkMode: () => void;

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

  // 笔记/标注
  notes: Note[];
  addToNotes: (note: Note) => void;
  removeFromNotes: (noteId: string) => void;
  refreshNotes: () => void;

  // 网络状态
  isOnline: boolean;
  offlineMode: boolean;
  setOfflineMode: (offline: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteWord[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<Level>('junior');
  const [favoriteArticles, setFavoriteArticles] = useState<FavoriteArticle[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [quizHistory, setQuizHistory] = useState<QuizHistory[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineMode, setOfflineMode] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // 深色模式切换
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newVal = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newVal));
      if (newVal) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newVal;
    });
  };

  // 初始化时应用深色模式
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // 初始化加载所有数据
  useEffect(() => {
    refreshFavorites();
    refreshFavoriteArticles();
    refreshBookmarks();
    refreshQuizHistory();
    refreshNotes();
  }, []);

  // 监听网络状态变化
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setOfflineMode(false);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setOfflineMode(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
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

  // 笔记相关
  const refreshNotes = () => {
    setNotes(getNotes());
  };

  const addToNotes = (note: Note) => {
    addNote(note);
    refreshNotes();
  };

  const removeFromNotes = (noteId: string) => {
    removeNote(noteId);
    refreshNotes();
  };

  return (
    <AppContext.Provider
      value={{
        // 深色模式
        darkMode,
        toggleDarkMode,

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

        // 笔记
        notes,
        addToNotes,
        removeFromNotes,
        refreshNotes,

        // 网络状态
        isOnline,
        offlineMode,
        setOfflineMode,
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