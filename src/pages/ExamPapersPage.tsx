import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Eye, EyeOff, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { exams, ExamPaper, ExamQuestion } from '../data/exams';
import { LEVELS } from '../types';

type LevelFilter = 'elementary' | 'junior' | 'senior' | 'university';

// 选项题渲染
const ChoiceQuestion: React.FC<{ q: ExamQuestion; showAnswer: boolean; index: number }> = ({ q, showAnswer, index }) => {
  const letters = ['A', 'B', 'C', 'D'];
  return (
    <div className="mb-5 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <p className="font-medium text-gray-800 mb-3">
        <span className="text-indigo-600 font-bold">{index}.</span> {q.question}
        {q.questionZh && <span className="text-gray-500 text-sm ml-2">（{q.questionZh}）</span>}
      </p>
      <div className="space-y-2 ml-4">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctAnswer;
          const isSelected = showAnswer && isCorrect;
          return (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                isSelected
                  ? 'bg-green-50 border border-green-300 text-green-700 font-medium'
                  : 'bg-gray-50 border border-transparent text-gray-700'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                isSelected ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {letters[i]}
              </span>
              <span>{opt}</span>
              {isSelected && <CheckCircle className="w-4 h-4 ml-auto text-green-500 flex-shrink-0" />}
            </div>
          );
        })}
      </div>
      {showAnswer && (
        <div className="mt-3 flex items-start gap-2 p-3 bg-green-50 rounded-lg">
          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-green-700">
            <span className="font-medium">答案：{letters[q.correctAnswer]} </span>
            {q.explanation && <span className="text-green-600">— {q.explanation}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

// 填空题渲染
const FillBlankQuestion: React.FC<{ q: ExamQuestion; showAnswer: boolean; index: number }> = ({ q, showAnswer, index }) => {
  return (
    <div className="mb-5 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <p className="font-medium text-gray-800 mb-3">
        <span className="text-indigo-600 font-bold">{index}.</span> {q.question}
        {q.questionZh && <span className="text-gray-500 text-sm ml-2">（{q.questionZh}）</span>}
      </p>
      {showAnswer && (
        <div className="mt-3 flex items-start gap-2 p-3 bg-green-50 rounded-lg">
          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-green-700">
            <span className="font-medium">答案：{q.options[q.correctAnswer]} </span>
            {q.explanation && <span className="text-green-600">— {q.explanation}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

// 阅读理解渲染
const ReadingComprehension: React.FC<{
  passage: string;
  passageZh: string;
  questions: ExamQuestion[];
  showAnswer: boolean;
  startIndex: number;
}> = ({ passage, passageZh, questions, showAnswer, startIndex }) => {
  return (
    <div className="mb-6">
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-semibold text-indigo-700">阅读理解</span>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed mb-2">{passage}</p>
        {passageZh && <p className="text-gray-500 text-xs leading-relaxed">{passageZh}</p>}
      </div>
      {questions.map((q, i) => (
        <ChoiceQuestion key={q.id} q={q} showAnswer={showAnswer} index={startIndex + i} />
      ))}
    </div>
  );
};

const ExamPapersPage: React.FC = () => {
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('elementary');
  const [selectedPaper, setSelectedPaper] = useState<ExamPaper | null>(null);
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const filteredPapers = exams.filter(e => e.level === levelFilter);

  const levelInfo = LEVELS.find(l => l.id === levelFilter);
  const levelColor = levelInfo?.color || 'bg-blue-500';

  // 解析试卷中的阅读理解题目（以 passage 开头的题目）
  const parsePaperQuestions = (paper: ExamPaper) => {
    const result: Array<{ type: 'choice' | 'fillblank' | 'reading'; data: ExamQuestion[] | { passage: string; passageZh: string; questions: ExamQuestion[] } }> = [];
    const readingGroups: Map<string, { passage: string; passageZh: string; questions: ExamQuestion[] }> = new Map();

    for (const q of paper.questions) {
      if (q.id.startsWith('passage-')) {
        const groupKey = q.id.split('-')[1] + '-' + q.id.split('-')[2];
        if (!readingGroups.has(groupKey)) {
          readingGroups.set(groupKey, { passage: '', passageZh: '', questions: [] });
        }
        if (q.id.includes('-p')) {
          readingGroups.get(groupKey)!.passage = q.question;
          readingGroups.get(groupKey)!.passageZh = q.questionZh || '';
        } else {
          readingGroups.get(groupKey)!.questions.push(q);
        }
      } else if (q.id.startsWith('fill-')) {
        result.push({ type: 'fillblank', data: [q] });
      } else {
        result.push({ type: 'choice', data: [q] });
      }
    }

    // 将阅读理解加入结果
    for (const [, group] of readingGroups) {
      if (group.passage || group.questions.length > 0) {
        result.push({ type: 'reading', data: group });
      }
    }

    return result;
  };

  const handleBack = () => {
    if (selectedPaper) {
      setSelectedPaper(null);
      setShowAllAnswers(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack={!!selectedPaper} title={selectedPaper ? selectedPaper.titleZh : '考试试卷集'} onBack={handleBack} />

      <main className={`pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto ${selectedPaper ? '' : 'pt-20'}`}>
        {!selectedPaper ? (
          <>
            {/* 级别选择 */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {LEVELS.map(level => (
                <button
                  key={level.id}
                  onClick={() => setLevelFilter(level.id as LevelFilter)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    levelFilter === level.id
                      ? `${level.color} text-white shadow-md`
                      : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>

            {/* 试卷列表 */}
            <div className="space-y-3">
              {filteredPapers.map((paper, idx) => (
                <button
                  key={paper.id}
                  onClick={() => setSelectedPaper(paper)}
                  className="w-full text-left bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${levelColor} flex items-center justify-center text-white font-bold text-sm`}>
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{paper.titleZh}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{paper.levelName} · {paper.questions.length}题</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              ))}

              {filteredPapers.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-sm">该级别暂无试卷</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* 试卷头部 */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded-full text-white ${levelColor}`}>{selectedPaper.levelName}</span>
                <button
                  onClick={() => setShowAllAnswers(!showAllAnswers)}
                  className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-full transition-all ${
                    showAllAnswers ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {showAllAnswers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showAllAnswers ? '隐藏答案' : '显示答案'}
                </button>
              </div>
              <h1 className="text-xl font-bold text-gray-800">{selectedPaper.titleZh}</h1>
              <p className="text-sm text-gray-500 mt-1">{selectedPaper.title} · 共{selectedPaper.questions.length}题</p>
            </div>

            {/* 题目列表 */}
            <div>
              {(() => {
                const parsed = parsePaperQuestions(selectedPaper);
                let qIndex = 1;
                return parsed.map((item, i) => {
                  if (item.type === 'reading') {
                    const rd = item.data as { passage: string; passageZh: string; questions: ExamQuestion[] };
                    const questions = rd.questions;
                    const start = qIndex;
                    qIndex += questions.length;
                    return (
                      <ReadingComprehension
                        key={i}
                        passage={rd.passage}
                        passageZh={rd.passageZh}
                        questions={questions}
                        showAnswer={showAllAnswers}
                        startIndex={start}
                      />
                    );
                  } else if (item.type === 'fillblank') {
                    const q = (item.data as ExamQuestion[])[0];
                    return <FillBlankQuestion key={i} q={q} showAnswer={showAllAnswers} index={qIndex++} />;
                  } else {
                    const q = (item.data as ExamQuestion[])[0];
                    return <ChoiceQuestion key={i} q={q} showAnswer={showAllAnswers} index={qIndex++} />;
                  }
                });
              })()}
            </div>

            {/* 底部操作 */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowAllAnswers(!showAllAnswers)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  showAllAnswers
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-indigo-500 text-white hover:bg-indigo-600'
                }`}
              >
                {showAllAnswers ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                {showAllAnswers ? '收起答案' : '显示全部答案'}
              </button>
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default ExamPapersPage;
