// 文章数据模型
export interface Article {
  id: string;
  title: string;
  titleZh: string;
  contentEn: string;
  contentZh: string;
  level: 'elementary' | 'junior' | 'senior' | 'university';
  category: 'literature' | 'news' | 'science' | 'essay';
  author: string;
  wordCount: number;
  difficulty: number;
  createdAt: string;
}

// 词典API返回的数据模型
export interface WordDefinition {
  word: string;
  phonetic?: string;
  phonetics: Array<{
    text?: string;
    audio?: string;
  }>;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
    }>;
  }>;
}

// 收藏的单词模型
export interface FavoriteWord {
  id: string;
  word: string;
  phonetic?: string;
  definition: string;
  partOfSpeech: string;
  exampleSentence: string;
  articleTitle: string;
  createdAt: string;
}

// 收藏的文章模型
export interface FavoriteArticle {
  id: string;
  articleId: string;
  title: string;
  titleZh: string;
  level: string;
  author: string;
  createdAt: string;
}

// 书签模型
export interface Bookmark {
  id: string;
  articleId: string;
  articleTitle: string;
  articleTitleZh: string;
  position: number;
  createdAt: string;
}

// 语法学习内容模型
export interface GrammarItem {
  id: string;
  title: string;
  titleZh: string;
  level: 'elementary' | 'junior' | 'senior' | 'university';
  category: string;
  content: string;
  examples: string[];
  createdAt: string;
}

// 单词测试题目模型
export interface QuizQuestion {
  id: string;
  word: string;
  phonetic: string;
  correctAnswer: string;
  options: string[];
  level: 'elementary' | 'junior' | 'senior';
}

// 测试历史记录模型
export interface QuizHistory {
  id: string;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongWords: string[];
}

// 学习等级
export type Level = 'elementary' | 'junior' | 'senior' | 'university';

// 语法等级
export type GrammarLevel = 'elementary' | 'junior' | 'senior' | 'university';

// 等级信息
export interface LevelInfo {
  id: Level;
  name: string;
  nameZh: string;
  description: string;
  icon: string;
  color: string;
}

export const LEVELS: LevelInfo[] = [
  {
    id: 'elementary',
    name: 'Elementary',
    nameZh: '小学',
    description: '简单词汇，基础句子',
    icon: '🌱',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'junior',
    name: 'Junior High',
    nameZh: '初中',
    description: '日常对话，简单文章',
    icon: '📚',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'senior',
    name: 'Senior High',
    nameZh: '高中',
    description: '议论文、说明文',
    icon: '📖',
    color: 'from-purple-400 to-violet-500',
  },
  {
    id: 'university',
    name: 'University',
    nameZh: '大学',
    description: '学术文章、经典文学',
    icon: '🎓',
    color: 'from-amber-400 to-orange-500',
  },
];

// 分类信息
export const CATEGORIES = [
  { id: 'all', name: '全部', nameEn: 'All' },
  { id: 'literature', name: '文学', nameEn: 'Literature' },
  { id: 'news', name: '新闻', nameEn: 'News' },
  { id: 'science', name: '科普', nameEn: 'Science' },
  { id: 'essay', name: '散文', nameEn: 'Essay' },
];

// 语法分类信息
export const GRAMMAR_CATEGORIES = [
  { id: 'all', name: '全部', nameEn: 'All' },
  { id: 'tense', name: '时态', nameEn: 'Tense' },
  { id: 'sentence', name: '句型', nameEn: 'Sentence' },
  { id: 'voice', name: '语态', nameEn: 'Voice' },
  { id: 'partOfSpeech', name: '词性', nameEn: 'Parts of Speech' },
  { id: 'clause', name: '从句', nameEn: 'Clause' },
];

// 语音设置
export interface VoiceSettings {
  voiceGender: 'male' | 'female';
  voiceURI: string;
  speechRate: number;
  autoPlayInQuiz: boolean;
}

// 可用的语音选项
export interface VoiceOption {
  name: string;
  voiceURI: string;
  gender: 'male' | 'female';
  lang: string;
}

// ========== 官方课程相关类型 ==========

// 课程单元（每个单元包含一篇课文）
export interface CourseUnit {
  id: string;
  title: string;
  titleZh: string;
  contentEn: string;
  contentZh: string;
  wordCount: number;
  audioUrl?: string;
}

// 课程（每本书是一个课程）
export interface Course {
  id: string;
  title: string;
  titleZh: string;
  level: Level;
  grade: string;
  publisher: string;
  coverColor: string;
  units: CourseUnit[];
  description: string;
}

// 课程学习进度
export interface CourseProgress {
  courseId: string;
  unitId: string;
  progress: number; // 0-100
  lastReadAt: string;
  completed: boolean;
}

// 课程书签
export interface CourseBookmark {
  id: string;
  courseId: string;
  unitId: string;
  unitTitle: string;
  unitTitleZh: string;
  position: number;
  createdAt: string;
}

// 课程学习记录
export interface CourseStudyRecord {
  courseId: string;
  lastUnitId: string;
  lastReadAt: string;
}

// ========== 错题本相关类型 ==========

// 错题类型
export type WrongType = 'spelling' | 'meaning' | 'pronunciation' | 'grammar';

// 错题记录
export interface WrongWord {
  id: string;
  word: string;
  wrongType: WrongType;
  wrongAnswer: string;
  correctAnswer: string;
  createdAt: string;
  mastered: boolean;
  masteredAt?: string;
  reviewCount: number;
  lastReviewedAt?: string;
}

// ========== 艾宾浩斯复习相关类型 ==========

// 复习记录
export interface ReviewRecord {
  id: string;
  word: string;
  phonetic?: string;
  definition: string;
  partOfSpeech: string;
  exampleSentence: string;
  articleTitle: string;
  nextReviewDate: string;
  interval: number; // 复习间隔天数
  easeFactor: number; // 难易度因子
  reviewStage: number; // 当前复习阶段 (1-5对应1,2,4,7,15天)
  createdAt: string;
  lastReviewedAt?: string;
}

// 艾宾浩斯复习间隔表 (天数)
export const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15];

// 错题类型标签
export const WRONG_TYPE_LABELS: Record<WrongType, { name: string; nameZh: string; icon: string }> = {
  spelling: { name: 'Spelling', nameZh: '拼写错误', icon: '✏️' },
  meaning: { name: 'Meaning', nameZh: '词义错误', icon: '📖' },
  pronunciation: { name: 'Pronunciation', nameZh: '发音错误', icon: '🔊' },
  grammar: { name: 'Grammar', nameZh: '语法错误', icon: '📝' },
};
