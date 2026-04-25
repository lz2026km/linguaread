// 成就定义数据

export interface Achievement {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  icon: string;
  category: 'reading' | 'quiz' | 'streak' | 'explore' | 'special';
  requirement: number; // 解锁条件数值
  reward?: string; // 奖励描述
}

export const ACHIEVEMENTS: Achievement[] = [
  // 阅读相关成就
  {
    id: 'read_1',
    title: 'First Steps',
    titleZh: '初出茅庐',
    description: 'Read your first article',
    descriptionZh: '阅读第一篇文章',
    icon: '📖',
    category: 'reading',
    requirement: 1,
  },
  {
    id: 'read_10',
    title: 'Bookworm',
    titleZh: '小书虫',
    description: 'Read 10 articles',
    descriptionZh: '阅读10篇文章',
    icon: '📚',
    category: 'reading',
    requirement: 10,
  },
  {
    id: 'read_50',
    title: 'Avid Reader',
    titleZh: '阅读达人',
    description: 'Read 50 articles',
    descriptionZh: '阅读50篇文章',
    icon: '📰',
    category: 'reading',
    requirement: 50,
  },
  {
    id: 'read_100',
    title: 'Bibliophile',
    titleZh: '博学之士',
    description: 'Read 100 articles',
    descriptionZh: '阅读100篇文章',
    icon: '🏆',
    category: 'reading',
    requirement: 100,
  },
  {
    id: 'read_500',
    title: 'Master Scholar',
    titleZh: '学富五车',
    description: 'Read 500 articles',
    descriptionZh: '阅读500篇文章',
    icon: '🎓',
    category: 'reading',
    requirement: 500,
  },

  // 测试相关成就
  {
    id: 'quiz_1',
    title: 'Quiz Starter',
    titleZh: '初试锋芒',
    description: 'Complete 1 quiz',
    descriptionZh: '完成1次测试',
    icon: '✏️',
    category: 'quiz',
    requirement: 1,
  },
  {
    id: 'quiz_10',
    title: 'Quiz Apprentice',
    titleZh: '小试牛刀',
    description: 'Complete 10 quizzes',
    descriptionZh: '完成10次测试',
    icon: '📝',
    category: 'quiz',
    requirement: 10,
  },
  {
    id: 'quiz_50',
    title: 'Quiz Expert',
    titleZh: '学以致用',
    description: 'Complete 50 quizzes',
    descriptionZh: '完成50次测试',
    icon: '🧠',
    category: 'quiz',
    requirement: 50,
  },
  {
    id: 'quiz_100',
    title: 'Quiz Master',
    titleZh: '满腹经纶',
    description: 'Complete 100 quizzes',
    descriptionZh: '完成100次测试',
    icon: '🏅',
    category: 'quiz',
    requirement: 100,
  },

  // 连续打卡相关成就
  {
    id: 'streak_3',
    title: 'Three Day Streak',
    titleZh: '坚持不懈',
    description: 'Check in for 3 consecutive days',
    descriptionZh: '连续打卡3天',
    icon: '🔥',
    category: 'streak',
    requirement: 3,
  },
  {
    id: 'streak_7',
    title: 'Week Warrior',
    titleZh: '一周之星',
    description: 'Check in for 7 consecutive days',
    descriptionZh: '连续打卡7天',
    icon: '⭐',
    category: 'streak',
    requirement: 7,
  },
  {
    id: 'streak_30',
    title: 'Monthly Champion',
    titleZh: '月度冠军',
    description: 'Check in for 30 consecutive days',
    descriptionZh: '连续打卡30天',
    icon: '🌟',
    category: 'streak',
    requirement: 30,
  },
  {
    id: 'streak_100',
    title: 'Century Keeper',
    titleZh: '百日修行',
    description: 'Check in for 100 consecutive days',
    descriptionZh: '连续打卡100天',
    icon: '💎',
    category: 'streak',
    requirement: 100,
  },

  // 探索相关成就
  {
    id: 'explore_all_levels',
    title: 'Level Explorer',
    titleZh: '层级探索者',
    description: 'Read articles from all 4 levels',
    descriptionZh: '阅读所有4个级别的文章',
    icon: '🗺️',
    category: 'explore',
    requirement: 4,
  },
  {
    id: 'explore_courses',
    title: 'Course Collector',
    titleZh: '课程收藏家',
    description: 'Start learning 5 different courses',
    descriptionZh: '开始学习5门不同的课程',
    icon: '📚',
    category: 'explore',
    requirement: 5,
  },
  {
    id: 'explore_all_features',
    title: 'Feature Hunter',
    titleZh: '功能猎手',
    description: 'Visit all main sections',
    descriptionZh: '访问所有主要板块',
    icon: '🔍',
    category: 'explore',
    requirement: 8,
  },

  // 特殊成就
  {
    id: 'favorite_10',
    title: 'Word Collector',
    titleZh: '单词收藏家',
    description: 'Save 10 words to favorites',
    descriptionZh: '收藏10个单词',
    icon: '💕',
    category: 'special',
    requirement: 10,
  },
  {
    id: 'reading_time_1h',
    title: 'Time Invested',
    titleZh: '时间投资者',
    description: 'Accumulate 1 hour of reading time',
    descriptionZh: '累计阅读1小时',
    icon: '⏰',
    category: 'special',
    requirement: 3600, // 1 hour in seconds
  },
  {
    id: 'reading_time_10h',
    title: 'Dedicated Reader',
    titleZh: '专注读者',
    description: 'Accumulate 10 hours of reading time',
    descriptionZh: '累计阅读10小时',
    icon: '📊',
    category: 'special',
    requirement: 36000, // 10 hours in seconds
  },
  {
    id: 'perfect_score',
    title: 'Perfectionist',
    titleZh: '完美主义者',
    description: 'Get a perfect score on a quiz',
    descriptionZh: '测试获得满分',
    icon: '💯',
    category: 'special',
    requirement: 1,
  },
];

// 获取成就分类
export const getAchievementsByCategory = (category: Achievement['category']): Achievement[] => {
  return ACHIEVEMENTS.filter(a => a.category === category);
};

// 根据ID获取成就
export const getAchievementById = (id: string): Achievement | undefined => {
  return ACHIEVEMENTS.find(a => a.id === id);
};