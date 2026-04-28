import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import { idioms, Idiom } from '../data/idioms';
import { Search, BookOpen } from 'lucide-react';

const IdiomsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = useMemo(() => {
    return idioms.filter(i => {
      const matchSearch = search === '' ||
        i.phrase.toLowerCase().includes(search.toLowerCase()) ||
        i.meaning.toLowerCase().includes(search.toLowerCase()) ||
        i.example.toLowerCase().includes(search.toLowerCase());
      return matchSearch;
    });
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="pt-20 pb-8 px-3 sm:px-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">英语习语</h1>
          <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{idioms.length} 条</span>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索习语..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* 结果统计 */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {filtered.length === idioms.length ? '全部习语' : `找到 ${filtered.length} 条相关习语`}
        </p>

        {/* 习语列表 */}
        <div className="space-y-3">
          {filtered.map((idiom) => (
            <div
              key={idiom.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{idiom.id}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-1">
                    {idiom.phrase}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {idiom.meaning}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                    "{idiom.example}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 dark:text-gray-500">
            <p>未找到匹配的习语</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default IdiomsPage;
