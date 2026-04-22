import React, { useState, useMemo } from 'react';
import { Filter, Search, Clock, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import BottomNav from '../components/BottomNav';
import { LEVELS, CATEGORIES } from '../types';
import { getArticlesByCategory } from '../data/articles';
import { useApp } from '../context/AppContext';
import { getReadingHistory, clearReadingHistory, ReadingHistoryItem } from '../utils/storage';

const ArticlesListPage: React.FC = () => {
  const { selectedLevel } = useApp();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 搜索状态
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLevel, setSearchLevel] = useState('all');
  const [searchAuthor, setSearchAuthor] = useState('');

  // 浏览历史状态
  const [showHistory, setShowHistory] = useState(false);
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>([]);

  // 获取当前等级的文章
  const articles = useMemo(() => {
    return getArticlesByCategory(selectedCategory, selectedLevel);
  }, [selectedCategory, selectedLevel]);

  // 搜索过滤后的文章
  const filteredArticles = useMemo(() => {
    let result = articles;

    // 按难度筛选
    if (searchLevel !== 'all') {
      result = result.filter(article => article.level === searchLevel);
    }

    // 按文章名搜索
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.titleZh.toLowerCase().includes(query)
      );
    }

    // 按作者搜索
    if (searchAuthor.trim()) {
      const authorQuery = searchAuthor.toLowerCase();
      result = result.filter(article =>
        article.author.toLowerCase().includes(authorQuery)
      );
    }

    return result;
  }, [articles, searchQuery, searchLevel, searchAuthor]);

  // 加载阅读历史
  const loadReadingHistory = () => {
    const history = getReadingHistory();
    setReadingHistory(history);
    setShowHistory(true);
  };

  // 清除阅读历史
  const handleClearHistory = () => {
    clearReadingHistory();
    setReadingHistory([]);
  };

  // 关闭搜索
  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchQuery('');
    setSearchLevel('all');
    setSearchAuthor('');
  };

  // 获取唯一作者列表
  const authors = useMemo(() => {
    const authorSet = new Set(articles.map(a => a.author));
    return Array.from(authorSet).sort();
  }, [articles]);

  const currentLevel = LEVELS.find(l => l.id === selectedLevel);

  // 判断是否有搜索条件
  const hasSearchCondition = searchQuery.trim() || searchLevel !== 'all' || searchAuthor.trim();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="文章列表" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-4xl mx-auto">
        {/* 搜索和历史按钮栏 */}
        <div className="mb-4 flex items-center gap-2">
          <button
            onClick={() => setShowSearch(true)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="text-sm">搜索文章...</span>
          </button>
          <button
            onClick={loadReadingHistory}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">历史</span>
          </button>
        </div>

        {/* 等级标题 */}
        <div className="mb-5 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
            {currentLevel?.nameZh} - 阅读
          </h1>
          <p className="text-gray-500 text-sm">
            共 {hasSearchCondition ? filteredArticles.length : articles.length} 篇文章
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="mb-5 sm:mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">分类筛选</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 文章列表 */}
        {(hasSearchCondition ? filteredArticles : articles).length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {(hasSearchCondition ? filteredArticles : articles).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {hasSearchCondition ? '未找到相关文章' : '暂无文章'}
            </h3>
            <p className="text-gray-500 text-sm">
              {hasSearchCondition ? '试试调整搜索条件' : '该分类下还没有文章，敬请期待'}
            </p>
          </div>
        )}
      </main>

      {/* 搜索浮层 */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="pt-12 px-3 sm:px-4">
            {/* 搜索头部 */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-xl">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索文章名..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none"
                  autoFocus
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')}>
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
              <button
                onClick={handleCloseSearch}
                className="px-4 py-2.5 text-gray-600 text-sm font-medium"
              >
                取消
              </button>
            </div>

            {/* 难度筛选 */}
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">难度筛选</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSearchLevel('all')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    searchLevel === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  全部
                </button>
                {LEVELS.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSearchLevel(level.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      searchLevel === level.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {level.nameZh}
                  </button>
                ))}
              </div>
            </div>

            {/* 作者筛选 */}
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">作者筛选</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSearchAuthor('')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    searchAuthor === ''
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  全部
                </button>
                {authors.slice(0, 8).map((author) => (
                  <button
                    key={author}
                    onClick={() => setSearchAuthor(author)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      searchAuthor === author
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {author}
                  </button>
                ))}
              </div>
            </div>

            {/* 搜索结果 */}
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">
                找到 {filteredArticles.length} 篇文章
              </p>
              {filteredArticles.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-gray-500">未找到相关文章</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 阅读历史浮层 */}
      {showHistory && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="pt-12 px-3 sm:px-4">
            {/* 历史头部 */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">阅读历史</h2>
              <div className="flex items-center gap-2">
                {readingHistory.length > 0 && (
                  <button
                    onClick={handleClearHistory}
                    className="px-3 py-1.5 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    清除
                  </button>
                )}
                <button
                  onClick={() => setShowHistory(false)}
                  className="px-3 py-1.5 text-gray-600 text-sm"
                >
                  关闭
                </button>
              </div>
            </div>

            {/* 历史列表 */}
            {readingHistory.length > 0 ? (
              <div className="space-y-2">
                {readingHistory.map((item) => (
                  <div
                    key={item.articleId}
                    onClick={() => {
                      navigate(`/articles/${item.articleId}`);
                      setShowHistory(false);
                    }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-800 truncate">{item.titleZh}</h3>
                      <p className="text-sm text-gray-500 truncate">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {item.author} · {new Date(item.readAt).toLocaleDateString('zh-CN')}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="text-5xl mb-4">📖</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">暂无阅读历史</h3>
                <p className="text-gray-500 text-sm">开始阅读文章后会自动记录</p>
              </div>
            )}
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default ArticlesListPage;
