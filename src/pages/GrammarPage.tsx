import React, { useState, useMemo } from 'react';
import { Filter, BookOpen, ChevronDown, ChevronUp, Volume2 } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { GRAMMAR_CATEGORIES, GrammarItem } from '../types';
import { getGrammarByCategory } from '../data/grammar';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

const GrammarPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState('elementary');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { speak, isSpeaking, stop } = useSpeechSynthesis();

  const grammarItems = useMemo(() => {
    return getGrammarByCategory(selectedLevel, selectedCategory);
  }, [selectedLevel, selectedCategory]);

  const levels = [
    { id: 'elementary', name: '小学', color: 'bg-green-500' },
    { id: 'junior', name: '初中', color: 'bg-blue-500' },
    { id: 'senior', name: '高中', color: 'bg-purple-500' },
    { id: 'university', name: '大学', color: 'bg-amber-500' },
  ];

  const getLevelColor = (level: string): string => {
    switch (level) {
      case 'elementary': return 'bg-green-100 text-green-700';
      case 'junior': return 'bg-blue-100 text-blue-700';
      case 'senior': return 'bg-purple-100 text-purple-700';
      case 'university': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const playExample = (example: string) => {
    stop();
    speak(example);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="语法学习" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 等级选择 */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">选择年级</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                  selectedLevel === level.id
                    ? `${level.color} text-white shadow-md`
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>

        {/* 分类筛选 */}
        <div className="mb-4 sm:mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {GRAMMAR_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 transition-all ${
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

        {/* 语法列表 */}
        <div className="space-y-3">
          {grammarItems.length > 0 ? (
            grammarItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getLevelColor(item.level)}`}>
                        {item.level === 'elementary' ? '小学' : item.level === 'junior' ? '初中' : item.level === 'senior' ? '高中' : '大学'}
                      </span>
                      <span className="text-xs text-gray-400">
                        {GRAMMAR_CATEGORIES.find(c => c.id === item.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-800">{item.titleZh}</h3>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                  <div className="text-gray-400">
                    {expandedId === item.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {expandedId === item.id && (
                  <div className="px-4 pb-4 border-t border-gray-100 animate-fadeIn">
                    <div className="pt-4">
                      <div className="prose prose-sm max-w-none text-gray-600 whitespace-pre-line mb-4">
                        {item.content}
                      </div>
                      {item.examples && item.examples.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">例句：</h4>
                          <ul className="space-y-2">
                            {item.examples.map((example, index) => (
                              <li key={index} className="flex items-center justify-between text-sm text-gray-600 pl-3 border-l-2 border-indigo-200 py-1">
                                <span>{example}</span>
                                <button
                                  onClick={() => playExample(example)}
                                  className="ml-2 p-1.5 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                                  title="播放读音"
                                >
                                  <Volume2 className="w-4 h-4" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">暂无语法内容</h3>
              <p className="text-gray-500 text-sm">该分类下还没有语法内容</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default GrammarPage;
