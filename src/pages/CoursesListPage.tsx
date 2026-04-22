import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { courses, getCourseById } from '../data/courses';
import { LEVELS } from '../types';
import { getCourseOverallProgress, getLastStudiedUnit, getCourseProgressList } from '../utils/storage';

const CoursesListPage: React.FC = () => {
  const navigate = useNavigate();

  const getLevelInfo = (level: string) => {
    return LEVELS.find(l => l.id === level);
  };

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="官方课程" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 课程简介 */}
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
          <h2 className="text-lg font-semibold mb-2">英语官方课程</h2>
          <p className="text-sm text-white/80">
            涵盖小学、初中、高中、大学各年级官方英语教材，同步课本内容，助你系统学习英语。
          </p>
        </div>

        {/* 课程列表 */}
        <div className="space-y-4">
          {courses.map((course) => {
            const levelInfo = getLevelInfo(course.level);
            const progress = getCourseOverallProgress(course.id, course.units.length);
            const lastUnitId = getLastStudiedUnit(course.id);

            return (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${course.coverColor}`} />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                          {levelInfo?.nameZh}
                        </span>
                        <span className="text-xs text-gray-400">{course.grade}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{course.titleZh}</h3>
                      <p className="text-sm text-gray-500">{course.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  {/* 进度条 */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <BookOpen className="w-3 h-3" />
                        <span>{course.units.length}个单元</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{progress}% 完成</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${course.coverColor} rounded-full transition-all duration-300`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* 最近学习 */}
                  {lastUnitId && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        最近学习：{course.units.find(u => u.id === lastUnitId)?.titleZh || '继续学习'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CoursesListPage;
