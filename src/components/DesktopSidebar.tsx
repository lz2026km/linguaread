import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, BookOpen, GraduationCap, PenTool, BookMarked, Library, Bot, Video,
  Medal, Download, FileText, Settings, Heart, ChevronLeft, ChevronRight,
  Trophy, BarChart3, Brain, Book
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const DesktopSidebar: React.FC = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode, favorites } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/articles', icon: BookOpen, label: '阅读' },
    { path: '/ai-assistant', icon: Bot, label: 'AI助手' },
    { path: '/video-learning', icon: Video, label: '视频' },
    { path: '/courses', icon: Library, label: '课程' },
    { path: '/grammar', icon: GraduationCap, label: '语法' },
    { path: '/quiz', icon: PenTool, label: '测试' },
    { path: '/vocabulary', icon: Heart, label: '词汇', badge: favorites.length },
    { path: '/new-words', icon: BookMarked, label: '生词本' },
    { path: '/leaderboard', icon: Medal, label: '排行' },
    { path: '/achievements', icon: Trophy, label: '成就' },
    { path: '/stats', icon: BarChart3, label: '统计' },
    { path: '/exam-papers', icon: FileText, label: '试卷' },
    { path: '/wrong-answers', icon: Brain, label: '错题本' },
    { path: '/download', icon: Download, label: '下载' },
    { path: '/books', icon: Book, label: '书籍' },
  ];

  return (
    <>
      {/* Desktop Sidebar - hidden on mobile, visible on lg+ */}
      <aside
        className={`hidden lg:flex flex-col fixed left-0 top-0 h-full z-50 transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-56'
        } ${
          darkMode
            ? 'bg-gray-900 border-r border-gray-700'
            : 'bg-white border-r border-gray-200'
        }`}
      >
        {/* Logo */}
        <div className={`h-14 flex items-center justify-between px-3 border-b ${
          darkMode ? 'border-gray-700' : 'border-gray-100'
        }`}>
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className={`font-bold text-base ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                老刘爱英语
              </span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`p-1.5 rounded-lg transition-colors ${
              darkMode
                ? 'hover:bg-gray-700 text-gray-400'
                : 'hover:bg-gray-100 text-gray-500'
            }`}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center h-10 mb-1 rounded-lg transition-colors relative group ${
                  collapsed ? 'justify-center px-2' : 'px-3'
                } ${
                  active
                    ? darkMode
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-50 text-indigo-600'
                    : darkMode
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${active ? '' : ''}`} />
                {!collapsed && (
                  <span className="ml-3 text-sm font-medium truncate">{item.label}</span>
                )}
                {item.badge && item.badge > 0 && (
                  <span className={`absolute top-1 ${collapsed ? 'right-1' : 'right-3'} w-2 h-2 bg-green-500 rounded-full`} />
                )}
                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className={`absolute left-full ml-2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-50 ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
                  }`}>
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer: Settings + Dark Mode */}
        <div className={`border-t px-2 py-3 space-y-1 ${
          darkMode ? 'border-gray-700' : 'border-gray-100'
        }`}>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`flex items-center w-full h-10 rounded-lg transition-colors ${
              collapsed ? 'justify-center px-2' : 'px-3'
            } ${darkMode
              ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
            {!collapsed && (
              <span className="ml-3 text-sm font-medium">
                {darkMode ? '浅色模式' : '深色模式'}
              </span>
            )}
          </button>

          {/* Settings */}
          <Link
            to="/settings"
            className={`flex items-center w-full h-10 rounded-lg transition-colors ${
              collapsed ? 'justify-center px-2' : 'px-3'
            } ${isActive('/settings')
              ? darkMode
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-50 text-indigo-600'
              : darkMode
                ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="ml-3 text-sm font-medium">设置</span>}
          </Link>
        </div>
      </aside>

      {/* Spacer for content when sidebar is visible */}
      <div className="hidden lg:block w-56 flex-shrink-0" />
      <div className="hidden lg:block absolute left-56 w-56 flex-shrink-0" />
    </>
  );
};

export default DesktopSidebar;
