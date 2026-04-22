import React, { useState, useEffect } from 'react';
import { Gamepad2, Volume2, CheckCircle, XCircle, RefreshCw, Star, Zap, Target, Brain } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

interface GameQuestion {
  word: string;
  options: string[];
  correctAnswer: string;
}

// 简单单词游戏题库
const gameQuestions: GameQuestion[] = [
  { word: 'apple', options: ['苹果', '香蕉', '橙子', '葡萄'], correctAnswer: '苹果' },
  { word: 'book', options: ['书', '笔', '桌子', '椅子'], correctAnswer: '书' },
  { word: 'cat', options: ['狗', '猫', '鸟', '鱼'], correctAnswer: '猫' },
  { word: 'dog', options: ['狗', '猫', '老鼠', '兔子'], correctAnswer: '狗' },
  { word: 'hello', options: ['再见', '你好', '谢谢', '对不起'], correctAnswer: '你好' },
  { word: 'water', options: ['火', '水', '土', '空气'], correctAnswer: '水' },
  { word: 'sun', options: ['月亮', '星星', '太阳', '云'], correctAnswer: '太阳' },
  { word: 'moon', options: ['月亮', '太阳', '星星', '天空'], correctAnswer: '月亮' },
  { word: 'tree', options: ['花', '草', '树', '叶子'], correctAnswer: '树' },
  { word: 'flower', options: ['树', '草', '花', '果实'], correctAnswer: '花' },
  { word: 'red', options: ['红色', '蓝色', '绿色', '黄色'], correctAnswer: '红色' },
  { word: 'blue', options: ['红色', '蓝色', '绿色', '黄色'], correctAnswer: '蓝色' },
  { word: 'happy', options: ['悲伤', '生气', '开心', '害怕'], correctAnswer: '开心' },
  { word: 'run', options: ['走', '跑', '跳', '飞'], correctAnswer: '跑' },
  { word: 'eat', options: ['喝', '吃', '说', '听'], correctAnswer: '吃' },
];

// 学习方法数据
const learningMethods = [
  {
    id: 'spelling' as GameType,
    title: '单词拼写游戏',
    description: '通过拼写单词来学习新词汇',
    icon: 'Gamepad2',
    color: 'bg-blue-500',
  },
  {
    id: 'listening' as GameType,
    title: '听力训练',
    description: '听读并跟读单词和句子',
    icon: 'Volume2',
    color: 'bg-green-500',
  },
  {
    id: 'flashcard' as GameType,
    title: '记忆卡片',
    description: '使用闪卡记忆单词',
    icon: 'Star',
    color: 'bg-yellow-500',
  },
  {
    id: 'reaction' as GameType,
    title: '快速反应',
    description: '快速识别单词含义',
    icon: 'Zap',
    color: 'bg-purple-500',
  },
  {
    id: 'target' as GameType,
    title: '精准目标',
    description: '选择正确的翻译',
    icon: 'Target',
    color: 'bg-red-500',
  },
  {
    id: 'brain' as GameType,
    title: '思维训练',
    description: '综合英语思维训练',
    icon: 'Brain',
    color: 'bg-indigo-500',
  },
];

type GameType = 'spelling' | 'listening' | 'flashcard' | 'reaction' | 'target' | 'brain';

