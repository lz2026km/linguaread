import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, Calendar, Flame, Clock, TrendingUp, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import {
  getTotalCheckInCount,
  getCheckInRecords,
  getCheckInDatesByMonth,
  getReadingTime,
  formatReadingTime,
  getReadArticlesCount,
  checkIn,
  isCheckedIn,
  updateStreakOnCheckIn,
  getStreakData,
  getUnlockedAchievements,
  getUnlockedCount,
} from '../utils/storage';
import { ACHIEVEMENTS, getAchievementById } from '../data/achievements';

const StatsPage: React.FC = () => {
  const [nightMode, setNightMode] = useState(false);
  const [checkInSuccess, setCheckInSuccess] = useState(false);
  const [todayChecked, setTodayChecked] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [totalReadingTime, setTotalReadingTime] = useState(0);
  const [totalReadArticles, setTotalReadArticles] = useState(0);
  const [totalCheckIns, setTotalCheckIns] = useState(0);
  const [streakData, setStreakData] = useState({ currentStreak: 0, lastCheckInDate: '', longestStreak: 0 });
  const [unlockedCount, setUnlockedCount] = useState(0);

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

  // 加载数据
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setTodayChecked(isCheckedIn(today));
    setTotalReadingTime(getReadingTime());
    setTotalReadArticles(getReadArticlesCount());
    setTotalCheckIns(getTotalCheckInCount());
    setStreakData(getStreakData());
    setUnlockedCount(getUnlockedCount());
  }, []);

  // 打卡操作
  const handleCheckIn = () => {
    const today = new Date().toISOString().split('T')[0];
    if (isCheckedIn(today)) return;

    const result = checkIn();
    if (result) {
      const newStreak = updateStreakOnCheckIn();
      setTodayChecked(true);
      setTotalCheckIns(prev => prev + 1);
      setStreakData(newStreak);
      setCheckInSuccess(true);
      setTimeout(() => setCheckInSuccess(false), 2000);
    }
  };

  // 生成当月日历热力图数据
  const calendarData = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + 1;
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const startWeekDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const checkedDates = getCheckInDatesByMonth(year, month);

    const cells: { day: number; checked: boolean }[] = [];
    // 填充空白
    for (let i = 0; i < startWeekDay; i++) {
      cells.push({ day: 0, checked: false });
    }
    // 填入日期
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      cells.push({ day: d, checked: checkedDates.includes(dateStr) });
    }
    return cells;
  }, [currentMonth]);

  // 切换月份
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const monthName = currentMonth.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' });

  // 周一~周日
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  // 获取最新解锁的成就
  const recentAchievements = useMemo(() => {
    const unlocked = getUnlockedAchievements();
    return unlocked.slice(-3).map(u => getAchievementById(u.achievementId)).filter(Boolean);
  }, [unlockedCount]);

  return (
    <div className={`min-h-screen ${nightMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header showBack title="学习统计" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto space-y-4">
        {/* 打卡卡片 */}
        <section className={`rounded-2xl p-5 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <h2 className={`font-semibold ${nightMode ? 'text-white' : 'text-gray-800'}`}>今日打卡</h2>
            </div>
            {streakData.currentStreak > 0 && (
              <div className="flex items-center gap-1 text-orange-500">
                <Flame className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">连续 {streakData.currentStreak} 天</span>
              </div>
            )}
          </div>

          <button
            onClick={handleCheckIn}
            disabled={todayChecked}
            className={`w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              todayChecked
                ? nightMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-400'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 active:scale-95'
            }`}
          >
            {todayChecked ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                已打卡
              </>
            ) : checkInSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                打卡成功！
              </>
            ) : (
              <>
                <Target className="w-5 h-5" />
                点击打卡
              </>
            )}
          </button>

          <p className={`text-center text-sm mt-3 ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
            累计打卡 <span className="font-semibold text-indigo-500">{totalCheckIns}</span> 天
          </p>
        </section>

        {/* 统计概览 */}
        <section className="grid grid-cols-2 gap-3">
          <div className={`rounded-2xl p-4 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span className={`text-sm ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>今日学习时长</span>
            </div>
            <p className={`text-2xl font-bold ${nightMode ? 'text-white' : 'text-gray-800'}`}>
              {formatReadingTime(totalReadingTime)}
            </p>
          </div>

          <div className={`rounded-2xl p-4 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-green-500" />
              <span className={`text-sm ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>累计阅读</span>
            </div>
            <p className={`text-2xl font-bold ${nightMode ? 'text-white' : 'text-gray-800'}`}>
              {totalReadArticles} 篇
            </p>
          </div>

          <div className={`rounded-2xl p-4 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span className={`text-sm ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>最长连续</span>
            </div>
            <p className={`text-2xl font-bold ${nightMode ? 'text-white' : 'text-gray-800'}`}>
              {streakData.longestStreak} 天
            </p>
          </div>

          <div className={`rounded-2xl p-4 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🏅</span>
              <span className={`text-sm ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>已解锁成就</span>
            </div>
            <p className={`text-2xl font-bold ${nightMode ? 'text-white' : 'text-gray-800'}`}>
              {unlockedCount}/{ACHIEVEMENTS.length}
            </p>
          </div>
        </section>

        {/* 本周热力图 */}
        <section className={`rounded-2xl p-5 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <h2 className={`font-semibold ${nightMode ? 'text-white' : 'text-gray-800'}`}>本月打卡日历</h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={prevMonth} className={`p-1.5 rounded-lg ${nightMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <span className={nightMode ? 'text-white' : 'text-gray-600'}>◀</span>
              </button>
              <span className={`text-sm font-medium min-w-[80px] text-center ${nightMode ? 'text-white' : 'text-gray-800'}`}>
                {monthName}
              </span>
              <button onClick={nextMonth} className={`p-1.5 rounded-lg ${nightMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <span className={nightMode ? 'text-white' : 'text-gray-600'}>▶</span>
              </button>
            </div>
          </div>

          {/* 星期标题 */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map(day => (
              <div key={day} className={`text-center text-xs py-1 font-medium ${nightMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {day}
              </div>
            ))}
          </div>

          {/* 日历格子 */}
          <div className="grid grid-cols-7 gap-1">
            {calendarData.map((cell, idx) => (
              <div
                key={idx}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                  cell.day === 0
                    ? ''
                    : cell.checked
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white'
                    : nightMode
                    ? 'bg-gray-700 text-gray-400'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {cell.day > 0 ? cell.day : ''}
              </div>
            ))}
          </div>

          {/* 图例 */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-green-400 to-emerald-500" />
              <span className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>已打卡</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-4 h-4 rounded ${nightMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
              <span className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>未打卡</span>
            </div>
          </div>
        </section>

        {/* 最近解锁成就 */}
        {recentAchievements.length > 0 && (
          <section className={`rounded-2xl p-5 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h2 className={`font-semibold mb-3 ${nightMode ? 'text-white' : 'text-gray-800'}`}>
              🏆 最近解锁
            </h2>
            <div className="space-y-2">
              {recentAchievements.map(achievement => achievement && (
                <div key={achievement.id} className={`flex items-center gap-3 p-3 rounded-xl ${nightMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className={`font-medium ${nightMode ? 'text-white' : 'text-gray-800'}`}>{achievement.titleZh}</p>
                    <p className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>{achievement.descriptionZh}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default StatsPage;