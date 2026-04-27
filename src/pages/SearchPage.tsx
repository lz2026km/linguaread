import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Header from '../components/Header';
import { articles } from '../data/articles';
import { grammarData } from '../data/grammar';
import { courses } from '../data/courses';
import { exams } from '../data/exams';
import { quizQuestions } from '../data/quiz';
import { useApp } from '../context/AppContext';

interface SearchResult {
  type: 'article' | 'grammar' | 'course' | 'exam' | 'quiz';
  id: string;
  title: string;
  titleZh: string;
  content: string;
  matchField: string;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { darkMode } = useApp();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return { articles: [], grammar: [], courses: [], exams: [], quiz: [] };

    const lowerQuery = query.toLowerCase();

    const articlesResults: SearchResult[] = articles
      .filter(a => 
        a.titleZh.toLowerCase().includes(lowerQuery) ||
        a.contentEn.toLowerCase().includes(lowerQuery) ||
        a.contentZh.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 5)
      .map(a => ({
        type: 'article' as const,
        id: a.id,
        title: a.title,
        titleZh: a.titleZh,
        content: a.contentZh || a.contentEn,
        matchField: a.titleZh.toLowerCase().includes(lowerQuery) ? 'title' : 'content'
      }));

    const grammarResults: SearchResult[] = grammarData
      .filter(g =>
        g.titleZh.toLowerCase().includes(lowerQuery) ||
        g.content.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 5)
      .map(g => ({
        type: 'grammar' as const,
        id: g.id,
        title: g.title,
        titleZh: g.titleZh,
        content: g.content,
        matchField: g.titleZh.toLowerCase().includes(lowerQuery) ? 'title' : 'content'
      }));

    const coursesResults: SearchResult[] = courses
      .flatMap(c => c.units.map(u => ({ course: c, unit: u })))
      .filter(({ unit }) =>
        unit.titleZh.toLowerCase().includes(lowerQuery) ||
        unit.contentEn.toLowerCase().includes(lowerQuery) ||
        unit.contentZh.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 5)
      .map(({ course, unit }) => ({
        type: 'course' as const,
        id: `${course.id}-${unit.id}`,
        title: unit.title,
        titleZh: unit.titleZh,
        content: unit.contentZh || unit.contentEn,
        matchField: unit.titleZh.toLowerCase().includes(lowerQuery) ? 'title' : 'content'
      }));

    const examsResults: SearchResult[] = exams
      .flatMap(e => e.questions.map(q => ({ exam: e, question: q })))
      .filter(({ question }) =>
        question.question.toLowerCase().includes(lowerQuery) ||
        question.questionZh.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 5)
      .map(({ exam, question }) => ({
        type: 'exam' as const,
        id: `${exam.id}-${question.id}`,
        title: exam.title,
        titleZh: exam.titleZh,
        content: question.questionZh || question.question,
        matchField: question.questionZh.toLowerCase().includes(lowerQuery) ? 'title' : 'content'
      }));

    const quizResults: SearchResult[] = quizQuestions
      .filter(q =>
        q.word.toLowerCase().includes(lowerQuery) ||
        q.correctAnswer.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 5)
      .map(q => ({
        type: 'quiz' as const,
        id: q.id,
        title: q.word,
        titleZh: q.correctAnswer,
        content: `音标: ${q.phonetic}`,
        matchField: q.word.toLowerCase().includes(lowerQuery) ? 'title' : 'content'
      }));

