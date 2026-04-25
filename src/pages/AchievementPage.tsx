import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, Trophy, Lock, CheckCircle2, BookOpen, PenTool, Flame, Compass, Star } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { ACHIEVEMENTS, Achievement } from '../data/achievements';
import {
  getUnlockedAchievements,
  isAchievementUnlocked,
  getTotalCheckInCount,
  getReadArticlesCount,
  getReadingTime,
  getStreakData,
  getReadLevelsSet,
  getCompletedCourses,
  getVisitedPaths,
  getQuizHistoryCount,
  getFavoriteCount,
} from '../utils/storage';

type Category = 'all' | 'reading' | 'quiz' | 'streak' | 'explore' | 'special';

const AchievementPage: React.FC = () => {
  const [nightMode, setNightMode] = useState(false);
  const [category, setCategory] = useState<Category>('all');
  const [unlockedSet, setUnlockedSet] = useState<Set<string>>(new Set());

  // 夜间模式
  useEffect(() => {
    const saved = localStorage.getItem('linguaread_night_mode');
    if (saved) setNightMode(JSON.parse(saved));
    const handler = () => {
      const saved2 = localStorage.getItem('linguaread_night_mode');
      if (saved2) setNightMode(JSON.parse(saved2));
    };
    window.addEventListener('nightModeChange', handler);
    return () => window.removeEventListener('nightModeChange', handler);
  }, []);

  // 加载已解锁成就
  useEffect(() => {
    const unlocked = getUnlockedAchievements();
    setUnlockedSet(new Set(unlocked.map(u => u.achievementId)));
  }, []);

  // 计算成就进度
  const progressData = useMemo(() => {
    const readCount = getReadArticlesCount();
    const quizCount = getQuizHistoryCount();
    const readingTime = getReadingTime();
    const streakData = getStreakData();
    const levelsSet = getReadLevelsSet();
    const completedCourses = getCompletedCourses();
    const visitedPaths = getVisitedPaths();
    const favoriteCount = getFavoriteCount();

    return {
      readCount,
      quizCount,
      readingTime,
      currentStreak: streakData.currentStreak,
      levelsCount: levelsSet.size,
      coursesCount: completedCourses.length,
      visitedCount: visitedPaths.length,
      favoriteCount,
    };
  }, []);

  // 根据成就类型检测是否解锁
  const checkUnlock = (achievement: Achievement): boolean => {
    const id = achievement.id;

    // 阅读类
    if (id === 'read_1') return progressData.readCount >= 1;
    if (id === 'read_10') return progressData.readCount >= 10;
    if (id === 'read_50') return progressData.readCount >= 50;
    if (id === 'read_100') return progressData.readCount >= 100;
    if (id === 'read_500') return progressData.readCount >= 500;

    // 测试类
    if (id === 'quiz_1') return progressData.quizCount >= 1;
    if (id === 'quiz_10') return progressData.quizCount >= 10;
    if (id === 'quiz_50') return progressData.quizCount >= 50;
    if (id === 'quiz_100') return progressData.quizCount >= 100;

    // 打卡类
    if (id === 'streak_3') return progressData.currentStreak >= 3;
    if (id === 'streak_7') return progressData.currentStreak >= 7;
    if (id === 'streak_30') return progressData.currentStreak >= 30;
    if (id === 'streak_100') return progressData.currentStreak >= 100;

    // 探索类
    if (id === 'explore_all_levels') return progressData.levelsCount >= 4;
    if (id === 'explore_courses') return progressData.coursesCount >= 5;
    if (id === 'explore_all_features') return progressData.visitedCount >= 8;

    // 特殊类
    if (id === 'favorite_10') return progressData.favoriteCount >= 10;
    if (id === 'reading_time_1h') return progressData.readingTime >= 3600;
    if (id === 'reading_time_10h') return progressData.readingTime >= 36000;
    if (id === 'perfect_score') {
      // 检查是否有满分记录
      const histories = JSON.parse(localStorage.getItem('linguaread_quiz_history') || '[]');
      return histories.some((h: any) => h.correctAnswers === h.totalQuestions && h.totalQuestions > 0);
    }

    return false;
  };

  // 获取成就进度百分比
  const getProgress = (achievement: Achievement): { current: number; target: number; percent: number } => {
    const id = achievement.id;
    let current = 0;
    const target = achievement.requirement;

    if (id.startsWith('read_')) {
      current = progressData.readCount;
    } else if (id.startsWith('quiz_')) {
      current = progressData.quizCount;
    } else if (id.startsWith('streak_')) {
      current = progressData.currentStreak;
    } else if (id === 'explore_all_levels') {
      current = progressData.levelsCount;
    } else if (id === 'explore_courses') {
      current = progressData.coursesCount;
    } else if (id === 'explore_all_features') {
      current = progressData.visitedCount;
    } else if (id === 'favorite_10') {
      current = progressData.favoriteCount;
    } else if (id === 'reading_time_1h' || id === 'reading_time_10h') {
      current = progressData.readingTime;
      return {
        current,
        target,
        percent: Math.min(100, Math.round((current / target) * 100)),
      };
    } else if (id === 'perfect_score') {
      current = checkUnlock(achievement) ? 1 : 0;
    }

    return {
      current,
      target,
      percent: Math.min(100, Math.round((current / target) * 100)),
    };
  };

  // 过滤成就列表
  const filteredAchievements = useMemo(() => {
    if (category === 'all') return ACHIEVEMENTS;
    return ACHIEVEMENTS.filter(a => a.category === category);
  }, [category]);

  // 分类统计
  const categoryStats = useMemo(() => ({
    all: ACHIEVEMENTS.length,
    reading: ACHIEVEMENTS.filter(a => a.category === 'reading').length,
    quiz: ACHIEVEMENTS.filter(a => a.category === 'quiz').length,
    streak: ACHIEVEMENTS.filter(a => a.category === 'streak').length,
    explore: ACHIEVEMENTS.filter(a => a.category === 'explore').length,
    special: ACHIEVEMENTS.filter(a => a.category === 'special').length,
  }), []);

  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: '全部', icon: <Trophy className="w-4 h-4" /> },
    { id: 'reading', label: '阅读', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'quiz', label: '测试', icon: <PenTool className="w-4 h-4" /> },
    { id: 'streak', label: '打卡', icon: <Flame className="w-4 h-4" /> },
    { id: 'explore', label: '探索', icon: <Compass className="w-4 h-4" /> },
    { id: 'special', label: '特殊', icon: <Star className="w-4 h-4" /> },
  ];

  const totalUnlocked = ACHIEVEMENTS.filter(a => checkUnlock(a)).length;

  return (
    <div className={`min-h-screen ${nightMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header showBack title="成就徽章" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 总体进度 */}
        <section className={`rounded-2xl p-5 shadow-sm border mb-5 ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h2 className={`font-semibold ${nightMode ? 'text-white' : 'text-gray-800'}`}>成就进度</h2>
            </div>
            <span className={`text-sm font-medium ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {totalUnlocked} / {ACHIEVEMENTS.length}
            </span>
          </div>

          {/* 进度条 */}
          <div className={`h-3 rounded-full ${nightMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
              style={{ width: `${(totalUnlocked / ACHIEVEMENTS.length) * 100}%` }}
            />
          </div>

          <p className={`text-sm mt-2 ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
            已解锁 {totalUnlocked} 个成就，继续加油！🎉
          </p>
        </section>

        {/* 分类标签 */}
        <section className="flex gap-2 mb-5 overflow-x-auto pb-2 -mx-3 px-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full whitespace-nowrap transition-colors ${
                category === cat.id
                  ? 'bg-indigo-500 text-white'
                  : nightMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat.icon}
              <span className="text-sm font-medium">{cat.label}</span>
              <span className={`text-xs ${category === cat.id ? 'opacity-75' : ''}`}>
                {cat.id === 'all' ? categoryStats[cat.id] : `${ACHIEVEMENTS.filter(a => a.category === cat.id && checkUnlock(a)).length}/${categoryStats[cat.id]}`}
              </span>
            </button>
          ))}
        </section>

        {/* 成就列表 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredAchievements.map(achievement => {
            const unlocked = checkUnlock(achievement);
            const progress = getProgress(achievement);

            return (
              <div
                key={achievement.id}
                className={`rounded-2xl p-4 border transition-all ${
                  unlocked
                    ? nightMode
                      ? 'bg-gray-800 border-amber-500/30'
                      : 'bg-white border-amber-200'
                    : nightMode
                    ? 'bg-gray-800/50 border-gray-700 opacity-70'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* 图标 */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    unlocked
                      ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg'
                      : nightMode
                      ? 'bg-gray-700'
                      : 'bg-gray-100'
                  }`}>
                    {unlocked ? achievement.icon : <Lock className="w-5 h-5 text-gray-400" />}
                  </div>

                  {/* 内容 */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-sm mb-1 ${nightMode ? 'text-white' : 'text-gray-800'}`}>
                      {achievement.titleZh}
                    </h3>
                    <p className={`text-xs mb-2 ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {achievement.descriptionZh}
                    </p>

                    {/* 进度条 */}
                    {achievement.id !== 'perfect_score' && !achievement.id.includes('time') ? (
                      <div className={`h-1.5 rounded-full ${nightMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            unlocked
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                              : 'bg-indigo-400'
                          }`}
                          style={{ width: `${progress.percent}%` }}
                        />
                      </div>
                    ) : achievement.id.includes('time') ? (
                      <div className="flex items-center gap-1">
                        <div className={`h-1.5 rounded-full flex-1 ${nightMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              unlocked
                                ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                                : 'bg-indigo-400'
                            }`}
                            style={{ width: `${progress.percent}%` }}
                          />
                        </div>
                        <span className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {progress.current >= 3600 ? `${Math.floor(progress.current / 3600)}h` : `${Math.floor(progress.current / 60)}m`} / {progress.target >= 3600 ? `${progress.target / 3600}h` : `${progress.target / 60}m`}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${unlocked ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {unlocked ? '已完成' : '未完成'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 已解锁标识 */}
                {unlocked && (
                  <div className="mt-3 flex items-center gap-1 text-xs text-amber-500">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
                    <span>已解锁</span>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default AchievementPage;