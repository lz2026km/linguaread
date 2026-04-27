import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticleReaderPage from './pages/ArticleReaderPage';
import VocabularyPage from './pages/VocabularyPage';
import NewWordsPage from './pages/NewWordsPage';
import GrammarPage from './pages/GrammarPage';
import QuizPage from './pages/QuizPage';
import SettingsPage from './pages/SettingsPage';
import CoursesListPage from './pages/CoursesListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CourseReaderPage from './pages/CourseReaderPage';
import GuestBookPage from './pages/GuestBookPage';
import BooksPage from './pages/BooksPage';
import WordGamePage from './pages/WordGamePage';
import LearningMethodsPage from './pages/LearningMethodsPage';
import AIAssistantPage from './pages/AIAssistantPage';
import VideoLearningPage from './pages/VideoLearningPage';
import ExamPapersPage from './pages/ExamPapersPage';
import LeaderboardPage from './pages/LeaderboardPage';
import StatsPage from './pages/StatsPage';
import AchievementPage from './pages/AchievementPage';
import WrongBookPage from './pages/WrongBookPage';
import ReviewPage from './pages/ReviewPage';
import DownloadPage from './pages/DownloadPage';
import ReportPage from './pages/ReportPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <AppProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:id" element={<ArticleReaderPage />} />
            <Route path="/grammar" element={<GrammarPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/new-words" element={<NewWordsPage />} />
            <Route path="/vocabulary" element={<VocabularyPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/courses" element={<CoursesListPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/courses/:courseId/units/:unitId" element={<CourseReaderPage />} />
            <Route path="/guestbook" element={<GuestBookPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/word-game" element={<WordGamePage />} />
            <Route path="/learning-methods" element={<LearningMethodsPage />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
            <Route path="/video-learning" element={<VideoLearningPage />} />
            <Route path="/exam-papers" element={<ExamPapersPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/achievements" element={<AchievementPage />} />
            <Route path="/wrong-answers" element={<WrongBookPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </Layout>
      </AppProvider>
    </Router>
  );
}

export default App;
