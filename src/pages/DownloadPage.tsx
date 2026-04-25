import React, { useState, useEffect } from 'react';
import { Download, Trash2, Wifi, WifiOff, CheckCircle, FileText, BookOpen, Clock, HardDrive } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { getDownloadBooks, deleteDownloadBook, BookDownload, getAvailableBooks } from '../utils/storage';

const DownloadPage: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [downloadedBooks, setDownloadedBooks] = useState<BookDownload[]>([]);
  const [availableBooks, setAvailableBooks] = useState<BookDownload[]>([]);
  const [activeTab, setActiveTab] = useState<'downloaded' | 'available'>('downloaded');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    // 监听网络状态
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 加载已下载的书籍
    setDownloadedBooks(getDownloadBooks());
    setAvailableBooks(getAvailableBooks());

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 处理下载
  const handleDownload = (book: BookDownload) => {
    if (!isOnline) {
      alert('当前处于离线状态，无法下载');
      return;
    }

    setDownloadingId(book.id);

    // 模拟下载过程
    setTimeout(() => {
      const newBook: BookDownload = {
        ...book,
        id: `downloaded_${Date.now()}`,
        downloadedAt: new Date().toISOString(),
      };

      const updated = [newBook, ...downloadedBooks];
      setDownloadedBooks(updated);

      // 保存到localStorage
      localStorage.setItem('linguaread_books', JSON.stringify(updated));

      setDownloadingId(null);
    }, 1500);
  };

  // 处理删除
  const handleDelete = (bookId: string) => {
    if (confirm('确定要删除这本书吗？')) {
      const updated = downloadedBooks.filter(b => b.id !== bookId);
      setDownloadedBooks(updated);
      deleteDownloadBook(bookId);
    }
  };

  // 计算总下载大小（模拟）
  const totalDownloadSize = downloadedBooks.reduce((acc, book) => {
    const size = parseFloat(book.fileSize || '0');
    return acc + size;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header showBack title="下载管理" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-3xl mx-auto">
        {/* 网络状态提示 */}
        <div className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl mb-6 ${
          isOnline
            ? 'bg-green-50 text-green-600'
            : 'bg-amber-50 text-amber-600'
        }`}>
          {isOnline ? (
            <>
              <Wifi className="w-4 h-4" />
              <span className="text-sm font-medium">在线模式 - 可下载内容</span>
            </>
          ) : (
            <>
              <WifiOff className="w-4 h-4" />
              <span className="text-sm font-medium">离线模式 - 可阅读已下载内容</span>
            </>
          )}
        </div>

        {/* 存储信息 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-indigo-500" />
              <span className="font-medium text-gray-800">本地存储</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                已下载 <span className="font-bold text-indigo-600">{downloadedBooks.length}</span> 本书
              </p>
              <p className="text-xs text-gray-400">
                共 {totalDownloadSize.toFixed(1)} MB
              </p>
            </div>
          </div>
        </div>

        {/* Tab切换 */}
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-100 mb-6">
          <button
            onClick={() => setActiveTab('downloaded')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'downloaded'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-500'
            }`}
          >
            已下载 ({downloadedBooks.length})
          </button>
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'available'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-500'
            }`}
          >
            可下载 ({availableBooks.length})
          </button>
        </div>

        {/* 已下载列表 */}
        {activeTab === 'downloaded' && (
          <div>
            {downloadedBooks.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">暂无已下载内容</p>
                <button
                  onClick={() => setActiveTab('available')}
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  去下载一些书吧
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {downloadedBooks.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3"
                  >
                    {/* 书籍图标 */}
                    <div className="w-12 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-indigo-500" />
                    </div>

                    {/* 书籍信息 */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 truncate">{book.title}</h3>
                      <p className="text-xs text-gray-400 mb-1">{book.author}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="bg-gray-100 px-2 py-0.5 rounded">{book.category}</span>
                        <span>{book.fileSize}</span>
                      </div>
                      {book.downloadedAt && (
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(book.downloadedAt).toLocaleDateString()} 下载
                        </p>
                      )}
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex flex-col gap-2">
                      <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(book.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 清除全部按钮 */}
            {downloadedBooks.length > 0 && (
              <button
                onClick={() => {
                  if (confirm('确定要删除所有已下载的书籍吗？')) {
                    downloadedBooks.forEach(b => deleteDownloadBook(b.id));
                    setDownloadedBooks([]);
                  }
                }}
                className="w-full mt-4 py-3 text-red-500 text-sm font-medium border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
              >
                清除全部已下载
              </button>
            )}
          </div>
        )}

        {/* 可下载列表 */}
        {activeTab === 'available' && (
          <div className="space-y-3">
            {availableBooks.map((book) => {
              const isDownloaded = downloadedBooks.some(d => d.title === book.title);
              const isDownloading = downloadingId === book.id;

              return (
                <div
                  key={book.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3"
                >
                  {/* 书籍图标 */}
                  <div className="w-12 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-amber-500" />
                  </div>

                  {/* 书籍信息 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">{book.title}</h3>
                    <p className="text-xs text-gray-400 mb-1">{book.author}</p>
                    <p className="text-xs text-gray-500 mb-2">{book.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-500">
                        {book.category}
                      </span>
                      <span className="text-xs text-gray-400">{book.fileSize}</span>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex-shrink-0">
                    {isDownloaded ? (
                      <div className="flex items-center gap-1 text-green-500">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs">已下载</span>
                      </div>
                    ) : isDownloading ? (
                      <div className="flex items-center gap-1 text-indigo-500">
                        <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs">下载中</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDownload(book)}
                        disabled={!isOnline}
                        className={`p-2 rounded-lg transition-colors ${
                          isOnline
                            ? 'text-indigo-600 hover:bg-indigo-50'
                            : 'text-gray-300 cursor-not-allowed'
                        }`}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 离线阅读说明 */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
          <h4 className="font-medium text-blue-800 mb-2">💡 离线阅读说明</h4>
          <ul className="text-sm text-blue-600 space-y-1">
            <li>• 下载的书籍会在本地存储，随时可阅读</li>
            <li>• 下载完成后即使离线也能继续阅读</li>
            <li>• 删除下载内容可以释放存储空间</li>
            <li>• 建议在WiFi环境下下载大文件</li>
          </ul>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default DownloadPage;