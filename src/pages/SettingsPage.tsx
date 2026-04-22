import React, { useState } from 'react';
import { ArrowLeft, Volume2, X, Moon, Sun } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import VoiceSelector from '../components/VoiceSelector';

// 版本历史数据
const versionHistory = [
  {
    version: '4.5',
    date: '2026-02-27',
    changes: [
      '新增AI英语助手功能，支持智能问答、语法解析、学习指导',
      '新增英文小视频学习模块，沉浸式英语视频学习',
      '优化大屏手机适配，提升平板和大屏手机使用体验',
      '优化翻译控件显示，点击单词后中英文展示更加自然清晰',
      '新增护眼褐色阅读背景主题',
    ],
  },
  {
    version: '4.1.5',
    date: '2026-02-25',
    changes: [
      '修复阅读背景点击选择BUG，优化背景切换体验',
      '大幅扩展单词中文翻译词库，涵盖1300+常用词汇',
      '优化翻译显示效果，确保中文翻译完整展示',
    ],
  },
  {
    version: '4.1.1',
    date: '2026-02-25',
    changes: [
      '每日推荐改为可折叠形式，点击标题栏展开内容',
      '新增每天一个国家栏目，每日推送英文国家介绍',
      '优化首页布局和信息展示',
    ],
  },
  {
    version: '4.0',
    date: '2026-02-25',
    changes: [
      '新增单词小游戏功能，趣味背单词',
      '新增英语学习方法栏目，整合多种学习技巧',
      '留言板增加打分功能，支持1-5星评价',
      '优化单词翻译显示中文注解，帮助理解记忆',
      '阅读界面支持背景更换（纹理、华丽、自然、夜间等多种主题）',
    ],
  },
  {
    version: '3.7',
    date: '2026-02-24',
    changes: [
      '新增英文书籍下载功能，预留下载端口',
      '升级笔记功能，支持划线标色（黄、绿、蓝、粉、橙五色）',
      '支持对选中文本插入批示和注释',
      '新增书籍页面，可下载经典英文原著',
      '优化高亮笔记显示和管理',
    ],
  },
  {
    version: '3.6',
    date: '2026-02-24',
    changes: [
      '新增笔记功能，支持对文章重点段落进行标记和注释',
      '新增游客留言板，可以留下宝贵意见',
      '优化阅读体验，笔记与文章完美结合',
    ],
  },
  {
    version: '3.5',
    date: '2026-02-23',
    changes: [
      '美化每日推荐，显示更多文章',
      '简化主界面，点击级别直接跳转文章',
      '删除浏览全部文章控件',
      '新增考试试卷集功能',
      '包含小学、初中、高中、大学分类',
      '每类2套试卷，每套30题含答案',
    ],
  },
  {
    version: '3.1',
    date: '2026-02-23',
    changes: [
      '修复手机端点击阅读错误',
      '修复手机端点击设置错误',
      '新增学习打卡功能',
      '累计阅读时长控件优化',
      '打卡统计（本月/本年）',
    ],
  },
  {
    version: '3.0.2',
    date: '2026-02-23',
    changes: [
      '修复语音设置中女性声音测试问题',
      '新增阅读字体设置（字体选择）',
      '新增夜晚阅读模式',
      '补齐版本历史信息',
    ],
  },
  {
    version: '3.0.1',
    date: '2026-02-23',
    changes: [
      '版本历史功能上线',
      '添加软件所有人信息',
    ],
  },
  {
    version: '3.0',
    date: '2026-02-23',
    changes: [
      '新增英语官方课程模块',
      '涵盖小学、初中、高中、大学官方教材',
      '课程阅读进度追踪',
      '课程书签功能',
      '单元导航（上一单元/下一单元）',
    ],
  },
  {
    version: '2.9.1',
    date: '2026-02-23',
    changes: [
      '新增100篇经典文学作品',
      '按难度分类（小学/初中/高中/大学）',
    ],
  },
  {
    version: '2.9',
    date: '2026-02-23',
    changes: [
      '新增文章搜索功能（按名称、作者、难度）',
      '新增浏览历史记录',
      '点击单词可保存到生词本',
      '新增生词本独立标签页',
    ],
  },
  {
    version: '2.6',
    date: '2026-02-23',
    changes: [
      '修复单词测试题目重复问题',
      '修复手机端阅读体验问题',
      '新增阅读时长统计',
      '新增大学语法内容',
      '语法内容支持朗读',
    ],
  },
  {
    version: '2.5',
    date: '2026-02-23',
    changes: [
      '新增高中语法内容',
      '语法分类优化',
      '性能优化和bug修复',
    ],
  },
  {
    version: '2.0',
    date: '2026-02-23',
    changes: [
      '新增语法学习模块',
      '新增单词测试功能',
      'UI界面优化',
      '新增语音设置',
    ],
  },
  {
    version: '1.1',
    date: '2026-02-23',
    changes: [
      '优化单词点击交互',
      '新增文章收藏功能',
      '修复部分机型兼容性问题',
      '增加更多文章内容',
    ],
  },
  {
    version: '1.0',
    date: '2026-02-23',
    changes: [
      '双语文章阅读（小学/初中/高中/大学）',
      '单词点击显示音标和释义',
      '单词点击朗读',
      '单词收藏功能',
      '文章收藏功能',
      '语法学习模块',
      '单词测试模块',
    ],
  },
];

