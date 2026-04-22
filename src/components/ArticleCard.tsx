import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, BarChart } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const getDifficultyColor = (difficulty: number): string => {
  if (difficulty <= 1) return 'bg-green-100 text-green-700';
  if (difficulty <= 2) return 'bg-blue-100 text-blue-700';
  if (difficulty <= 3) return 'bg-yellow-100 text-yellow-700';
  return 'bg-red-100 text-red-700';
};

const getDifficultyText = (difficulty: number): string => {
  if (difficulty <= 1) return '简单';
  if (difficulty <= 2) return '中等';
  if (difficulty <= 3) return '较难';
  return '困难';
};

const getCategoryIcon = (category: string): string => {
  switch (category) {
    case 'literature': return '📖';
    case 'news': return '📰';
    case 'science': return '🔬';
    case 'essay': return '✍️';
    default: return '📝';
  }
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/articles/${article.id}`);
  };

  return (
    <div
      onClick={handleClick}
      onTouchEnd={(e) => {
        // 防止触摸设备上的默认行为
        e.preventDefault();
        navigate(`/articles/${article.id}`);
      }}
      className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group active:scale-[0.99] cursor-pointer"
    >
      {/* 卡片头部 */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl">{getCategoryIcon(article.category)}</span>
            <span className={`px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
              {getDifficultyText(article.difficulty)}
            </span>
          </div>
        </div>

        {/* 标题 */}
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2 sm:mb-3 line-clamp-1">{article.titleZh}</p>

        {/* 作者信息 */}
        <p className="text-xs text-gray-400 mb-3 sm:mb-4">作者：{article.author}</p>

        {/* 统计信息 */}
        <div className="flex items-center space-x-3 sm:space-x-4 text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{article.wordCount} 词</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5" />
            <span>约 {Math.ceil(article.wordCount / 200)} 分钟</span>
          </div>
        </div>
      </div>

      {/* 底部箭头 */}
      <div className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-50 flex items-center justify-between group-hover:bg-indigo-50 transition-colors">
        <span className="text-xs text-gray-500">点击阅读</span>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

export default ArticleCard;
