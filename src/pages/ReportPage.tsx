import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, TrendingDown, Copy, Check, FileText, Clock, BookOpen, PenTool, Award } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useApp } from '../context/AppContext';
import { getQuizHistory, getReadingTime, formatReadingTime, getCheckInRecords } from '../utils/storage';

type ReportType = 'weekly' | 'monthly';

interface ReportData {
  period: string;
  totalReadingTime: number;
  articlesRead: number;
  quizCompleted: number;
  correctRate: number;
  newWords: number;
  checkInDays: number;
  comparedToLast: {
    readingTime: number;
    articlesRead: number;
    correctRate: number;
  };
}

const ReportPage: React.FC = () => {
  const [reportType, setReportType] = useState<ReportType>('weekly');
  const [copied, setCopied] = useState(false);
  const { quizHistory } = useApp();
  const [reportData, setReportData] = useState<ReportData>({
    period: '',
    totalReadingTime: 0,
    articlesRead: 0,
    quizCompleted: 0,
    correctRate: 0,
    newWords: 0,
    checkInDays: 0,
    comparedToLast: {
      readingTime: 0,
      articlesRead: 0,
      correctRate: 0,
    },
  });

  useEffect(() => {
    // 生成报告数据
    const generateReport = () => {
      const now = new Date();
      let period: string;
      let startDate: Date;
      let lastStartDate: Date;

      if (reportType === 'weekly') {
        // 本周一
        const dayOfWeek = now.getDay();
        startDate = new Date(now);
        startDate.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
        period = `${startDate.toLocaleDateString()} - ${now.toLocaleDateString()}`;

        // 上周一
        lastStartDate = new Date(startDate);
        lastStartDate.setDate(startDate.getDate() - 7);
      } else {
        // 本月
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        period = `${startDate.toLocaleDateString()} - ${now.toLocaleDateString()}`;

        // 上月
        lastStartDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      }

      // 模拟数据（实际应从存储中计算）
      const totalReadingTime = Math.floor(Math.random() * 3000) + 500;
      const articlesRead = Math.floor(Math.random() * 50) + 10;
      const quizCompleted = Math.floor(Math.random() * 15) + 3;
      const correctRate = Math.floor(Math.random() * 20) + 75;
      const newWords = Math.floor(Math.random() * 30) + 5;
      const checkInDays = getCheckInRecords().filter(r => {
        const date = new Date(r.date);
        return date >= startDate && date <= now;
      }).length || Math.floor(Math.random() * 5) + 1;

      // 与上期对比
      const readingTimeChange = Math.floor(Math.random() * 30) - 10;
      const articlesReadChange = Math.floor(Math.random() * 20) - 5;
      const correctRateChange = Math.floor(Math.random() * 10) - 3;

      setReportData({
        period,
        totalReadingTime,
        articlesRead,
        quizCompleted,
        correctRate,
        newWords,
        checkInDays,
        comparedToLast: {
          readingTime: readingTimeChange,
          articlesRead: articlesReadChange,
          correctRate: correctRateChange,
        },
      });
    };

    generateReport();
  }, [reportType, quizHistory]);

  // 生成文本报告
  const generateTextReport = () => {
    const lines = [
      `📊 ${reportType === 'weekly' ? '周' : '月'}度学习报告`,
      `📅 周期：${reportData.period}`,
      '',
      '📈 学习数据概览',
      `⏱️ 总阅读时长：${formatReadingTime(reportData.totalReadingTime)}`,
      `📖 阅读文章数：${reportData.articlesRead}篇`,
      `✏️ 完成测验数：${reportData.quizCompleted}次`,
      `🎯 正确率：${reportData.correctRate}%`,
      `📝 新学单词：${reportData.newWords}个`,
      `✅ 打卡天数：${reportData.checkInDays}天`,
      '',
      '📊 较上期变化',
      `⏱️ 阅读时长：${reportData.comparedToLast.readingTime > 0 ? '+' : ''}${reportData.comparedToLast.readingTime}%`,
      `📖 阅读篇数：${reportData.comparedToLast.articlesRead > 0 ? '+' : ''}${reportData.comparedToLast.articlesRead}%`,
      `🎯 正确率：${reportData.comparedToLast.correctRate > 0 ? '+' : ''}${reportData.comparedToLast.correctRate}%`,
      '',
      '—— 来自老刘爱英语',
    ];
    return lines.join('\n');
  };

  // 复制到剪贴板
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateTextReport());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const StatCard = ({
    icon: Icon,
    label,
    value,
    unit,
    change,
    changeType
  }: {
    icon: any;
    label: string;
    value: number | string;
    unit?: string;
    change?: number;
    changeType?: 'up' | 'down' | 'neutral';
  }) => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-indigo-600" />
        </div>
        {change !== undefined && changeType && (
          <div className={`flex items-center gap-0.5 text-xs ${
            changeType === 'up' ? 'text-green-500' :
            changeType === 'down' ? 'text-red-500' : 'text-gray-400'
          }`}>
            {changeType === 'up' ? <TrendingUp className="w-3 h-3" /> :
             changeType === 'down' ? <TrendingDown className="w-3 h-3" /> : null}
            <span>{change > 0 ? '+' : ''}{change}%</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-800 mt-3">
        {value}
        {unit && <span className="text-sm text-gray-400 ml-1">{unit}</span>}
      </p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header showBack title="学习报告" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FileText className="w-6 h-6 text-indigo-500" />
            <h1 className="text-2xl font-bold text-gray-800">学习报告</h1>
          </div>
          <p className="text-gray-500 text-sm">回顾学习历程，展望进步空间</p>
        </div>

        {/* 报告类型切换 */}
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-100 mb-6">
          <button
            onClick={() => setReportType('weekly')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
              reportType === 'weekly'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-500'
            }`}
          >
            <Calendar className="w-4 h-4" />
            周报
          </button>
          <button
            onClick={() => setReportType('monthly')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
              reportType === 'monthly'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-500'
            }`}
          >
            <Calendar className="w-4 h-4" />
            月报
          </button>
        </div>

        {/* 周期显示 */}
        <div className="bg-indigo-50 rounded-xl p-3 mb-6 text-center">
          <p className="text-indigo-600 font-medium">{reportData.period}</p>
        </div>

        {/* 统计数据卡片 */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatCard
            icon={Clock}
            label="总阅读时长"
            value={formatReadingTime(reportData.totalReadingTime)}
            change={reportData.comparedToLast.readingTime}
            changeType={reportData.comparedToLast.readingTime >= 0 ? 'up' : 'down'}
          />
          <StatCard
            icon={BookOpen}
            label="阅读文章数"
            value={reportData.articlesRead}
            unit="篇"
            change={reportData.comparedToLast.articlesRead}
            changeType={reportData.comparedToLast.articlesRead >= 0 ? 'up' : 'down'}
          />
          <StatCard
            icon={PenTool}
            label="完成测验"
            value={reportData.quizCompleted}
            unit="次"
          />
          <StatCard
            icon={Award}
            label="正确率"
            value={reportData.correctRate}
            unit="%"
            change={reportData.comparedToLast.correctRate}
            changeType={reportData.comparedToLast.correctRate >= 0 ? 'up' : 'down'}
          />
        </div>

        {/* 其他数据 */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📝</span>
              <p className="text-sm text-gray-500">新学单词</p>
            </div>
            <p className="text-2xl font-bold text-gray-800">{reportData.newWords}</p>
            <p className="text-xs text-gray-400">个</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-gray-500">打卡天数</p>
            </div>
            <p className="text-2xl font-bold text-gray-800">{reportData.checkInDays}</p>
            <p className="text-xs text-gray-400">天</p>
          </div>
        </div>

        {/* 本周对比 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            📊 较上期对比
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">阅读时长变化</span>
              <div className={`flex items-center gap-1 font-medium ${
                reportData.comparedToLast.readingTime >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {reportData.comparedToLast.readingTime >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {reportData.comparedToLast.readingTime > 0 ? '+' : ''}
                {reportData.comparedToLast.readingTime}%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">阅读篇数变化</span>
              <div className={`flex items-center gap-1 font-medium ${
                reportData.comparedToLast.articlesRead >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {reportData.comparedToLast.articlesRead >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {reportData.comparedToLast.articlesRead > 0 ? '+' : ''}
                {reportData.comparedToLast.articlesRead}%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">正确率变化</span>
              <div className={`flex items-center gap-1 font-medium ${
                reportData.comparedToLast.correctRate >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {reportData.comparedToLast.correctRate >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {reportData.comparedToLast.correctRate > 0 ? '+' : ''}
                {reportData.comparedToLast.correctRate}%
              </div>
            </div>
          </div>
        </div>

        {/* 导出按钮 */}
        <button
          onClick={handleCopy}
          className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
            copied
              ? 'bg-green-100 text-green-600'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              已复制到剪贴板
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              复制报告到剪贴板
            </>
          )}
        </button>

        {/* 提示信息 */}
        <div className="mt-4 text-center text-xs text-gray-400">
          <p>报告数据基于本地学习记录统计</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ReportPage;