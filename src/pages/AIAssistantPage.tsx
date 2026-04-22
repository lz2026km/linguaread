import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, BookOpen, Lightbulb, RefreshCw, Copy, Check, X, Volume2, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const aiPrompts = [
  { id: 1, text: '解释这个语法', icon: BookOpen },
  { id: 2, text: '如何提高口语', icon: Lightbulb },
  { id: 3, text: '推荐学习方法', icon: Sparkles },
  { id: 4, text: '解释这个短语', icon: BookOpen },
];

// 模拟AI响应（实际项目中需要接入真实AI API）
const generateAIResponse = (userInput: string): string => {
  const lowerInput = userInput.toLowerCase();

  if (lowerInput.includes('语法') || lowerInput.includes('grammar')) {
    return `当然可以！请告诉我您想了解的语法问题。\n\n常见的英语语法包括：\n\n1. **时态** - 描述动作发生的时间\n   - 一般现在时：I eat breakfast every morning.\n   - 现在进行时：I am eating breakfast now.\n   - 一般过去时：I ate breakfast yesterday.\n\n2. **从句** - 包含主语和谓语的句子\n   - 名词性从句：What you said is interesting.\n   - 定语从句：The book that I bought is interesting.\n   - 状语从句：I will call you when I arrive.\n\n3. **虚拟语气** - 表示假设或愿望\n   - If I were you, I would go. (与现在事实相反)\n   - If I had studied harder, I would have passed. (与过去事实相反)\n\n请具体说明您想了解哪个语法点？`;
  }

  if (lowerInput.includes('口语') || lowerInput.includes('speak')) {
    return `提高英语口语的有效方法：\n\n🎯 **每天练习**\n- 每天至少说英语 30 分钟\n- 可以跟读英语视频或音频\n\n🗣️ **影子跟读法 (Shadowing)**\n- 播放英语材料，延迟 1-2 秒后跟读\n- 注意模仿语调、停顿和发音\n\n💬 **语言交换**\n- 使用 HelloTalk、Tandem 等 APP 找语言伙伴\n- 每周至少进行 2-3 次实际对话练习\n\n📺 **沉浸式学习**\n- 看美剧/英剧时跟读台词\n- 尝试用英语描述日常生活\n\n🎤 **录音自评**\n- 录下自己的发音，对比原声\n- 找出需要改进的地方\n\n坚持就是胜利！加油！ 💪`;
  }

  if (lowerInput.includes('学习') || lowerInput.includes('方法') || lowerInput.includes('method')) {
    return `高效的英语学习方法推荐：\n\n📚 **输入为主**\n- 每天阅读 30 分钟英文文章\n- 看 YouTube 视频学习地道表达\n\n✍️ **输出为辅**\n- 每天用英语写日记（哪怕只有 3 句）\n- 尝试翻译简单句子\n\n🎯 **针对性训练**\n- 听力：每天 listen to English podcasts\n- 口语：跟读 + 语言交换\n- 阅读：分级阅读材料\n- 写作：仿写优秀范文\n\n⏰ **时间管理**\n- 碎片时间背单词\n- 固定时间系统学习\n\n记住：坚持 > 方法！`;
  }

  if (lowerInput.includes('单词') || lowerInput.includes('vocabulary') || lowerInput.includes('背单词')) {
    return `高效背单词方法：\n\n📖 **词根词缀法**\n- 学会常见词根：-ject(扔), -spect(看), -fer(携带)\n- 认识前缀：re-(再), un-(不), dis-(否定)\n- 了解后缀：-tion(名词), -ment(名词), -able(形容词)\n\n🔄 **间隔重复 (Spaced Repetition)**\n- 使用 Anki、墨墨背单词等 APP\n- 遵循遗忘曲线复习\n\n📝 **语境记忆**\n- 在句子中记单词\n- 不要单独背单词表\n\n👂 **多感官记忆**\n- 边读边写边听\n- 调动视觉、听觉、动觉\n\n💡 **使用频率**\n- 优先学习高频词\n- 在实际使用中巩固`;
  }

  if (lowerInput.includes('听力') || lowerInput.includes('listen')) {
    return `提升英语听力的训练方法：\n\n🎧 **循序渐进**\n- Level 1: VOA Special English\n- Level 2: VOA Standard English\n- Level 3: BBC News, NPR\n- Level 4: Native podcasts, Movies\n\n📌 **精听步骤**\n1. 先听整体理解大意\n2. 再听逐句写下内容\n3. 对照原文查漏补缺\n4. 跟读直到流利\n\n🖊️ **听写练习**\n- 选择 1-2 分钟的材料\n- 听写全文，对照修改\n- 重复直到 100% 正确\n\n📺 **泛听材料**\n- 播客：TED Talks, Planet Money\n- 剧集：Friends, Modern Family\n- YouTube: English with Lucy\n\n坚持每天 30 分钟，效果显著！`;
  }

  // 默认回复
  return `感谢您的提问！我是老刘爱英语的AI助手，可以帮助您：\n\n📖 **语法解答** - 解释英语语法规则\n\n💬 **口语指导** - 提供口语提升建议\n\n📚 **学习规划** - 制定学习计划\n\n📝 **词汇讲解** - 词根词缀记忆法\n\n🎧 **听力训练** - 听力技巧分享\n\n请用中文或英文提问，我会尽力为您解答！\n\n您也可以点击下方的快捷提示获取常见问题答案。`;
};

const AIAssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `你好！我是老刘爱英语AI助手 🤖\n\n我可以帮助你：\n\n📖 解答英语语法问题\n💬 提供口语提升建议\n📚 分享高效学习方法\n📝 讲解词汇记忆技巧\n🎧 指导听力训练方法\n\n有什么英语学习问题都可以问我！`,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到最新消息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // 模拟AI响应延迟
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputText.trim()),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handlePromptClick = (promptText: string) => {
    setInputText(promptText);
    inputRef.current?.focus();
  };

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // 提取纯文本用于语音播放
      const cleanText = text.replace(/[*#📖💬🎯🗣️💡🌟⏰🎤📚✍️🔄👂📝💪👍🎧🖊️]+/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header />

      <main className="pt-16 pb-20 px-3 sm:px-4 max-w-2xl mx-auto">
        {/* AI助手标题 */}
        <div className="text-center py-4 sm:py-6">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mb-3 shadow-lg">
            <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">AI 英语助手</h1>
          <p className="text-gray-500 text-sm mt-1">智能问答，语法解析，学习指导</p>
        </div>

        {/* 快捷提示按钮 */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {aiPrompts.map(prompt => (
            <button
              key={prompt.id}
              onClick={() => handlePromptClick(prompt.text)}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full text-xs sm:text-sm text-gray-600 shadow-sm border border-gray-100 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              <prompt.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{prompt.text}</span>
            </button>
          ))}
        </div>

        {/* 消息列表 */}
        <div className="space-y-4 mb-4 max-h-[50vh] overflow-y-auto">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-br-md'
                    : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.role === 'assistant' && (
                    <Bot className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  )}
                  {message.role === 'user' && (
                    <User className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base whitespace-pre-wrap break-words leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className={`flex items-center gap-2 mt-2 pt-2 border-t ${
                  message.role === 'user' ? 'border-white/20' : 'border-gray-100'
                }`}>
                  {message.role === 'assistant' && (
                    <>
                      <button
                        onClick={() => speakText(message.content)}
                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-500 transition-colors"
                        title="朗读"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCopy(message.content, message.id)}
                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-500 transition-colors"
                        title="复制"
                      >
                        {copiedId === message.id ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </>
                  )}
                  <span className={`text-xs ${
                    message.role === 'user' ? 'text-white/60' : 'text-gray-400'
                  } ml-auto`}>
                    {message.timestamp.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* 加载中提示 */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-bl-md shadow-sm border border-gray-100 px-4 py-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span className="text-sm">AI 正在思考...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 输入区域 */}
        <div className="fixed bottom-16 sm:bottom-20 left-0 right-0 bg-white border-t border-gray-200 px-3 sm:px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入您的英语学习问题..."
                className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-2xl resize-none text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isLoading}
              className={`p-3 rounded-full transition-all ${
                inputText.trim() && !isLoading
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default AIAssistantPage;
