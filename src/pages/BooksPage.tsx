import React, { useState, useEffect } from 'react';
import { Download, Book, Trash2, Clock, User, FileText, HardDrive, Plus } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { getAvailableBooks, getDownloadBooks, addDownloadBook, deleteDownloadBook, BookDownload } from '../utils/storage';

const BooksPage: React.FC = () => {
  const [availableBooks, setAvailableBooks] = useState<BookDownload[]>([]);
  const [downloadedBooks, setDownloadedBooks] = useState<BookDownload[]>([]);
  const [showDownloaded, setShowDownloaded] = useState(false);

  useEffect(() => {
    setAvailableBooks(getAvailableBooks());
    setDownloadedBooks(getDownloadBooks());
  }, []);

  // 添加自定义书籍
  const handleAddCustomBook = () => {
    const title = prompt('请输入书籍标题:');
    if (!title) return;

    const author = prompt('请输入作者:') || '未知作者';
    const description = prompt('请输入书籍描述:') || '';
    const fileSize = prompt('请输入文件大小 (如 1.5 MB):') || '未知';

    const newBook = addDownloadBook({
      title,
      author,
      description,
      url: '',
      fileSize,
      category: '自定义',
    });

    setDownloadedBooks(getDownloadBooks());
    alert('书籍添加成功！');
  };

  // 下载书籍（模拟）
  const handleDownload = (book: BookDownload) => {
    // 实际应用中，这里会调用真实的下载接口
    // 目前只是添加到下载记录
    addDownloadBook({
      title: book.title,
      author: book.author,
      description: book.description,
      url: book.url,
      fileSize: book.fileSize,
      category: book.category,
    });
    setDownloadedBooks(getDownloadBooks());
    alert(`"${book.title}" 已添加到下载列表！`);
  };

  // 删除下载的书籍
  const handleDelete = (bookId: string) => {
    deleteDownloadBook(bookId);
    setDownloadedBooks(getDownloadBooks());
  };

  // 检查是否已下载
  const isDownloaded = (title: string) => {
    return downloadedBooks.some(b => b.title === title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      <Header title="英文书籍下载" />

      <main className="pt-20 pb-24 px-3 sm:px-4 max-w-2xl mx-auto">
        {/* 说明 */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-indigo-600">
            <Book className="w-5 h-5" />
            <span className="font-medium">英文原版书籍</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            精选经典英文原版书籍，支持双语对照阅读
          </p>
        </div>

        {/* 标签切换 */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setShowDownloaded(false)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              !showDownloaded
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-1" />
            可下载
          </button>
          <button
            onClick={() => setShowDownloaded(true)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              showDownloaded
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <HardDrive className="w-4 h-4 inline mr-1" />
            已下载 ({downloadedBooks.length})
          </button>
        </div>

        {/* 可下载书籍列表 */}
        {!showDownloaded && (
          <div className="space-y-3">
            {availableBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{book.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      <User className="w-3 h-3 inline mr-1" />
                      {book.author}
                    </p>
                  </div>
                  {book.category && (
                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full">
                      {book.category}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 mt-2">{book.description}</p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {book.fileSize}
                  </span>
                  {isDownloaded(book.title) ? (
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      已下载
                    </span>
                  ) : (
                    <button
                      onClick={() => handleDownload(book)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      下载
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 已下载书籍列表 */}
        {showDownloaded && (
          <div className="space-y-3">
            {/* 添加自定义书籍按钮 */}
            <button
              onClick={handleAddCustomBook}
              className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              添加自定义书籍
            </button>

            {downloadedBooks.length > 0 ? (
              downloadedBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{book.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        <User className="w-3 h-3 inline mr-1" />
                        {book.author}
                      </p>
                    </div>
                    {book.category && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                        {book.category}
                      </span>
                    )}
                  </div>

                  {book.description && (
                    <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                  )}

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {book.fileSize}
                    </span>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-red-500 text-sm rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      删除
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <HardDrive className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-400">暂无已下载的书籍</p>
              </div>
            )}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default BooksPage;