    return {
      articles: articlesResults,
      grammar: grammarResults,
      courses: coursesResults,
      exams: examsResults,
      quiz: quizResults
    };
  }, [query]);

  const totalResults = 
    searchResults.articles.length +
    searchResults.grammar.length +
    searchResults.courses.length +
    searchResults.exams.length +
    searchResults.quiz.length;

  const clearSearch = () => {
    setQuery('');
    setSelectedResult(null);
    inputRef.current?.focus();
  };

  const getLevelName = (level: string): string => {
    const levelMap: Record<string, string> = {
      elementary: '小学',
      junior: '初中',
      senior: '高中',
      university: '大学'
    };
    return levelMap[level] || level;
  };

  const renderResultCard = (result: SearchResult, index: number) => {
    const bgClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
    const textClass = darkMode ? 'text-gray-100' : 'text-gray-800';
    const subTextClass = darkMode ? 'text-gray-400' : 'text-gray-500';
    const badgeClass = darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-700';

    const typeLabels: Record<string, string> = {
      article: '📖 文章',
      grammar: '📝 语法',
      course: '📚 课程',
      exam: '📄 试卷',
      quiz: '❓ 测试'
    };

    return (
      <div
        key={`${result.type}-${result.id}-${index}`}
        onClick={() => setSelectedResult(result)}
        className={`${bgClass} rounded-xl p-4 border shadow-sm cursor-pointer hover:shadow-md transition-all ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${badgeClass}`}>
                {typeLabels[result.type]}
              </span>
            </div>
            <h3 className={`text-base font-semibold ${textClass} truncate`}>{result.titleZh || result.title}</h3>
            <p className={`text-sm ${subTextClass} truncate`}>{result.title}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
            {result.matchField === 'title' ? '标题' : '内容'}
          </span>
        </div>
      </div>
    );
  };

  const renderSelectedCard = () => {
    if (!selectedResult) return null;

    const bgClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
    const textClass = darkMode ? 'text-gray-100' : 'text-gray-800';
    const subTextClass = darkMode ? 'text-gray-400' : 'text-gray-500';
    const contentBg = darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-600';

    const typeLabels: Record<string, string> = {
      article: '📖 文章',
      grammar: '📝 语法',
      course: '📚 课程',
      exam: '📄 试卷',
      quiz: '❓ 测试'
    };

    return (
      <div className={`${bgClass} rounded-xl border shadow-lg overflow-hidden`}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2 py-1 rounded text-sm font-medium ${darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
              {typeLabels[selectedResult.type]}
            </span>
            <button
              onClick={() => setSelectedResult(null)}
              className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <h3 className={`text-lg font-bold ${textClass}`}>{selectedResult.titleZh || selectedResult.title}</h3>
          <p className={`text-sm ${subTextClass}`}>{selectedResult.title}</p>
        </div>
        <div className={`p-4 max-h-64 overflow-y-auto ${contentBg}`}>
          <p className="whitespace-pre-line text-sm leading-relaxed">
            {selectedResult.content.length > 500 
              ? selectedResult.content.substring(0, 500) + '...' 
              : selectedResult.content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header showBack={false} title="搜索" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 搜索输入框 */}
        <div className={`mb-4 sm:mb-6 flex items-center rounded-xl shadow-sm ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border`}>
          <Search className={`w-5 h-5 ml-4 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="输入关键词开始搜索..."
            className={`flex-1 px-3 py-3.5 bg-transparent outline-none text-base ${
              darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'
            }`}
          />
          {query && (
            <button
              onClick={clearSearch}
              className={`p-2 mr-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* 空状态 */}
        {!query.trim() && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              输入关键词开始搜索
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              支持搜索文章、语法、课程、试卷和测试
            </p>
          </div>
        )}

        {/* 有搜索词但无结果 */}
        {query.trim() && totalResults === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-5xl mb-4">😢</div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              未找到相关结果
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              请尝试其他关键词
            </p>
          </div>
        )}

        {/* 搜索结果 */}
        {query.trim() && totalResults > 0 && (
          <div className="space-y-6">
            {selectedResult && (
              <div className="mb-4">
                {renderSelectedCard()}
              </div>
            )}

            {/* 文章 */}
            {searchResults.articles.length > 0 && (
              <section>
                <h2 className={`text-sm font-semibold mb-3 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  📖 文章
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                    {searchResults.articles.length}
                  </span>
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {searchResults.articles.map((result, index) => renderResultCard(result, index))}
                </div>
              </section>
            )}

            {/* 语法 */}
            {searchResults.grammar.length > 0 && (
              <section>
                <h2 className={`text-sm font-semibold mb-3 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  📝 语法
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                    {searchResults.grammar.length}
                  </span>
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {searchResults.grammar.map((result, index) => renderResultCard(result, index))}
                </div>
              </section>
            )}

            {/* 课程 */}
            {searchResults.courses.length > 0 && (
              <section>
                <h2 className={`text-sm font-semibold mb-3 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  📚 课程
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                    {searchResults.courses.length}
                  </span>
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {searchResults.courses.map((result, index) => renderResultCard(result, index))}
                </div>
              </section>
            )}

            {/* 试卷 */}
            {searchResults.exams.length > 0 && (
              <section>
                <h2 className={`text-sm font-semibold mb-3 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  📄 试卷
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                    {searchResults.exams.length}
                  </span>
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {searchResults.exams.map((result, index) => renderResultCard(result, index))}
                </div>
              </section>
            )}

            {/* 测试 */}
            {searchResults.quiz.length > 0 && (
              <section>
                <h2 className={`text-sm font-semibold mb-3 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  ❓ 测试
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                    {searchResults.quiz.length}
                  </span>
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {searchResults.quiz.map((result, index) => renderResultCard(result, index))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;
