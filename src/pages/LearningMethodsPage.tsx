import React, { useState } from 'react';
import { BookOpen, Headphones, PenTool, Users, Video, Mic, Globe, GraduationCap, ChevronDown, ChevronUp, Play } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

interface LearningMethod {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tips: string[];
  resources: { name: string; url: string }[];
}

const learningMethods: LearningMethod[] = [
  {
    id: 1,
    title: '阅读原版书籍',
    titleEn: 'Reading Original Books',
    description: '通过阅读英文原版书籍来提高词汇量和语感',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-blue-500',
    tips: [
      '从简单的儿童读物开始',
      '遇到生词先尝试根据上下文猜意思',
      '准备一个生词本记录新单词',
      '每天保持30分钟阅读时间',
    ],
    resources: [
      { name: '书虫系列', url: '' },
      { name: '牛津书虫', url: '' },
      { name: '床头灯系列', url: '' },
    ],
  },
  {
    id: 2,
    title: '听力训练',
    titleEn: 'Listening Practice',
    description: '通过听英语音频来提高听力理解能力',
    icon: <Headphones className="w-6 h-6" />,
    color: 'bg-green-500',
    tips: [
      '先听大意，再听细节',
      '可以选择带字幕的听力材料',
      '反复听同一段材料直到完全理解',
      '注意不同口音的英语',
    ],
    resources: [
      { name: 'VOA慢速英语', url: '' },
      { name: 'BBC Learning English', url: '' },
      { name: 'TED演讲', url: '' },
    ],
  },
  {
    id: 3,
    title: '口语练习',
    titleEn: 'Speaking Practice',
    description: '通过模仿和跟读来提高口语表达',
    icon: <Mic className="w-6 h-6" />,
    color: 'bg-purple-500',
    tips: [
      '每天跟读5-10分钟',
      '录音对比自己的发音',
      '参加英语角或语言交换',
      '用英语描述每天的生活',
    ],
    resources: [
      { name: '英语流利说', url: '' },
      { name: '多邻国', url: '' },
      { name: 'HelloTalk', url: '' },
    ],
  },
  {
    id: 4,
    title: '写作训练',
    titleEn: 'Writing Practice',
    description: '通过写作来巩固语法和表达能力',
    icon: <PenTool className="w-6 h-6" />,
    color: 'bg-orange-500',
    tips: [
      '从写日记开始',
      '注意语法和拼写',
      '请老师或native speaker帮忙批改',
      '学习优秀范文',
    ],
    resources: [
      { name: ' Grammarly', url: '' },
      { name: '作文批改网', url: '' },
      { name: 'Lang-8', url: '' },
    ],
  },
  {
    id: 5,
    title: '语法学习',
    titleEn: 'Grammar Study',
    description: '系统学习英语语法规则',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-red-500',
    tips: [
      '理解规则背后的逻辑',
      '通过例句记忆规则',
      '做大量练习巩固',
      '在阅读中注意语法结构',
    ],
    resources: [
      { name: '剑桥英语语法', url: '' },
      { name: 'English Grammar in Use', url: '' },
      { name: '旋元佑文法', url: '' },
    ],
  },
  {
    id: 6,
    title: '看英文视频',
    titleEn: 'Watching English Videos',
    description: '通过观看英文视频来学习地道的表达',
    icon: <Video className="w-6 h-6" />,
    color: 'bg-pink-500',
    tips: [
      '先看中文字幕，再看英文字幕',
      '记录有趣的表达和短语',
      '选择自己感兴趣的内容',
      '反复观看直到能听懂',
    ],
    resources: [
      { name: 'YouTube', url: '' },
      { name: 'Netflix', url: '' },
      { name: 'B站英语区', url: '' },
    ],
  },
  {
    id: 7,
    title: '语言交换',
    titleEn: 'Language Exchange',
    description: '与母语者进行语言交换',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-teal-500',
    tips: [
      '找固定的语言伙伴',
      '提前准备好话题',
      '互相帮助对方的母语',
      '保持积极开放的心态',
    ],
    resources: [
      { name: 'HelloTalk', url: '' },
      { name: 'Tandem', url: '' },
      { name: 'Speaky', url: '' },
    ],
  },
  {
    id: 8,
    title: '使用词典',
    titleEn: 'Using Dictionaries',
    description: '正确使用词典来扩展词汇量',
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-indigo-500',
    tips: [
      '使用英英词典更好',
      '注意单词的多种含义',
      '学习例句了解用法',
      '记录词组和固定搭配',
    ],
    resources: [
      { name: '牛津高阶词典', url: '' },
      { name: '朗文当代词典', url: '' },
      { name: '柯林斯词典', url: '' },
    ],
  },
];

const LearningMethodsPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header title="英语学习方法" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-2xl mx-auto">
        {/* 学习方法分类说明 */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-indigo-600">
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium">八大英语学习方法</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            结合多种学习方式，全面提升听说读写能力
          </p>
        </div>

        {/* 学习方法列表 */}
        <div className="space-y-3">
          {learningMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* 标题栏 */}
              <button
                onClick={() => toggleExpand(method.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center text-white`}>
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">{method.title}</h3>
                    <p className="text-xs text-gray-500">{method.titleEn}</p>
                  </div>
                </div>
                {expandedId === method.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* 展开内容 */}
              {expandedId === method.id && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mt-3 mb-3">{method.description}</p>

                  {/* 学习技巧 */}
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">💡 学习技巧</h4>
                    <ul className="space-y-1">
                      {method.tips.map((tip, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-indigo-500">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 推荐资源 */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">📚 推荐资源</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.resources.map((resource, index) => (
                        <button
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors"
                        >
                          {resource.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 开始学习按钮 */}
                  <button className="w-full mt-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    开始学习
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 学习计划建议 */}
        <div className="mt-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-4 text-white">
          <h3 className="font-semibold mb-3">📅 每日学习计划建议</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs opacity-75">早晨:</span>
              <span>听力训练 15分钟 + 单词复习 10分钟</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs opacity-75">上午:</span>
              <span>语法学习 20分钟 + 阅读 15分钟</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs opacity-75">下午:</span>
              <span>口语跟读 10分钟 + 写作练习 15分钟</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs opacity-75">晚上:</span>
              <span>视频学习 15分钟 + 游戏巩固 10分钟</span>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default LearningMethodsPage;
