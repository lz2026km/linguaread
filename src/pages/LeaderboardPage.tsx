import React, { useState } from 'react';
import { Trophy, Clock, AlertCircle, Medal, ChevronRight, Crown, Star } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useApp } from '../context/AppContext';
import { getQuizHistory, getReadingTime, formatReadingTime, getTotalCheckInCount } from '../utils/storage';

type TabType = 'total' | 'reading' | 'wrong';

interface LeaderboardItem {
  rank: number;
  name: string;
  avatar?: string;
  value: number;
  label?: string;
}

// Mock排名数据
const mockTotalLeaderboard: LeaderboardItem[] = [
  { rank: 1, name: '🌟 学霸小王', value: 9850, label: '连续30天' },
  { rank: 2, name: '📚 英语达人', value: 8920, label: '连续25天' },
  { rank: 3, name: '🎯 进步先锋', value: 7650, label: '连续20天' },
  { rank: 4, name: '⭐ 坚持之星', value: 6200, label: '连续15天' },
  { rank: 5, name: '🚀 学习标兵', value: 5800, label: '连续12天' },
  { rank: 6, name: '💪 努力少年', value: 4500, label: '连续10天' },
  { rank: 7, name: '🌈 乐观派', value: 3200, label: '连续7天' },
  { rank: 8, name: '🎨 文艺青年', value: 2800, label: '连续5天' },
  { rank: 9, name: '🌙 夜猫子', value: 2100, label: '连续3天' },
  { rank: 10, name: '☀️ 早起鸟', value: 1500, label: '连续2天' },
];

const mockReadingLeaderboard: LeaderboardItem[] = [
  { rank: 1, name: '📖 书虫一号', value: 1250, label: '小时' },
  { rank: 2, name: '📚 阅读王者', value: 980, label: '小时' },
  { rank: 3, name: '🌍 环球读者', value: 850, label: '小时' },
  { rank: 4, name: '✏️ 笔记达人', value: 720, label: '小时' },
  { rank: 5, name: '📝 学者', value: 650, label: '小时' },
  { rank: 6, name: '🎓 求知者', value: 520, label: '小时' },
  { rank: 7, name: '💡 求知者', value: 430, label: '小时' },
  { rank: 8, name: '🌟 好奇者', value: 350, label: '小时' },
  { rank: 9, name: '🧠 思考者', value: 280, label: '小时' },
  { rank: 10, name: '📕 入门者', value: 150, label: '小时' },
];

const mockWrongWordsLeaderboard: LeaderboardItem[] = [
  { rank: 1, name: '🎯 错题克星', value: 486, label: '已消灭' },
  { rank: 2, name: '✅ 正确率高', value: 398, label: '已消灭' },
  { rank: 3, name: '📝 笔记专家', value: 325, label: '已消灭' },
  { rank: 4, name: '🔍 细心的', value: 287, label: '已消灭' },
  { rank: 5, name: '🧮 数学天才', value: 256, label: '已消灭' },
  { rank: 6, name: '📐 逻辑强', value: 218, label: '已消灭' },
  { rank: 7, name: '💯 完美主义', value: 185, label: '已消灭' },
  { rank: 8, name: '🔢 数字控', value: 156, label: '已消灭' },
  { rank: 9, name: '📊 统计控', value: 124, label: '已消灭' },
  { rank: 10, name: '🎰 幸运儿', value: 89, label: '已消灭' },
];

const LeaderboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('total');
  const { quizHistory } = useApp();
  const totalReadingTime = getReadingTime();
  const totalCheckIns = getTotalCheckInCount();

  // 获取用户自己的数据
  const getUserStats = () => {
    const totalScore = quizHistory.reduce((acc, h) => acc + h.correctAnswers, 0) * 10 + totalReadingTime / 60 * 5 + totalCheckIns * 20;
    return {
      totalScore: Math.round(totalScore),
      readingHours: Math.round(totalReadingTime / 3600),
      wrongWordsMastered: quizHistory.reduce((acc, h) => acc + h.wrongWords.length, 0),
    };
  };

  const userStats = getUserStats();

  const tabs = [
    { key: 'total' as TabType, label: '总榜', icon: Trophy },
    { key: 'reading' as TabType, label: '阅读时长', icon: Clock },
    { key: 'wrong' as TabType, label: '错题消灭', icon: AlertCircle },
  ];

  const getLeaderboardData = (tab: TabType): LeaderboardItem[] => {
    switch (tab) {
      case 'total':
        return mockTotalLeaderboard;
      case 'reading':
        return mockReadingLeaderboard;
      case 'wrong':
        return mockWrongWordsLeaderboard;
      default:
        return mockTotalLeaderboard;
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-amber-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="w-5 h-5 flex items-center justify-center text-sm text-gray-500">{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header showBack title="排行榜" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-6 h-6 text-amber-500" />
            <h1 className="text-2xl font-bold text-gray-800">学习排行榜</h1>
          </div>
          <p className="text-gray-500 text-sm">本周学习情况总览</p>
        </div>

        {/* 用户自己排名卡片 */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 mb-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">我的排名</p>
              <p className="text-3xl font-bold">#{Math.floor(Math.random() * 20) + 11}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-white/80 text-xs">总分</p>
                <p className="font-bold">{userStats.totalScore}</p>
              </div>
              <div className="text-center">
                <p className="text-white/80 text-xs">阅读时长</p>
                <p className="font-bold">{userStats.readingHours}h</p>
              </div>
              <div className="text-center">
                <p className="text-white/80 text-xs">已消灭</p>
                <p className="font-bold">{userStats.wrongWordsMastered}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab切换 */}
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-100 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : ''}`} />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 排行榜列表 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {getLeaderboardData(activeTab).map((item, index) => (
            <div
              key={item.rank}
              className={`flex items-center px-4 py-3 hover:bg-gray-50 transition-colors ${
                index < getLeaderboardData(activeTab).length - 1
                  ? 'border-b border-gray-50'
                  : ''
              }`}
            >
              {/* 排名 */}
              <div className="w-10 flex items-center justify-center">
                {getRankIcon(item.rank)}
              </div>

              {/* 头像/名字 */}
              <div className="flex-1 ml-2">
                <p className="font-medium text-gray-800">{item.name}</p>
                {item.label && (
                  <p className="text-xs text-gray-400">{item.label}</p>
                )}
              </div>

              {/* 数值 */}
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-semibold">
                  {item.value.toLocaleString()}
                </span>
                {activeTab === 'reading' && item.label && (
                  <span className="text-xs text-gray-400">{item.label}</span>
                )}
                {activeTab === 'wrong' && (
                  <span className="text-xs text-green-500">✅</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>排行榜每周一更新</p>
          <p className="mt-1">学习时长、正确率、打卡天数综合计算</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default LeaderboardPage;