import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, Library, BookOpen, GraduationCap, School, Calendar, Check, X, ChevronLeft, ChevronRight, FileText, ClipboardList, Gamepad2, Lightbulb, Globe, ChevronDown, ChevronUp, Bot, Video } from 'lucide-react';
import Header from '../components/Header';
import LevelCard from '../components/LevelCard';
import ArticleCard from '../components/ArticleCard';
import BottomNav from '../components/BottomNav';
import { LEVELS, Level } from '../types';
import { articles } from '../data/articles';
import { courses } from '../data/courses';
import { exams, getExamLevels } from '../data/exams';
import { getCountryOfTheDay, Country } from '../data/countries';
import { useApp } from '../context/AppContext';
import { getReadingTime, formatReadingTime, getCourseOverallProgress, checkIn, isCheckedIn, getMonthlyCheckInCount, getYearlyCheckInCount, getCheckInDatesByMonth } from '../utils/storage';

const HomePage: React.FC = () => {
  const { selectedLevel, setSelectedLevel, favorites } = useApp();
  const [totalReadingTime, setTotalReadingTime] = useState(0);

  // 打卡相关状态
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [checkInSuccess, setCheckInSuccess] = useState(false);
  const [todayCheckedIn, setTodayCheckedIn] = useState(false);

  // 每日推荐展开状态
  const [showDailyRec, setShowDailyRec] = useState(false);

  // 今日国家
  const [countryOfTheDay, setCountryOfTheDay] = useState<Country | null>(null);

  useEffect(() => {
    // 加载累计阅读时长
    setTotalReadingTime(getReadingTime());

    // 检查今天是否已打卡
    const today = new Date().toISOString().split('T')[0];
    setTodayCheckedIn(isCheckedIn(today));

    // 加载今日国家
    setCountryOfTheDay(getCountryOfTheDay());
  }, []);

  // 获取本月打卡次数
  const monthlyCount = getMonthlyCheckInCount(selectedYear, selectedMonth);
  // 获取本年打卡次数
  const yearlyCount = getYearlyCheckInCount(selectedYear);
  // 获取本月打卡日期列表
  const checkInDates = getCheckInDatesByMonth(selectedYear, selectedMonth);

  // 处理打卡
  const handleCheckIn = () => {
    const result = checkIn();
    if (result) {
      setCheckInSuccess(true);
      setTodayCheckedIn(true);
      setTimeout(() => {
        setCheckInSuccess(false);
      }, 2000);
    }
  };

  // 获取日历中的天数
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  // 获取本月第一天是星期几
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  // 每日推荐（显示6篇）
  const recommendedArticles = articles.slice(0, 6);

  // 考试级别
  const examLevels = getExamLevels();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-4xl mx-auto">
        {/* 欢迎区域 */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            欢迎来到老刘爱英语
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">选择您的学习级别，开始双语阅读之旅</p>
        </div>

        {/* 累计阅读时长和打卡 */}
        {(totalReadingTime > 0 || true) && (
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              {/* 累计阅读时长 - 宽度减半 */}
              <div className="flex items-center space-x-2 text-indigo-600 w-1/2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">累计时长：</span>
                <span className="font-bold">{totalReadingTime > 0 ? formatReadingTime(totalReadingTime) : '0分钟'}</span>
              </div>

              {/* 打卡按钮 */}
              <div className="flex items-center space-x-2 w-1/2 justify-end">
                <button
                  onClick={() => setShowCheckIn(true)}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-colors ${
                    todayCheckedIn
                      ? 'bg-green-100 text-green-600'
                      : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {todayCheckedIn ? '已打卡' : '打卡'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 学习等级选择 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">选择学习级别</h2>
            {favorites.length > 0 && (
              <Link
                to="/vocabulary"
                className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center space-x-1"
              >
                <span>生词本 ({favorites.length})</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {LEVELS.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                isSelected={selectedLevel === level.id}
                onClick={() => setSelectedLevel(level.id as Level)}
              />
            ))}
          </div>
        </section>

        {/* 英语官方课程入口 */}
        <section className="mb-8 sm:mb-10">
          <Link
            to="/courses"
            className="block bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 sm:p-6 text-white hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Library className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">英语官方课程</h3>
                  <p className="text-white/80 text-sm">官方教材，同步学习</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </Link>

          {/* 课程预览 */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            {courses.slice(0, 4).map((course) => {
              const progress = getCourseOverallProgress(course.id, course.units.length);
              return (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="bg-white/90 rounded-xl p-3 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {course.level === 'elementary' && <School className="w-4 h-4 text-green-500" />}
                    {course.level === 'junior' && <BookOpen className="w-4 h-4 text-blue-500" />}
                    {course.level === 'senior' && <GraduationCap className="w-4 h-4 text-purple-500" />}
                    {course.level === 'university' && <Library className="w-4 h-4 text-amber-500" />}
                    <span className="text-xs font-medium text-gray-700 truncate">{course.titleZh}</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{progress}% 完成</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 考试试卷集入口 */}
        <section className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <ClipboardList className="w-5 h-5 text-red-500" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">考试试卷集</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {examLevels.map((level) => {
              const levelExams = exams.filter(e => e.level === level.id);
              const examCount = levelExams.length;
              return (
                <Link
                  key={level.id}
                  to="/quiz"
                  className={`${level.color} rounded-xl p-3 text-white hover:opacity-90 transition-opacity`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs opacity-80">{level.name}</span>
                    <FileText className="w-4 h-4 opacity-60" />
                  </div>
                  <p className="font-bold text-sm">{examCount}套试卷</p>
                  <p className="text-xs opacity-70">每套30题</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* AI助手、视频、游戏、学习方法快捷入口 */}
        <section className="mb-6 sm:mb-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* AI英语助手 */}
            <Link
              to="/ai-assistant"
              className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-4 sm:p-5 text-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">AI助手</h3>
                  <p className="text-white/70 text-xs">智能问答</p>
                </div>
              </div>
              <p className="text-xs text-white/80">英语问题智能解答</p>
            </Link>

            {/* 英文小视频 */}
            <Link
              to="/video-learning"
              className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-4 sm:p-5 text-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">视频学习</h3>
                  <p className="text-white/70 text-xs">沉浸式视频</p>
                </div>
              </div>
              <p className="text-xs text-white/80">看视频学英语</p>
            </Link>

            {/* 单词小游戏 */}
            <Link
              to="/word-game"
              className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-4 sm:p-5 text-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">单词游戏</h3>
                  <p className="text-white/70 text-xs">趣味背单词</p>
                </div>
              </div>
              <p className="text-xs text-white/80">通过游戏轻松记忆单词</p>
            </Link>

            {/* 英语学习方法 */}
            <Link
              to="/learning-methods"
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 sm:p-5 text-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">学习方法</h3>
                  <p className="text-white/70 text-xs">英语学习技巧</p>
                </div>
              </div>
              <p className="text-xs text-white/80">掌握高效学习技巧</p>
            </Link>
          </div>
        </section>

        {/* 每日推荐 - 可折叠显示 */}
        <section className="mb-6 sm:mb-8">
          {/* 可点击的标题栏 */}
          <button
            onClick={() => setShowDailyRec(!showDailyRec)}
            className="w-full flex items-center justify-between bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:border-indigo-300 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800">每日推荐</h2>
              <span className="text-xs text-gray-400">({recommendedArticles.length}篇)</span>
            </div>
            {showDailyRec ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {/* 折叠时显示的内容 */}
          {showDailyRec && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fadeIn">
              {recommendedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>

        {/* 每天一个国家 - 英文介绍 */}
        {countryOfTheDay && (
          <section className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 mb-3">
              <Globe className="w-4 h-4 text-blue-500" />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800">每天一个国家</h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* 国家信息头部 */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{countryOfTheDay.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold">{countryOfTheDay.name}</h3>
                    <p className="text-white/80 text-sm">{countryOfTheDay.nameZh}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-white/70">
                  <span>首都: {countryOfTheDay.capital}</span>
                  <span>语言: {countryOfTheDay.language}</span>
                </div>
              </div>

              {/* 英文介绍内容 */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    难度: {countryOfTheDay.difficulty}
                  </span>
                  <span className="text-xs text-gray-400">每日更新</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-serif">
                  {countryOfTheDay.introduction}
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      <BottomNav />

      {/* 打卡弹窗 */}
      {showCheckIn && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden">
            {/* 打卡成功提示 */}
            {checkInSuccess && (
              <div className="absolute inset-0 z-10 bg-white/95 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">打卡成功！</p>
                </div>
              </div>
            )}

            {/* 弹窗头部 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">学习打卡</h3>
              <button
                onClick={() => setShowCheckIn(false)}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 打卡内容 */}
            <div className="p-4">
              {/* 打卡按钮 */}
              <button
                onClick={handleCheckIn}
                disabled={todayCheckedIn}
                className={`w-full py-3 rounded-xl font-medium mb-4 transition-colors ${
                  todayCheckedIn
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {todayCheckedIn ? '今日已打卡' : '立即打卡'}
              </button>

              {/* 统计信息 */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-indigo-50 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-indigo-600">{monthlyCount}</p>
                  <p className="text-xs text-gray-500">本月打卡</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-green-600">{yearlyCount}</p>
                  <p className="text-xs text-gray-500">本年打卡</p>
                </div>
              </div>

              {/* 月份选择 */}
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={() => {
                    if (selectedMonth === 1) {
                      setSelectedMonth(12);
                      setSelectedYear(selectedYear - 1);
                    } else {
                      setSelectedMonth(selectedMonth - 1);
                    }
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="font-medium text-gray-800">
                  {selectedYear}年{selectedMonth}月
                </span>
                <button
                  onClick={() => {
                    if (selectedMonth === 12) {
                      setSelectedMonth(1);
                      setSelectedYear(selectedYear + 1);
                    } else {
                      setSelectedMonth(selectedMonth + 1);
                    }
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* 日历 */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {['日', '一', '二', '三', '四', '五', '六'].map((day, index) => (
                  <div key={index} className="text-xs text-gray-400 py-1">
                    {day}
                  </div>
                ))}
                {/* 空白填充 */}
                {Array.from({ length: getFirstDayOfMonth(selectedYear, selectedMonth) }).map((_, index) => (
                  <div key={`empty-${index}`} className="p-2" />
                ))}
                {/* 日期 */}
                {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }).map((_, index) => {
                  const day = index + 1;
                  const dateStr = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const isChecked = checkInDates.includes(dateStr);
                  const isToday = new Date().toISOString().split('T')[0] === dateStr;

                  return (
                    <div
                      key={day}
                      className={`p-2 text-sm rounded-full ${
                        isChecked
                          ? 'bg-green-500 text-white'
                          : isToday
                          ? 'bg-indigo-100 text-indigo-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