const SettingsPage: React.FC = () => {
  const [showVoiceSettings, setShowVoiceSettings] = useState(true);
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [nightMode, setNightMode] = useState(() => {
    const saved = localStorage.getItem('linguaread_night_mode');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleNightMode = () => {
    const newMode = !nightMode;
    setNightMode(newMode);
    localStorage.setItem('linguaread_night_mode', JSON.stringify(newMode));
    // 触发自定义事件让其他组件监听
    window.dispatchEvent(new CustomEvent('nightModeChange', { detail: newMode }));
  };

  return (
    <div className={`min-h-screen ${nightMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header showBack title="设置" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 语音设置 */}
        <section className="mb-6">
          <VoiceSelector />
        </section>

        {/* 夜晚阅读模式 */}
        <section className="mb-6">
          <div className={`rounded-2xl p-4 sm:p-6 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {nightMode ? (
                  <Moon className="w-5 h-5 text-indigo-400 mr-2" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-500 mr-2" />
                )}
                <h3 className={`text-lg font-semibold ${nightMode ? 'text-white' : 'text-gray-800'}`}>夜晚阅读模式</h3>
              </div>
              <button
                onClick={toggleNightMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  nightMode ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    nightMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className={`text-sm mt-2 ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
              开启后在阅读时可获得更舒适的夜间阅读体验
            </p>
          </div>
        </section>

        {/* 应用信息 */}
        <section className="mt-8">
          <div className={`rounded-2xl p-6 shadow-sm border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h3 className={`text-lg font-semibold ${nightMode ? 'text-white' : 'text-gray-800'} mb-4`}>关于应用</h3>
            <div className="space-y-3">
              <div
                className={`flex justify-between items-center cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg ${nightMode ? 'hover:bg-gray-700' : ''}`}
                onClick={() => setShowVersionHistory(true)}
              >
                <span className={nightMode ? 'text-gray-400' : 'text-gray-600'}>版本</span>
                <div className="flex items-center gap-2">
                  <span className={nightMode ? 'text-white font-medium' : 'text-gray-800 font-medium'}>4.5</span>
                  <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">查看历史</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={nightMode ? 'text-gray-400' : 'text-gray-600'}>功能</span>
                <span className={`${nightMode ? 'text-white' : 'text-gray-800'} font-medium text-right`}>双语阅读 + 单词测试 + 官方课程</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={nightMode ? 'text-gray-400' : 'text-gray-600'}>软件所有人</span>
                <span className={nightMode ? 'text-white font-medium' : 'text-gray-800 font-medium'}>LZ</span>
              </div>
            </div>
          </div>
        </section>

        {/* 使用提示 */}
        <section className="mt-6">
          <div className={`rounded-2xl p-4 border ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-amber-50 border-amber-100'}`}>
            <h4 className={`font-medium mb-2 ${nightMode ? 'text-white' : 'text-amber-800'}`}>💡 使用提示</h4>
            <ul className={`text-sm space-y-1 ${nightMode ? 'text-gray-400' : 'text-amber-700'}`}>
              <li>• 点击单词可查看音标和释义</li>
              <li>• 点击喇叭图标可朗读文章</li>
              <li>• 单词测试时可设置自动播放读音</li>
              <li>• 在设置中可选择男声/女声</li>
            </ul>
          </div>
        </section>
      </main>

      <BottomNav />

      {/* 版本历史弹窗 */}
      {showVersionHistory && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className={`rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden ${nightMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className={`text-lg font-semibold ${nightMode ? 'text-white' : 'text-gray-800'}`}>版本历史</h3>
              <button
                onClick={() => setShowVersionHistory(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(80vh-60px)] p-4">
              <div className="space-y-4">
                {versionHistory.map((item, index) => (
                  <div key={item.version} className="relative">
                    {/* 连接线 */}
                    {index < versionHistory.length - 1 && (
                      <div className="absolute left-3 top-8 bottom-[-16px] w-0.5 bg-gray-200" />
                    )}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-indigo-600">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-800">v{item.version}</span>
                          <span className="text-xs text-gray-400">{item.date}</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {item.changes.map((change, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-indigo-400 mt-1">•</span>
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
