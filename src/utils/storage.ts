import { FavoriteWord, FavoriteArticle, Bookmark, QuizHistory, VoiceSettings } from '../types';

// Storage Keys
const FAVORITE_WORDS_KEY = 'linguaread_favorites';
const FAVORITE_ARTICLES_KEY = 'linguaread_favorite_articles';
const BOOKMARKS_KEY = 'linguaread_bookmarks';
const QUIZ_HISTORY_KEY = 'linguaread_quiz_history';
const VOICE_SETTINGS_KEY = 'linguaread_voice_settings';

// ========== 单词收藏相关 ==========

// 获取收藏的单词列表
export const getFavoriteWords = (): FavoriteWord[] => {
  try {
    const data = localStorage.getItem(FAVORITE_WORDS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting favorite words:', error);
    return [];
  }
};

// 保存单词到收藏
export const addFavoriteWord = (word: FavoriteWord): void => {
  try {
    const favorites = getFavoriteWords();
    const exists = favorites.some(f => f.word.toLowerCase() === word.word.toLowerCase());
    if (!exists) {
      favorites.unshift(word);
      localStorage.setItem(FAVORITE_WORDS_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding favorite word:', error);
  }
};

// 从收藏中删除单词
export const removeFavoriteWord = (wordId: string): void => {
  try {
    const favorites = getFavoriteWords();
    const filtered = favorites.filter(f => f.id !== wordId);
    localStorage.setItem(FAVORITE_WORDS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing favorite word:', error);
  }
};

// 检查单词是否已收藏
export const isWordFavorited = (word: string): boolean => {
  try {
    const favorites = getFavoriteWords();
    return favorites.some(f => f.word.toLowerCase() === word.toLowerCase());
  } catch (error) {
    console.error('Error checking favorite status:', error);
    return false;
  }
};

// 获取收藏单词的数量
export const getFavoriteCount = (): number => {
  return getFavoriteWords().length;
};

// 清空所有收藏
export const clearAllFavorites = (): void => {
  try {
    localStorage.removeItem(FAVORITE_WORDS_KEY);
  } catch (error) {
    console.error('Error clearing favorites:', error);
  }
};

// ========== 文章收藏相关 ==========

// 获取收藏的文章列表
export const getFavoriteArticles = (): FavoriteArticle[] => {
  try {
    const data = localStorage.getItem(FAVORITE_ARTICLES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting favorite articles:', error);
    return [];
  }
};

// 收藏文章
export const addFavoriteArticle = (article: FavoriteArticle): void => {
  try {
    const favorites = getFavoriteArticles();
    const exists = favorites.some(f => f.articleId === article.articleId);
    if (!exists) {
      favorites.unshift(article);
      localStorage.setItem(FAVORITE_ARTICLES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding favorite article:', error);
  }
};

// 取消收藏文章
export const removeFavoriteArticle = (articleId: string): void => {
  try {
    const favorites = getFavoriteArticles();
    const filtered = favorites.filter(f => f.articleId !== articleId);
    localStorage.setItem(FAVORITE_ARTICLES_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing favorite article:', error);
  }
};

// 检查文章是否已收藏
export const isArticleFavorited = (articleId: string): boolean => {
  try {
    const favorites = getFavoriteArticles();
    return favorites.some(f => f.articleId === articleId);
  } catch (error) {
    console.error('Error checking article favorite status:', error);
    return false;
  }
};

// 获取收藏文章的数量
export const getFavoriteArticleCount = (): number => {
  return getFavoriteArticles().length;
};

// ========== 书签相关 ==========

// 获取书签列表
export const getBookmarks = (): Bookmark[] => {
  try {
    const data = localStorage.getItem(BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return [];
  }
};

// 添加书签
export const addBookmark = (bookmark: Bookmark): void => {
  try {
    const bookmarks = getBookmarks();
    const exists = bookmarks.some(
      b => b.articleId === bookmark.articleId && b.position === bookmark.position
    );
    if (!exists) {
      bookmarks.unshift(bookmark);
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    }
  } catch (error) {
    console.error('Error adding bookmark:', error);
  }
};

// 删除书签
export const removeBookmark = (bookmarkId: string): void => {
  try {
    const bookmarks = getBookmarks();
    const filtered = bookmarks.filter(b => b.id !== bookmarkId);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing bookmark:', error);
  }
};

// 获取文章的书签
export const getBookmarksByArticle = (articleId: string): Bookmark[] => {
  try {
    const bookmarks = getBookmarks();
    return bookmarks.filter(b => b.articleId === articleId);
  } catch (error) {
    console.error('Error getting article bookmarks:', error);
    return [];
  }
};

// 检查文章是否有书签
export const hasBookmark = (articleId: string): boolean => {
  try {
    const bookmarks = getBookmarks();
    return bookmarks.some(b => b.articleId === articleId);
  } catch (error) {
    console.error('Error checking bookmark:', error);
    return false;
  }
};

// 获取书签数量
export const getBookmarkCount = (): number => {
  return getBookmarks().length;
};

// ========== 测试历史相关 ==========

// 获取测试历史
export const getQuizHistory = (): QuizHistory[] => {
  try {
    const data = localStorage.getItem(QUIZ_HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting quiz history:', error);
    return [];
  }
};

// 添加测试历史
export const addQuizHistory = (history: QuizHistory): void => {
  try {
    const histories = getQuizHistory();
    histories.unshift(history);
    const trimmed = histories.slice(0, 20);
    localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(trimmed));
  } catch (error) {
    console.error('Error adding quiz history:', error);
  }
};

// 获取测试历史数量
export const getQuizHistoryCount = (): number => {
  return getQuizHistory().length;
};

// 获取最近一次测试成绩
export const getLastQuizScore = (): { correct: number; total: number } | null => {
  try {
    const histories = getQuizHistory();
    if (histories.length === 0) return null;
    const last = histories[0];
    return { correct: last.correctAnswers, total: last.totalQuestions };
  } catch (error) {
    console.error('Error getting last quiz score:', error);
    return null;
  }
};

// 清空测试历史
export const clearQuizHistory = (): void => {
  try {
    localStorage.removeItem(QUIZ_HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing quiz history:', error);
  }
};

// ========== 语音设置相关 ==========

// 默认语音设置
export const defaultVoiceSettings: VoiceSettings = {
  voiceGender: 'female',
  voiceURI: '',
  speechRate: 0.8,
  autoPlayInQuiz: true,
};

// 获取语音设置
export const getVoiceSettings = (): VoiceSettings => {
  try {
    const data = localStorage.getItem(VOICE_SETTINGS_KEY);
    return data ? { ...defaultVoiceSettings, ...JSON.parse(data) } : defaultVoiceSettings;
  } catch (error) {
    console.error('Error getting voice settings:', error);
    return defaultVoiceSettings;
  }
};

// 保存语音设置
export const saveVoiceSettings = (settings: VoiceSettings): void => {
  try {
    localStorage.setItem(VOICE_SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving voice settings:', error);
  }
};

// ========== 阅读历史相关 ==========

const READING_HISTORY_KEY = 'linguaread_reading_history';

export interface ReadingHistoryItem {
  articleId: string;
  title: string;
  titleZh: string;
  author: string;
  level: string;
  readAt: string;
}

// 获取阅读历史
export const getReadingHistory = (): ReadingHistoryItem[] => {
  try {
    const data = localStorage.getItem(READING_HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting reading history:', error);
    return [];
  }
};

// 添加阅读历史
export const addReadingHistory = (item: ReadingHistoryItem): void => {
  try {
    const history = getReadingHistory();
    // 移除已存在的相同文章记录
    const filtered = history.filter(h => h.articleId !== item.articleId);
    // 添加到最前面
    filtered.unshift(item);
    // 保留最近20条
    const trimmed = filtered.slice(0, 20);
    localStorage.setItem(READING_HISTORY_KEY, JSON.stringify(trimmed));
  } catch (error) {
    console.error('Error adding reading history:', error);
  }
};

// 清除阅读历史
export const clearReadingHistory = (): void => {
  try {
    localStorage.removeItem(READING_HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing reading history:', error);
  }
};

// ========== 阅读时长相关 ==========

const READING_TIME_KEY = 'linguaread_reading_time';

// 获取累计阅读时长（秒）
export const getReadingTime = (): number => {
  try {
    const data = localStorage.getItem(READING_TIME_KEY);
    return data ? parseInt(data, 10) : 0;
  } catch (error) {
    console.error('Error getting reading time:', error);
    return 0;
  }
};

// 增加阅读时长（秒）
export const addReadingTime = (seconds: number): void => {
  try {
    const currentTime = getReadingTime();
    const newTime = currentTime + seconds;
    localStorage.setItem(READING_TIME_KEY, newTime.toString());
  } catch (error) {
    console.error('Error adding reading time:', error);
  }
};

// 格式化阅读时长
export const formatReadingTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}小时${minutes}分钟`;
  }
  return `${minutes}分钟`;
};

// ========== 课程学习进度相关 ==========

const COURSE_PROGRESS_KEY = 'linguaread_course_progress';
const COURSE_BOOKMARKS_KEY = 'linguaread_course_bookmarks';
const COURSE_STUDY_RECORD_KEY = 'linguaread_course_study_record';

// 获取课程学习进度列表
export const getCourseProgressList = (): import('../types').CourseProgress[] => {
  try {
    const data = localStorage.getItem(COURSE_PROGRESS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting course progress:', error);
    return [];
  }
};

// 获取特定课程单元的进度
export const getCourseProgress = (courseId: string, unitId: string): import('../types').CourseProgress | null => {
  try {
    const progressList = getCourseProgressList();
    return progressList.find(p => p.courseId === courseId && p.unitId === unitId) || null;
  } catch (error) {
    console.error('Error getting course progress:', error);
    return null;
  }
};

// 保存课程学习进度
export const saveCourseProgress = (progress: import('../types').CourseProgress): void => {
  try {
    const progressList = getCourseProgressList();
    const existingIndex = progressList.findIndex(
      p => p.courseId === progress.courseId && p.unitId === progress.unitId
    );
    if (existingIndex >= 0) {
      progressList[existingIndex] = progress;
    } else {
      progressList.push(progress);
    }
    localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(progressList));
  } catch (error) {
    console.error('Error saving course progress:', error);
  }
};

// 获取课程总体进度（百分比）
export const getCourseOverallProgress = (courseId: string, totalUnits: number): number => {
  try {
    const progressList = getCourseProgressList();
    const courseProgress = progressList.filter(p => p.courseId === courseId);
    if (totalUnits === 0) return 0;
    const completedCount = courseProgress.filter(p => p.completed).length;
    return Math.round((completedCount / totalUnits) * 100);
  } catch (error) {
    console.error('Error getting course overall progress:', error);
    return 0;
  }
};

// ========== 课程书签相关 ==========

// 获取课程书签列表
export const getCourseBookmarks = (): import('../types').CourseBookmark[] => {
  try {
    const data = localStorage.getItem(COURSE_BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting course bookmarks:', error);
    return [];
  }
};

// 添加课程书签
export const addCourseBookmark = (bookmark: import('../types').CourseBookmark): void => {
  try {
    const bookmarks = getCourseBookmarks();
    const exists = bookmarks.some(
      b => b.courseId === bookmark.courseId &&
           b.unitId === bookmark.unitId &&
           b.position === bookmark.position
    );
    if (!exists) {
      bookmarks.unshift(bookmark);
      localStorage.setItem(COURSE_BOOKMARKS_KEY, JSON.stringify(bookmarks));
    }
  } catch (error) {
    console.error('Error adding course bookmark:', error);
  }
};

// 删除课程书签
export const removeCourseBookmark = (bookmarkId: string): void => {
  try {
    const bookmarks = getCourseBookmarks();
    const filtered = bookmarks.filter(b => b.id !== bookmarkId);
    localStorage.setItem(COURSE_BOOKMARKS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing course bookmark:', error);
  }
};

// 获取课程单元的书签
export const getCourseBookmarksByUnit = (courseId: string, unitId: string): import('../types').CourseBookmark[] => {
  try {
    const bookmarks = getCourseBookmarks();
    return bookmarks.filter(b => b.courseId === courseId && b.unitId === unitId);
  } catch (error) {
    console.error('Error getting course unit bookmarks:', error);
    return [];
  }
};

// ========== 课程学习记录相关 ==========

// 获取课程学习记录
export const getCourseStudyRecord = (): import('../types').CourseStudyRecord[] => {
  try {
    const data = localStorage.getItem(COURSE_STUDY_RECORD_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting course study record:', error);
    return [];
  }
};

// 保存课程学习记录
export const saveCourseStudyRecord = (record: import('../types').CourseStudyRecord): void => {
  try {
    const records = getCourseStudyRecord();
    const existingIndex = records.findIndex(r => r.courseId === record.courseId);
    if (existingIndex >= 0) {
      records[existingIndex] = record;
    } else {
      records.push(record);
    }
    localStorage.setItem(COURSE_STUDY_RECORD_KEY, JSON.stringify(records));
  } catch (error) {
    console.error('Error saving course study record:', error);
  }
};

// 获取课程最近学习的单元
export const getLastStudiedUnit = (courseId: string): string | null => {
  try {
    const records = getCourseStudyRecord();
    const record = records.find(r => r.courseId === courseId);
    return record?.lastUnitId || null;
  } catch (error) {
    console.error('Error getting last studied unit:', error);
    return null;
  }
};

// ========== 学习打卡相关 ==========

const CHECKIN_RECORDS_KEY = 'linguaread_checkin_records';

export interface CheckInRecord {
  date: string; // 格式: YYYY-MM-DD
  checkedInAt: string; // 时间戳
}

// 获取打卡记录
export const getCheckInRecords = (): CheckInRecord[] => {
  try {
    const data = localStorage.getItem(CHECKIN_RECORDS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting check-in records:', error);
    return [];
  }
};

// 打卡
export const checkIn = (): CheckInRecord | null => {
  try {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD

    // 检查今天是否已打卡
    const records = getCheckInRecords();
    const alreadyCheckedIn = records.some(r => r.date === dateStr);

    if (alreadyCheckedIn) {
      return null; // 今天已打卡
    }

    const newRecord: CheckInRecord = {
      date: dateStr,
      checkedInAt: new Date().toISOString(),
    };

    records.unshift(newRecord);
    localStorage.setItem(CHECKIN_RECORDS_KEY, JSON.stringify(records));

    return newRecord;
  } catch (error) {
    console.error('Error checking in:', error);
    return null;
  }
};

// 检查指定日期是否已打卡
export const isCheckedIn = (date: string): boolean => {
  try {
    const records = getCheckInRecords();
    return records.some(r => r.date === date);
  } catch (error) {
    console.error('Error checking check-in status:', error);
    return false;
  }
};

// 获取本月的打卡次数
export const getMonthlyCheckInCount = (year: number, month: number): number => {
  try {
    const records = getCheckInRecords();
    const monthStr = `${year}-${String(month).padStart(2, '0')}`;
    return records.filter(r => r.date.startsWith(monthStr)).length;
  } catch (error) {
    console.error('Error getting monthly check-in count:', error);
    return 0;
  }
};

// 获取本年的打卡次数
export const getYearlyCheckInCount = (year: number): number => {
  try {
    const records = getCheckInRecords();
    const yearStr = String(year);
    return records.filter(r => r.date.startsWith(yearStr)).length;
  } catch (error) {
    console.error('Error getting yearly check-in count:', error);
    return 0;
  }
};

// 获取累计打卡次数
export const getTotalCheckInCount = (): number => {
  try {
    return getCheckInRecords().length;
  } catch (error) {
    console.error('Error getting total check-in count:', error);
    return 0;
  }
};

// 获取指定月份的打卡日期列表
export const getCheckInDatesByMonth = (year: number, month: number): string[] => {
  try {
    const records = getCheckInRecords();
    const monthStr = `${year}-${String(month).padStart(2, '0')}`;
    return records.filter(r => r.date.startsWith(monthStr)).map(r => r.date);
  } catch (error) {
    console.error('Error getting check-in dates by month:', error);
    return [];
  }
};

// ========== 笔记相关 ==========

const NOTES_KEY = 'linguaread_notes';

// 高亮颜色类型
export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'orange';

// 高亮类型
export type HighlightType = 'word' | 'sentence' | 'paragraph';

export interface Note {
  id: string;
  articleId: string;
  paragraphIndex: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  // 新增：高亮功能
  isHighlight?: boolean;
  highlightText?: string;      // 选中的文本
  highlightColor?: HighlightColor;  // 高亮颜色
  highlightComment?: string;   // 批示/注释
  highlightType?: HighlightType;     // 高亮类型
  startOffset?: number;        // 文本起始位置
  endOffset?: number;         // 文本结束位置
}

// 获取笔记列表
export const getNotes = (): Note[] => {
  try {
    const data = localStorage.getItem(NOTES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting notes:', error);
    return [];
  }
};

// 获取某篇文章的笔记
export const getNotesByArticle = (articleId: string): Note[] => {
  try {
    const notes = getNotes();
    return notes.filter(n => n.articleId === articleId);
  } catch (error) {
    console.error('Error getting notes by article:', error);
    return [];
  }
};

// 添加笔记
export const addNote = (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note => {
  try {
    const notes = getNotes();
    const newNote: Note = {
      ...note,
      id: `note_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    notes.unshift(newNote);
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    return newNote;
  } catch (error) {
    console.error('Error adding note:', error);
    throw error;
  }
};

// 更新笔记
export const updateNote = (
  noteId: string,
  content: string,
  highlightColor?: HighlightColor,
  highlightComment?: string
): boolean => {
  try {
    const notes = getNotes();
    const noteIndex = notes.findIndex(n => n.id === noteId);
    if (noteIndex >= 0) {
      notes[noteIndex].content = content;
      if (highlightColor !== undefined) {
        notes[noteIndex].highlightColor = highlightColor;
      }
      if (highlightComment !== undefined) {
        notes[noteIndex].highlightComment = highlightComment;
      }
      notes[noteIndex].updatedAt = new Date().toISOString();
      localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating note:', error);
    return false;
  }
};

// 删除笔记
export const deleteNote = (noteId: string): boolean => {
  try {
    const notes = getNotes();
    const filtered = notes.filter(n => n.id !== noteId);
    localStorage.setItem(NOTES_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting note:', error);
    return false;
  }
};

// ========== 留言板相关 ==========

const MESSAGES_KEY = 'linguaread_messages';

export interface GuestMessage {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
  likes: number;
  rating?: number;  // 1-5星评分
}

// 获取留言列表
export const getMessages = (): GuestMessage[] => {
  try {
    const data = localStorage.getItem(MESSAGES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting messages:', error);
    return [];
  }
};

// 添加留言
export const addMessage = (nickname: string, content: string, rating?: number): GuestMessage => {
  try {
    const messages = getMessages();
    const newMessage: GuestMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      nickname: nickname.trim() || '匿名用户',
      content: content.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      rating: rating,
    };
    messages.unshift(newMessage);
    // 保留最近100条留言
    const trimmed = messages.slice(0, 100);
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(trimmed));
    return newMessage;
  } catch (error) {
    console.error('Error adding message:', error);
    throw error;
  }
};

// 删除留言
export const deleteMessage = (messageId: string): boolean => {
  try {
    const messages = getMessages();
    const filtered = messages.filter(m => m.id !== messageId);
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting message:', error);
    return false;
  }
};

// 点赞留言
export const likeMessage = (messageId: string): boolean => {
  try {
    const messages = getMessages();
    const message = messages.find(m => m.id === messageId);
    if (message) {
      message.likes += 1;
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error liking message:', error);
    return false;
  }
};

// ========== 书籍下载相关 ==========

const BOOKS_KEY = 'linguaread_books';

export interface BookDownload {
  id: string;
  title: string;
  author: string;
  description: string;
  url: string;
  coverUrl?: string;
  downloadedAt?: string;
  fileSize?: string;
  category?: string;
}

// 获取下载书籍列表
export const getDownloadBooks = (): BookDownload[] => {
  try {
    const data = localStorage.getItem(BOOKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting download books:', error);
    return [];
  }
};

// 添加下载书籍
export const addDownloadBook = (book: Omit<BookDownload, 'id' | 'downloadedAt'>): BookDownload => {
  try {
    const books = getDownloadBooks();
    const newBook: BookDownload = {
      ...book,
      id: `book_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      downloadedAt: new Date().toISOString(),
    };
    books.unshift(newBook);
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
    return newBook;
  } catch (error) {
    console.error('Error adding download book:', error);
    throw error;
  }
};

// 删除下载书籍记录
export const deleteDownloadBook = (bookId: string): boolean => {
  try {
    const books = getDownloadBooks();
    const filtered = books.filter(b => b.id !== bookId);
    localStorage.setItem(BOOKS_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting download book:', error);
    return false;
  }
};

// 获取预置书籍列表（可下载的英文书籍）
export const getAvailableBooks = (): BookDownload[] => {
  // 预置一些经典英文书籍
  return [
    {
      id: 'preset_1',
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupéry',
      description: '经典法语童话的英文译本，讲述小王子访问各个星球的寓言故事',
      url: '',
      fileSize: '2.5 MB',
      category: '童话',
    },
    {
      id: 'preset_2',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: '简·奥斯汀的经典小说，讲述伊丽莎白与达西的爱情故事',
      url: '',
      fileSize: '1.8 MB',
      category: '经典文学',
    },
    {
      id: 'preset_3',
      title: 'The Old Man and the Sea',
      author: 'Ernest Hemingway',
      description: '海明威的诺贝尔文学奖作品，讲述老渔夫与大海的故事',
      url: '',
      fileSize: '1.2 MB',
      category: '经典文学',
    },
    {
      id: 'preset_4',
      title: 'Alice\'s Adventures in Wonderland',
      author: 'Lewis Carroll',
      description: '爱丽丝梦游仙境，经典的儿童文学作品',
      url: '',
      fileSize: '3.1 MB',
      category: '童话',
    },
    {
      id: 'preset_5',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: '了不起的盖茨比，20世纪最伟大的美国小说之一',
      url: '',
      fileSize: '1.5 MB',
      category: '经典文学',
    },
  ];
};