const WordGamePage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);

  // 打乱选项顺序
  const shuffleOptions = (options: string[]) => {
    return [...options].sort(() => Math.random() - 0.5);
  };

  // 开始游戏
  const startGame = (gameType: GameType) => {
    setSelectedGame(gameType);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setGameStarted(true);
    setStreak(0);
    setSelectedAnswer(null);
  };

  // 选择答案
  const handleAnswer = (answer: string) => {
    if (showResult) return;

    setSelectedAnswer(answer);
    const question = gameQuestions[currentQuestion];

    if (answer === question.correctAnswer) {
      setScore(score + 10);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }

    setShowResult(true);

    // 延迟进入下一题
    setTimeout(() => {
      if (currentQuestion < gameQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowResult(false);
        setSelectedAnswer(null);
      } else {
        // 游戏结束
        setGameStarted(false);
      }
    }, 1000);
  };

  // 重新开始
  const restartGame = () => {
    setGameStarted(false);
    setSelectedGame(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setStreak(0);
    setSelectedAnswer(null);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className="w-8 h-8" />;
      case 'Volume2': return <Volume2 className="w-8 h-8" />;
      case 'Star': return <Star className="w-8 h-8" />;
      case 'Zap': return <Zap className="w-8 h-8" />;
      case 'Target': return <Target className="w-8 h-8" />;
      case 'Brain': return <Brain className="w-8 h-8" />;
      default: return <Gamepad2 className="w-8 h-8" />;
    }
  };

  // 渲染游戏界面
  if (gameStarted && selectedGame) {
    const question = gameQuestions[currentQuestion];
    const shuffledOptions = shuffleOptions(question.options);

    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
        <Header title="单词小游戏" />

        <main className="pt-20 pb-24 px-4 max-w-2xl mx-auto">
          {/* 游戏进度 */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">题目 {currentQuestion + 1}/{gameQuestions.length}</span>
              <span className="text-sm text-gray-600">得分: {score}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / gameQuestions.length) * 100}%` }}
              />
            </div>
            {streak > 1 && (
              <div className="mt-2 text-center">
                <span className="text-sm text-orange-500 font-medium">🔥 连击: {streak}</span>
              </div>
            )}
          </div>

          {/* 单词显示 */}
          <div className="bg-white rounded-xl p-8 mb-4 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-indigo-600 mb-2">{question.word}</h2>
            <p className="text-gray-500">请选择正确的中文翻译</p>
          </div>

          {/* 选项 */}
          <div className="grid grid-cols-2 gap-3">
            {shuffledOptions.map((option, index) => {
              let buttonClass = 'bg-white hover:bg-indigo-50 border-gray-200';

              if (showResult) {
                if (option === question.correctAnswer) {
                  buttonClass = 'bg-green-100 border-green-500';
                } else if (option === selectedAnswer && option !== question.correctAnswer) {
                  buttonClass = 'bg-red-100 border-red-500';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={`p-4 rounded-xl border-2 transition-all text-lg font-medium ${buttonClass} ${
                    showResult ? 'cursor-default' : 'hover:border-indigo-500 hover:shadow-md'
                  }`}
                >
                  {option}
                  {showResult && option === question.correctAnswer && (
                    <CheckCircle className="inline-block ml-2 w-5 h-5 text-green-500" />
                  )}
                  {showResult && option === selectedAnswer && option !== question.correctAnswer && (
                    <XCircle className="inline-block ml-2 w-5 h-5 text-red-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 重新开始按钮 */}
          <button
            onClick={restartGame}
            className="w-full mt-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            重新开始
          </button>
        </main>

        <BottomNav />
      </div>
    );
  }

  // 游戏结果界面
  if (!gameStarted && selectedGame && score > 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
        <Header title="游戏结束" />

        <main className="pt-20 pb-24 px-4 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">游戏结束!</h2>
            <div className="text-5xl font-bold text-indigo-600 mb-2">{score}</div>
            <p className="text-gray-500 mb-6">最终得分</p>

            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{Math.round((score / (gameQuestions.length * 10)) * 100)}%</div>
                <div className="text-sm text-gray-500">正确率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">{streak}</div>
                <div className="text-sm text-gray-500">最高连击</div>
              </div>
            </div>

            <button
              onClick={() => startGame(selectedGame)}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              再玩一次
            </button>

            <button
              onClick={restartGame}
              className="w-full mt-3 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200"
            >
              返回游戏列表
            </button>
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  // 游戏选择界面
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header title="单词小游戏" />

      <main className="pt-20 pb-24 px-4 max-w-2xl mx-auto">
        {/* 说明 */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-indigo-600">
            <Gamepad2 className="w-5 h-5" />
            <span className="font-medium">趣味英语学习</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            选择你喜欢的小游戏，在快乐中学习英语
          </p>
        </div>

        {/* 游戏列表 */}
        <div className="grid grid-cols-2 gap-3">
          {learningMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => startGame(method.id)}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-indigo-300 hover:shadow-md transition-all text-left"
            >
              <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-white mb-3`}>
                {getIconComponent(method.icon)}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{method.title}</h3>
              <p className="text-xs text-gray-500">{method.description}</p>
            </button>
          ))}
        </div>

        {/* 学习技巧 */}
        <div className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
          <h3 className="font-semibold mb-2">💡 学习小贴士</h3>
          <ul className="text-sm space-y-1 opacity-90">
            <li>• 每天坚持学习10个新单词</li>
            <li>• 复习比学习新单词更重要</li>
            <li>• 使用联想记忆法效果更好</li>
            <li>• 把单词应用到实际句子中</li>
          </ul>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default WordGamePage;
