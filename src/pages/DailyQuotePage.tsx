import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import { dailyQuotes, DailyQuote } from '../data/dailyQuotes';
import { Search, Quote } from 'lucide-react';

const CATEGORIES = ['All', 'Wisdom', 'Courage', 'Life', 'Motivation', 'Philosophy', 'Knowledge', 'Creativity', 'Change', 'Strength', 'Forgiveness', 'Actions', 'Perseverance', 'Success', 'Happiness'];

const DailyQuotePage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = useMemo(() => {
    return dailyQuotes.filter(q => {
      const matchSearch = search === '' ||
        q.text.toLowerCase().includes(search.toLowerCase()) ||
        q.author.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCategory === 'All' || q.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="pt-20 pb-8 px-3 sm:px-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Quote className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">每日谚语</h1>
          <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{dailyQuotes.length} 条</span>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索谚语或作者..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* 分类筛选 */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600'
              }`}
            >
              {cat === 'All' ? '全部' : cat}
            </button>
          ))}
        </div>

        {/* 结果统计 */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {filtered.length === dailyQuotes.length ? '全部谚语' : `找到 ${filtered.length} 条`}
        </p>

        {/* 谚语列表 */}
        <div className="space-y-3">
          {filtered.map((quote) => (
            <div
              key={quote.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base text-gray-700 dark:text-gray-200 italic mb-3 leading-relaxed">
                    "{quote.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      — {quote.author}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      quote.category === 'Wisdom' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' :
                      quote.category === 'Courage' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' :
                      quote.category === 'Life' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' :
                      quote.category === 'Motivation' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300' :
                      'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {quote.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 dark:text-gray-500">
            <p>未找到匹配的谚语</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DailyQuotePage;
