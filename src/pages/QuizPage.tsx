import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle, XCircle, ArrowLeft, History, Volume2 } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { QuizQuestion, QuizHistory } from '../types';
import { getRandomQuestions } from '../data/quiz';
import { useApp } from '../context/AppContext';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { getVoiceSettings } from '../utils/storage';

type QuizState = 'setup' | 'playing' | 'result';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { quizHistory, addToQuizHistory } = useApp();
  const { speak, isSpeaking, voiceSettings } = useSpeechSynthesis();

  const [quizState, setQuizState] = useState<QuizState>('setup');
  const [questionCount, setQuestionCount] = useState(20);
  const [level, setLevel] = useState('all');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongWords, setWrongWords] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // 开始测试
  const startQuiz = () => {
    const quizQuestions = getRandomQuestions(questionCount, level);
    setQuestions(quizQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setWrongWords([]);
    setQuizState('playing');

    // 初始化第一题的打乱选项
    if (quizQuestions.length > 0) {
      const shuffled = [...quizQuestions[0].options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }

    // 自动播放第一个单词的读音
    const settings = getVoiceSettings();
    if (settings.autoPlayInQuiz && quizQuestions.length > 0) {
      setTimeout(() => {
        speak(quizQuestions[0].word);
      }, 500);
    }
  };

  // 播放单词读音
  const playWordAudio = () => {
    if (currentQuestion) {
      speak(currentQuestion.word);
    }
  };

  // 当题目变化时，重新打乱选项（只执行一次）
  useEffect(() => {
    if (questions.length > 0 && currentIndex < questions.length) {
      const currentQ = questions[currentIndex];
      const shuffled = [...currentQ.options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }
  }, [currentIndex, questions]);

  // 选择答案
  const handleSelectAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const currentQuestion = questions[currentIndex];
    if (answer === currentQuestion.correctAnswer) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongWords(prev => [...prev, currentQuestion.word]);
    }
  };

  // 下一题
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setIsAnswered(false);

      // 自动播放下一题的读音
      const settings = getVoiceSettings();
      if (settings.autoPlayInQuiz) {
        setTimeout(() => {
          speak(questions[nextIndex].word);
        }, 300);
      }
    } else {
      // 测试完成，保存历史
      const history: QuizHistory = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        totalQuestions: questions.length,
        correctAnswers: correctCount + (selectedAnswer === questions[currentIndex].correctAnswer ? 1 : 0),
        wrongWords: wrongWords,
      };
      addToQuizHistory(history);
      setQuizState('result');
    }
  };

  // 重新开始
  const handleRestart = () => {
    setQuizState('setup');
    setShowHistory(false);
  };

  const currentQuestion = questions[currentIndex];
  // 使用state中打乱后的选项，避免重新渲染时抖动

  // 渲染设置页面
  if (quizState === 'setup') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="单词测试" />

        <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
          {showHistory ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">测试历史</h2>
                <button
                  onClick={() => setShowHistory(false)}
                  className="text-indigo-600 hover:text-indigo-700 text-sm"
                >
                  返回
                </button>
              </div>

              {quizHistory.length > 0 ? (
                <div className="space-y-3">
                  {quizHistory.map((history) => (
                    <div key={history.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">
                          {new Date(history.date).toLocaleDateString('zh-CN')}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          history.correctAnswers / history.totalQuestions >= 0.8
                            ? 'bg-green-100 text-green-700'
                            : history.correctAnswers / history.totalQuestions >= 0.6
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {history.correctAnswers}/{history.totalQuestions}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(history.correctAnswers / history.totalQuestions) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">暂无测试记录</h3>
                  <p className="text-gray-500 text-sm">开始测试来查看您的历史记录</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">开始测试</h2>

                {/* 选择题数 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">选择题目数量</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[20, 50, 100].map((count) => (
                      <button
                        key={count}
                        onClick={() => setQuestionCount(count)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          questionCount === count
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl font-bold">{count}</div>
                        <div className="text-xs text-gray-500">道题</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 选择难度 */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">选择难度</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'all', name: '全部' },
                      { id: 'elementary', name: '小学' },
                      { id: 'junior', name: '初中' },
                      { id: 'senior', name: '高中' },
                    ].map((l) => (
                      <button
                        key={l.id}
                        onClick={() => setLevel(l.id)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          level === l.id
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {l.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 开始按钮 */}
                <button
                  onClick={startQuiz}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>开始测试</span>
                </button>
              </div>

              {/* 历史记录按钮 */}
              {quizHistory.length > 0 && (
                <button
                  onClick={() => setShowHistory(true)}
                  className="w-full py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                >
                  <History className="w-5 h-5" />
                  <span>查看历史记录</span>
                </button>
              )}
            </div>
          )}
        </main>

        <BottomNav />
      </div>
    );
  }

  // 渲染测试页面
  if (quizState === 'playing' && currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header showBack title={`${currentIndex + 1}/${questions.length}`} onBack={handleRestart} />

        <main className="pt-16 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
          {/* 进度条 */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 单词卡片 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">{currentQuestion.word}</div>
              <div className="text-lg text-gray-500">{currentQuestion.phonetic}</div>
            </div>
            {/* 音频播放按钮 */}
            <div className="flex justify-center mt-4">
              <button
                onClick={playWordAudio}
                className={`p-3 rounded-full transition-all ${
                  isSpeaking
                    ? 'bg-indigo-100 text-indigo-600 animate-pulse'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                }`}
                title="播放读音"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* 选项 */}
          <div className="space-y-3">
            {shuffledOptions.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;

              let buttonClass = 'w-full p-4 rounded-xl text-left font-medium transition-all border-2 ';
              if (!isAnswered) {
                buttonClass += isSelected
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-gray-200 hover:border-gray-300 bg-white';
              } else {
                if (isCorrect) {
                  buttonClass += 'border-green-500 bg-green-50 text-green-700';
                } else if (isSelected && !isCorrect) {
                  buttonClass += 'border-red-500 bg-red-50 text-red-700';
                } else {
                  buttonClass += 'border-gray-200 bg-gray-50 text-gray-400';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {isAnswered && isCorrect && (
                      <CheckCircle className="w-5 h-5 ml-auto text-green-500" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 ml-auto text-red-500" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* 下一题按钮 */}
          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all"
            >
              {currentIndex < questions.length - 1 ? '下一题' : '查看结果'}
            </button>
          )}
        </main>
      </div>
    );
  }

  // 渲染结果页面
  if (quizState === 'result') {
    const score = correctCount;
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="测试结果" />

        <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            {/* 分数 */}
            <div className="mb-6">
              <div className={`text-5xl font-bold mb-2 ${
                percentage >= 80 ? 'text-green-500' :
                percentage >= 60 ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {score}/{questions.length}
              </div>
              <div className="text-gray-500">正确率 {percentage}%</div>
            </div>

            {/* 评价 */}
            <div className="mb-8">
              {percentage >= 80 && (
                <div className="text-2xl mb-2">🎉</div>
              )}
              {percentage >= 80 && <div className="text-green-600 font-medium">太棒了！继续保持！</div>}
              {percentage >= 60 && percentage < 80 && (
                <>
                  <div className="text-2xl mb-2">💪</div>
                  <div className="text-yellow-600 font-medium">不错哦！再接再厉！</div>
                </>
              )}
              {percentage < 60 && (
                <>
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-red-600 font-medium">需要加油！多背单词！</div>
                </>
              )}
            </div>

            {/* 错词列表 */}
            {wrongWords.length > 0 && (
              <div className="mb-8 text-left">
                <h3 className="text-sm font-medium text-gray-700 mb-3">错误单词：</h3>
                <div className="flex flex-wrap gap-2">
                  {wrongWords.map((word, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 按钮 */}
            <div className="space-y-3">
              <button
                onClick={startQuiz}
                className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all"
              >
                再测一次
              </button>
              <button
                onClick={handleRestart}
                className="w-full py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                返回首页
              </button>
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  return null;
};

export default QuizPage;
