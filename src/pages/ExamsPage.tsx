import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Volume2, CheckCircle, XCircle, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { exams, ExamPaper, ExamQuestion } from '../data/exams';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

type ExamState = 'list' | 'playing' | 'result';

interface WrongAnswer {
  question: ExamQuestion;
  selectedIndex: number;
  correctIndex: number;
}

const ExamsPage: React.FC = () => {
  const { speak, isSpeaking } = useSpeechSynthesis();

  const [examState, setExamState] = useState<ExamState>('list');
  const [currentPaper, setCurrentPaper] = useState<ExamPaper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  const [expandedLevels, setExpandedLevels] = useState<string[]>(['elementary', 'junior', 'senior', 'university']);

  // Group exams by level
  const groupedExams = {
    elementary: exams.filter(e => e.level === 'elementary'),
    junior: exams.filter(e => e.level === 'junior'),
    senior: exams.filter(e => e.level === 'senior'),
    university: exams.filter(e => e.level === 'university'),
  };

  const levelNames: Record<string, string> = {
    elementary: '小学',
    junior: '初中',
    senior: '高中',
    university: '大学',
  };

  const toggleLevel = (level: string) => {
    setExpandedLevels(prev =>
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  const startExam = (paper: ExamPaper) => {
    setCurrentPaper(paper);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setWrongAnswers([]);
    setExamState('playing');

    // Auto play first question
    setTimeout(() => {
      if (paper.questions[0]) {
        speak(paper.questions[0].question);
      }
    }, 500);
  };

  const playQuestionAudio = () => {
    if (currentPaper && currentPaper.questions[currentIndex]) {
      speak(currentPaper.questions[currentIndex].question);
    }
  };

  const handleSelectAnswer = (index: number) => {
    if (isAnswered || !currentPaper) return;

    setSelectedIndex(index);
    setIsAnswered(true);

    const question = currentPaper.questions[currentIndex];
    if (index === question.correctAnswer) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongAnswers(prev => [...prev, {
        question,
        selectedIndex: index,
        correctIndex: question.correctAnswer,
      }]);
    }
  };

  const handleNext = () => {
    if (!currentPaper) return;

    if (currentIndex < currentPaper.questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedIndex(null);
      setIsAnswered(false);

      // Auto play next question
      setTimeout(() => {
        speak(currentPaper.questions[nextIndex].question);
      }, 300);
    } else {
      setExamState('result');
    }
  };

  const handleBackToList = () => {
    setExamState('list');
    setCurrentPaper(null);
  };

  // Render exam list
  if (examState === 'list') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="考试试卷" showBack={false} />

        <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
          {Object.entries(groupedExams).map(([level, papers]) => (
            <div key={level} className="mb-4">
              {/* Level Header */}
              <button
                onClick={() => toggleLevel(level)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-2"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-gray-800">{levelNames[level]}</span>
                  <span className="text-sm text-gray-500">({papers.length}套试卷)</span>
                </div>
                {expandedLevels.includes(level) ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* Papers List */}
              {expandedLevels.includes(level) && (
                <div className="space-y-2 pl-4">
                  {papers.map((paper) => (
                    <button
                      key={paper.id}
                      onClick={() => startExam(paper)}
                      className="w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-left hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                    >
                      <div className="font-medium text-gray-800">{paper.titleZh}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {paper.questions.length} 道题
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </main>

        <BottomNav />
      </div>
    );
  }

  // Render exam playing / result
  if (!currentPaper) return null;

  const currentQuestion = currentPaper.questions[currentIndex];

  // Playing state
  if (examState === 'playing') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          title={`${currentIndex + 1}/${currentPaper.questions.length}`}
          showBack
          onBack={handleBackToList}
        />

        <main className="pt-16 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / currentPaper.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="text-center mb-4">
              <div className="text-xl font-bold text-gray-800 mb-2">{currentQuestion.questionZh}</div>
              <div className="text-sm text-gray-500">{currentQuestion.question}</div>
            </div>

            {/* Audio button */}
            <div className="flex justify-center mb-4">
              <button
                onClick={playQuestionAudio}
                className={`p-3 rounded-full transition-all ${
                  isSpeaking
                    ? 'bg-indigo-100 text-indigo-600 animate-pulse'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                }`}
                title="播放朗读"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              const isCorrect = index === currentQuestion.correctAnswer;

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
                  onClick={() => handleSelectAnswer(index)}
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

          {/* Next button */}
          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all"
            >
              {currentIndex < currentPaper.questions.length - 1 ? '下一题' : '查看结果'}
            </button>
          )}
        </main>
      </div>
    );
  }

  // Result state
  if (examState === 'result') {
    const percentage = Math.round((correctCount / currentPaper.questions.length) * 100);

    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="考试结果" showBack onBack={handleBackToList} />

        <main className="pt-16 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
          {/* Score Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center mb-6">
            <div className={`text-5xl font-bold mb-2 ${
              percentage >= 80 ? 'text-green-500' :
              percentage >= 60 ? 'text-yellow-500' : 'text-red-500'
            }`}>
              {correctCount}/{currentPaper.questions.length}
            </div>
            <div className="text-gray-500">正确率 {percentage}%</div>

            {/* Feedback */}
            <div className="mt-4">
              {percentage >= 80 && (
                <>
                  <div className="text-2xl mb-2">🎉</div>
                  <div className="text-green-600 font-medium">太棒了！继续保持！</div>
                </>
              )}
              {percentage >= 60 && percentage < 80 && (
                <>
                  <div className="text-2xl mb-2">💪</div>
                  <div className="text-yellow-600 font-medium">不错哦！再接再厉！</div>
                </>
              )}
              {percentage < 60 && (
                <>
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-red-600 font-medium">需要加油！多练习！</div>
                </>
              )}
            </div>
          </div>

          {/* Wrong Answers */}
          {wrongAnswers.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">错题解析</h3>
              <div className="space-y-4">
                {wrongAnswers.map((wa, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="text-gray-800 font-medium mb-2">
                      {index + 1}. {wa.question.questionZh}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      题目：{wa.question.question}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-red-500">你的答案：{wa.question.options[wa.selectedIndex]}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-green-600">正确答案：{wa.question.options[wa.correctIndex]}</span>
                    </div>
                    <div className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">
                      解析：{wa.question.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => startExam(currentPaper)}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all"
            >
              再测一次
            </button>
            <button
              onClick={handleBackToList}
              className="w-full py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-all"
            >
              返回试卷列表
            </button>
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  return null;
};

export default ExamsPage;