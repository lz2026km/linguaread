import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Circle, ChevronRight, Volume2 } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { getCourseById } from '../data/courses';
import { getCourseOverallProgress, getCourseProgressList, getCourseProgress } from '../utils/storage';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courseId ? getCourseById(courseId) : undefined;
  const { speak } = useSpeechSynthesis();

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="课程详情" showBack />
        <div className="flex flex-col items-center justify-center pt-20">
          <div className="text-5xl mb-4">📚</div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">课程不存在</h3>
          <button
            onClick={() => navigate('/courses')}
            className="text-indigo-600"
          >
            返回课程列表
          </button>
        </div>
        <BottomNav />
      </div>
    );
  }

  const progress = getCourseOverallProgress(course.id, course.units.length);
  const progressList = getCourseProgressList();

  const handleUnitClick = (unitId: string) => {
    navigate(`/courses/${course.id}/units/${unitId}`);
  };

  const handlePreview = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    speak(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={course.titleZh} showBack />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 课程信息卡片 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className={`h-3 bg-gradient-to-r ${course.coverColor}`} />
          <div className="p-4">
            <h1 className="text-xl font-bold text-gray-800 mb-1">{course.titleZh}</h1>
            <p className="text-sm text-gray-500 mb-3">{course.title}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>{course.grade}</span>
              <span>·</span>
              <span>{course.units.length}个单元</span>
              <span>·</span>
              <span>{course.publisher}</span>
            </div>

            {/* 总体进度 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">学习进度</span>
                <span className="text-sm font-medium text-indigo-600">{progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${course.coverColor} rounded-full transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 单元列表 */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">课程单元</h2>
          <div className="space-y-3">
            {course.units.map((unit, index) => {
              const unitProgress = getCourseProgress(course.id, unit.id);
              const isCompleted = unitProgress?.completed || false;
              const hasStarted = unitProgress !== null;

              return (
                <div
                  key={unit.id}
                  onClick={() => handleUnitClick(unit.id)}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    {/* 完成状态图标 */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-100' : hasStarted ? 'bg-indigo-100' : 'bg-gray-100'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : hasStarted ? (
                        <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                    </div>

                    {/* 单元信息 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-800 truncate">{unit.titleZh}</h3>
                        {hasStarted && !isCompleted && (
                          <span className="text-xs px-1.5 py-0.5 bg-indigo-50 text-indigo-600 rounded">
                            在学
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 truncate">{unit.title}</p>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handlePreview(e, unit.contentEn.substring(0, 100))}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="预览朗读"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* 单元详情 */}
                  <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                    <span>{unit.wordCount} 词</span>
                    <span>Unit {index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CourseDetailPage;
