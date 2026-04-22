import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, Eye, EyeOff, Type, AlignLeft, StickyNote, X, Edit2, Trash2, Plus, Highlighter, MessageSquare, Palette } from 'lucide-react';
import { Article } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { getNotesByArticle, addNote, updateNote, deleteNote, Note, HighlightColor, HighlightType } from '../utils/storage';

// 可选的英文字体
const fontFamilies = [
  { id: 'serif', name: '衬线体', class: 'font-serif' },
  { id: 'sans', name: '无衬线', class: 'font-sans' },
  { id: 'mono', name: '等宽体', class: 'font-mono' },
];

// 高亮颜色配置
const highlightColors: { color: HighlightColor; name: string; bgClass: string; style: React.CSSProperties }[] = [
  { color: 'yellow', name: '黄色', bgClass: 'bg-yellow-200', style: { backgroundColor: '#fef08a' } },
  { color: 'green', name: '绿色', bgClass: 'bg-green-200', style: { backgroundColor: '#bbf7d0' } },
  { color: 'blue', name: '蓝色', bgClass: 'bg-blue-200', style: { backgroundColor: '#bfdbfe' } },
  { color: 'pink', name: '粉色', bgClass: 'bg-pink-200', style: { backgroundColor: '#fbcfe8' } },
  { color: 'orange', name: '橙色', bgClass: 'bg-orange-200', style: { backgroundColor: '#fed7aa' } },
];

// 阅读背景主题
interface BackgroundTheme {
  id: string;
  name: string;
  bgClass: string;
  textClass: string;
}

const backgroundThemes: BackgroundTheme[] = [
  { id: 'default', name: '默认白', bgClass: 'bg-white', textClass: 'text-gray-800' },
  { id: 'warm', name: '温暖米', bgClass: 'bg-amber-50', textClass: 'text-amber-900' },
  { id: 'cool', name: '清爽蓝', bgClass: 'bg-blue-50', textClass: 'text-blue-900' },
  { id: 'nature', name: '自然绿', bgClass: 'bg-green-50', textClass: 'text-green-900' },
  { id: 'elegant', name: '优雅紫', bgClass: 'bg-purple-50', textClass: 'text-purple-900' },
  { id: 'luxury', name: '华丽金', bgClass: 'bg-yellow-50', textClass: 'text-yellow-900' },
  { id: 'dark', name: '夜间模式', bgClass: 'bg-gray-900', textClass: 'text-gray-100' },
  { id: 'sepia', name: '护眼褐', bgClass: 'bg-[#f5ecd7]', textClass: 'text-[#5c4b37]' },
];

interface ReaderProps {
  article: Article;
  onWordClick: (word: string, sentence: string) => void;
}

const Reader: React.FC<ReaderProps> = ({ article, onWordClick }) => {
  const [showTranslation, setShowTranslation] = useState(true);
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState(() => {
    const saved = localStorage.getItem('linguaread_font_family');
    return saved || 'serif';
  });
  const [nightMode, setNightMode] = useState(() => {
    const saved = localStorage.getItem('linguaread_night_mode');
    return saved ? JSON.parse(saved) : false;
  });
  const [backgroundTheme, setBackgroundTheme] = useState(() => {
    const saved = localStorage.getItem('linguaread_background_theme');
    return saved || 'default';
  });
  const [showBgMenu, setShowBgMenu] = useState(false);
  const { speak, isSpeaking, stop } = useSpeechSynthesis();

  // 笔记相关状态
  const [notes, setNotes] = useState<Note[]>([]);
  const [showNotesPanel, setShowNotesPanel] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [noteContent, setNoteContent] = useState('');
  const [selectedParagraph, setSelectedParagraph] = useState<number | null>(null);

  // 高亮相关状态
  const [showHighlightMenu, setShowHighlightMenu] = useState(false);
  const [highlightMenuPosition, setHighlightMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [selectedColor, setSelectedColor] = useState<HighlightColor>('yellow');
  const [highlightComment, setHighlightComment] = useState('');
  const [highlightTarget, setHighlightTarget] = useState<{ paragraphIndex: number; type: HighlightType } | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const bgMenuRef = useRef<HTMLDivElement>(null);

  // 加载笔记
  useEffect(() => {
    setNotes(getNotesByArticle(article.id));
  }, [article.id]);

  // 监听夜晚模式变化
  useEffect(() => {
    const handleNightModeChange = (e: CustomEvent) => {
      setNightMode(e.detail);
    };
    window.addEventListener('nightModeChange', handleNightModeChange as EventListener);
    return () => {
      window.removeEventListener('nightModeChange', handleNightModeChange as EventListener);
    };
  }, []);

  // 保存字体设置
  useEffect(() => {
    localStorage.setItem('linguaread_font_family', fontFamily);
  }, [fontFamily]);

  // 保存背景主题设置
  useEffect(() => {
    localStorage.setItem('linguaread_background_theme', backgroundTheme);
  }, [backgroundTheme]);

  // 点击外部关闭背景菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bgMenuRef.current && !bgMenuRef.current.contains(event.target as Node)) {
        setShowBgMenu(false);
      }
    };

    if (showBgMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showBgMenu]);

  // 获取当前背景主题
  const currentBgTheme = backgroundThemes.find(t => t.id === backgroundTheme) || backgroundThemes[0];

  // 获取当前字体类名
  const currentFontClass = fontFamilies.find(f => f.id === fontFamily)?.class || 'font-serif';

  // 监听文本选择
  useEffect(() => {
    const handleTextSelect = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim() && selection.toString().trim().length > 0) {
        const text = selection.toString().trim();

        // 判断选中的文本类型
        let highlightType: HighlightType = 'sentence';
        if (text.split(/\s+/).length === 1) {
          highlightType = 'word';
        } else if (text.length > 200) {
          highlightType = 'paragraph';
        }

        setSelectedText(text);
        setHighlightTarget({
          paragraphIndex: 0, // 目前默认是第一段
          type: highlightType,
        });

        // 获取选区的位置
        try {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          setHighlightMenuPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
          });
          setShowHighlightMenu(true);
        } catch (e) {
          // 如果获取位置失败，使用默认位置
          setHighlightMenuPosition({
            x: window.innerWidth / 2,
            y: 100,
          });
          setShowHighlightMenu(true);
        }
      } else {
        setShowHighlightMenu(false);
      }
    };

    document.addEventListener('selectionchange', handleTextSelect);
    return () => {
      document.removeEventListener('selectionchange', handleTextSelect);
    };
  }, []);

  // 获取段落的纯文本（用于匹配高亮位置）
  const getParagraphText = (paragraphIndex: number): string => {
    const paragraphs = article.contentEn.split('\n\n');
    return paragraphs[paragraphIndex] || '';
  };

  // 检查是否有高亮
  const hasHighlight = (paragraphIndex: number, text: string) => {
    return notes.some(
      n => n.paragraphIndex === paragraphIndex && n.isHighlight && n.highlightText === text
    );
  };

  // 获取高亮颜色样式
  const getHighlightStyle = (color?: HighlightColor): React.CSSProperties => {
    if (!color) return {};
    const colorConfig = highlightColors.find(c => c.color === color);
    return colorConfig?.style || {};
  };

  // 添加高亮笔记
  const handleAddHighlight = () => {
    if (!selectedText || !highlightTarget) return;

    addNote({
      articleId: article.id,
      paragraphIndex: highlightTarget.paragraphIndex,
      content: highlightComment || `高亮: ${selectedText.substring(0, 50)}...`,
      isHighlight: true,
      highlightText: selectedText,
      highlightColor: selectedColor,
      highlightComment: highlightComment,
      highlightType: highlightTarget.type,
    });

    setNotes(getNotesByArticle(article.id));
    setShowHighlightMenu(false);
    setSelectedText('');
    setHighlightComment('');
    setShowNotesPanel(true);

    // 清除选择
    window.getSelection()?.removeAllRanges();
  };

  // 将文本分割成单词并渲染
  const renderInteractiveText = (text: string, isEnglish: boolean, paragraphIndex: number) => {
    if (!isEnglish) {
      // 中文文本不设置交互
      return (
        <p className={`leading-loose mb-6 ${nightMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {text}
        </p>
      );
    }

    // 检查这一段是否有高亮笔记
    const paragraphHighlights = notes.filter(
      n => n.paragraphIndex === paragraphIndex && n.isHighlight && n.highlightText
    );

    // 英文文本按单词分割
    const words = text.split(/(\s+)/);

    return (
      <p className={`leading-loose mb-6 ${currentFontClass}`} style={{ fontSize: `${fontSize}px` }}>
        {words.map((word, index) => {
          // 判断是否是纯单词（排除空格和标点）
          const isWord = /^[a-zA-Z]+$/.test(word);

          // 检查这个单词是否在高亮文本中
          const isHighlighted = paragraphHighlights.some(
            h => h.highlightText && text.includes(h.highlightText)
          );

          if (!isWord) {
            return <span key={index}>{word}</span>;
          }

          return (
            <span
              key={index}
              onClick={() => {
                // 找到该单词所在的完整句子
                const sentences = text.split(/[.!?]+/);
                let sentence = '';
                let currentPos = 0;
                for (const sent of sentences) {
                  const sentWithSpace = sent + '.';
                  if (currentPos + sentWithSpace.length > text.indexOf(word, currentPos)) {
                    sentence = sent.trim();
                    break;
                  }
                  currentPos += sentWithSpace.length;
                }
                onWordClick(word, sentence);
              }}
              className={`cursor-pointer px-0.5 rounded transition-colors inline active:bg-amber-300 touch-manipulation ${
                nightMode
                  ? 'hover:bg-gray-700 hover:text-yellow-300'
                  : 'hover:bg-amber-200 hover:text-indigo-800'
              }`}
              style={{ color: nightMode ? '#e5e7eb' : undefined }}
            >
              {word}
            </span>
          );
        })}
      </p>
    );
  };

  // 渲染带高亮的段落
  const renderHighlightedContent = (text: string, paragraphIndex: number) => {
    const paragraphHighlights = notes.filter(
      n => n.paragraphIndex === paragraphIndex && n.isHighlight && n.highlightText
    );

    if (paragraphHighlights.length === 0) {
      return renderInteractiveText(text, true, paragraphIndex);
    }

    // 按位置排序高亮
    const sortedHighlights = [...paragraphHighlights].sort((a, b) => {
      const posA = text.indexOf(a.highlightText || '');
      const posB = text.indexOf(b.highlightText || '');
      return posA - posB;
    });

    const result: React.ReactNode[] = [];
    let lastEnd = 0;

    sortedHighlights.forEach((highlight, idx) => {
      const highlightText = highlight.highlightText || '';
      const startPos = text.indexOf(highlightText, lastEnd);

      if (startPos === -1) return;

      // 添加高亮前的文本
      if (startPos > lastEnd) {
        const beforeText = text.slice(lastEnd, startPos);
        result.push(
          <span key={`text-${idx}`} className={currentFontClass} style={{ fontSize: `${fontSize}px` }}>
            {beforeText.split(/(\s+)/).map((word, i) => {
              const isWord = /^[a-zA-Z]+$/.test(word);
              if (!isWord) return <span key={i}>{word}</span>;
              return (
                <span
                  key={i}
                  onClick={() => {
                    const sentences = text.split(/[.!?]+/);
                    let sentence = '';
                    let currentPos = 0;
                    for (const sent of sentences) {
                      const sentWithSpace = sent + '.';
                      if (currentPos + sentWithSpace.length > text.indexOf(word, currentPos)) {
                        sentence = sent.trim();
                        break;
                      }
                      currentPos += sentWithSpace.length;
                    }
                    onWordClick(word, sentence);
                  }}
                  className={`cursor-pointer px-0.5 rounded transition-colors inline active:bg-amber-300 ${
                    nightMode
                      ? 'hover:bg-gray-700 hover:text-yellow-300'
                      : 'hover:bg-amber-200 hover:text-indigo-800'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </span>
        );
      }

      // 添加高亮文本
      result.push(
        <span
          key={`highlight-${idx}`}
          className={`px-0.5 rounded cursor-pointer transition-colors ${
            nightMode ? 'text-gray-800' : ''
          }`}
          style={getHighlightStyle(highlight.highlightColor)}
          title={highlight.highlightComment || '点击查看笔记'}
          onClick={() => {
            // 点击高亮可以查看或编辑
            setEditingNote(highlight);
            setNoteContent(highlight.content);
            setSelectedParagraph(highlight.paragraphIndex);
            setShowNotesPanel(true);
          }}
        >
          {highlightText}
        </span>
      );

      lastEnd = startPos + highlightText.length;
    });

    // 添加剩余文本
    if (lastEnd < text.length) {
      const remainingText = text.slice(lastEnd);
      result.push(
        <span key="text-end" className={currentFontClass} style={{ fontSize: `${fontSize}px` }}>
          {remainingText.split(/(\s+)/).map((word, i) => {
            const isWord = /^[a-zA-Z]+$/.test(word);
            if (!isWord) return <span key={i}>{word}</span>;
            return (
              <span
                key={i}
                onClick={() => {
                  const sentences = text.split(/[.!?]+/);
                  let sentence = '';
                  let currentPos = 0;
                  for (const sent of sentences) {
                    const sentWithSpace = sent + '.';
                    if (currentPos + sentWithSpace.length > text.indexOf(word, currentPos)) {
                      sentence = sent.trim();
                      break;
                    }
                    currentPos += sentWithSpace.length;
                  }
                  onWordClick(word, sentence);
                }}
                className={`cursor-pointer px-0.5 rounded transition-colors inline active:bg-amber-300 ${
                  nightMode
                    ? 'hover:bg-gray-700 hover:text-yellow-300'
                    : 'hover:bg-amber-200 hover:text-indigo-800'
                }`}
              >
                {word}
              </span>
            );
          })}
        </span>
      );
    }

    return <>{result}</>;
  };

  // 播放发音
  const playAudio = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(article.contentEn);
    }
  };

  // 字体大小增加
  const increaseFontSize = () => {
    if (fontSize < 28) setFontSize(fontSize + 2);
  };

  // 字体大小减少
  const decreaseFontSize = () => {
    if (fontSize > 14) setFontSize(fontSize - 2);
  };

  // 切换字体
  const cycleFont = () => {
    const currentIndex = fontFamilies.findIndex(f => f.id === fontFamily);
    const nextIndex = (currentIndex + 1) % fontFamilies.length;
    setFontFamily(fontFamilies[nextIndex].id);
  };

  const currentFontName = fontFamilies.find(f => f.id === fontFamily)?.name || '衬线体';

  // 检查段落是否有笔记
  const hasNote = (paragraphIndex: number) => {
    return notes.some(n => n.paragraphIndex === paragraphIndex);
  };

  // 获取段落的笔记
  const getNoteForParagraph = (paragraphIndex: number) => {
    return notes.find(n => n.paragraphIndex === paragraphIndex);
  };

  // 添加笔记
  const handleAddNote = (paragraphIndex: number) => {
    setSelectedParagraph(paragraphIndex);
    setEditingNote(null);
    setNoteContent('');
  };

  // 编辑笔记
  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setSelectedParagraph(note.paragraphIndex);
    setNoteContent(note.content);
    if (note.highlightColor) {
      setSelectedColor(note.highlightColor);
    }
    if (note.highlightComment) {
      setHighlightComment(note.highlightComment);
    }
  };

  // 保存笔记
  const handleSaveNote = () => {
    if (!noteContent.trim() || selectedParagraph === null) return;

    if (editingNote) {
      updateNote(editingNote.id, noteContent.trim(), selectedColor, highlightComment);
    } else {
      addNote({
        articleId: article.id,
        paragraphIndex: selectedParagraph,
        content: noteContent.trim(),
      });
    }

    setNotes(getNotesByArticle(article.id));
    setEditingNote(null);
    setNoteContent('');
    setSelectedParagraph(null);
    setHighlightComment('');
  };

  // 删除笔记
  const handleDeleteNote = (noteId: string) => {
    deleteNote(noteId);
    setNotes(getNotesByArticle(article.id));
  };

  // 关闭笔记面板
  const closeNotePanel = () => {
    setEditingNote(null);
    setNoteContent('');
    setSelectedParagraph(null);
    setHighlightComment('');
  };

  // 获取高亮相关的笔记
  const highlightNotes = notes.filter(n => n.isHighlight);
  const normalNotes = notes.filter(n => !n.isHighlight);

  return (
    <div className={`rounded-xl shadow-sm border overflow-hidden ${
      nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
    }`}>
      {/* 工具栏 */}
      <div className={`border-b px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between ${
        nightMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'
      }`}>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={playAudio}
            className={`p-2 sm:p-2.5 rounded-lg transition-colors active:scale-95 touch-manipulation ${
              isSpeaking
                ? 'bg-red-100 text-red-600 animate-pulse'
                : nightMode
                  ? 'bg-indigo-900 text-indigo-300 hover:bg-indigo-800'
                  : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
            }`}
            title={isSpeaking ? '停止朗读' : '朗读全文'}
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`p-2 sm:p-2.5 rounded-lg transition-colors active:scale-95 touch-manipulation ${
              nightMode ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={showTranslation ? '隐藏翻译' : '显示翻译'}
          >
            {showTranslation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* 字体选择 */}
          <button
            onClick={cycleFont}
            className={`p-2 sm:p-2.5 rounded-lg transition-colors active:scale-95 touch-manipulation ${
              nightMode ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={`字体: ${currentFontName}`}
          >
            <AlignLeft className="w-4 h-4" />
          </button>

          {/* 背景主题选择 */}
          <div className="relative">
            <button
              onClick={() => setShowBgMenu(!showBgMenu)}
              className={`p-2 sm:p-2.5 rounded-lg transition-colors active:scale-95 touch-manipulation ${
                nightMode ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={`背景: ${currentBgTheme.name}`}
            >
              <Palette className="w-4 h-4" />
            </button>
            {/* 背景主题菜单 */}
            {showBgMenu && (
              <div
                ref={bgMenuRef}
                className={`absolute right-0 top-full mt-1 p-2 rounded-lg shadow-lg z-50 ${
                  nightMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                }`}
              >
                <div className="grid grid-cols-4 gap-2">
                  {backgroundThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setBackgroundTheme(theme.id);
                        setShowBgMenu(false);
                      }}
                      className={`w-8 h-8 rounded-lg border-2 transition-all ${
                        theme.bgClass
                      } ${backgroundTheme === theme.id ? 'border-indigo-500 scale-110' : 'border-transparent hover:border-gray-300'}`}
                      title={theme.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 笔记按钮 */}
          <button
            onClick={() => setShowNotesPanel(!showNotesPanel)}
            className={`p-2 sm:p-2.5 rounded-lg transition-colors active:scale-95 touch-manipulation relative ${
              nightMode ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } ${notes.length > 0 ? 'text-amber-500' : ''}`}
            title={`笔记 (${notes.length})`}
          >
            <StickyNote className="w-4 h-4" />
            {notes.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">
                {notes.length}
              </span>
            )}
          </button>

          {/* 字体大小 */}
          <button
            onClick={decreaseFontSize}
            className={`p-2 sm:p-2.5 rounded-lg transition-colors active:scale-95 touch-manipulation ${
              nightMode ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title="减小字体"
          >
            <Type className="w-4 h-4" />
          </button>
          <span className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-400'} px-1 sm:px-2`}>{fontSize}px</span>
          <button
            onClick={increaseFontSize}
            className={`p-2 sm:p-2.5 rounded-lg transition-colors active:scale-95 touch-manipulation ${
              nightMode ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title="增大字体"
          >
            <Type className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 高亮菜单 */}
      {showHighlightMenu && selectedText && (
        <div
          className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-2"
          style={{
            left: highlightMenuPosition.x,
            top: highlightMenuPosition.y,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="flex items-center gap-1 mb-2">
            <Highlighter className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-500">选择颜色:</span>
          </div>
          <div className="flex gap-1 mb-2">
            {highlightColors.map((c) => (
              <button
                key={c.color}
                onClick={() => setSelectedColor(c.color)}
                className={`w-6 h-6 rounded border-2 transition-all ${
                  selectedColor === c.color ? 'border-indigo-600 scale-110' : 'border-gray-300'
                }`}
                style={c.style}
                title={c.name}
              />
            ))}
          </div>
          <input
            type="text"
            value={highlightComment}
            onChange={(e) => setHighlightComment(e.target.value)}
            placeholder="添加批示 (可选)"
            className="w-full px-2 py-1 text-sm border rounded mb-2"
            maxLength={100}
          />
          <button
            onClick={handleAddHighlight}
            className="w-full py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
          >
            添加高亮
          </button>
        </div>
      )}

      {/* 文章内容 */}
      <div className={`p-4 sm:p-6 ${currentBgTheme.bgClass} ${currentBgTheme.textClass} transition-colors duration-300`} ref={contentRef}>
        {/* 标题 */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className={`text-xl sm:text-2xl font-bold mb-2 ${backgroundTheme === 'dark' ? 'text-white' : currentBgTheme.textClass}`}>
            {article.title}
          </h1>
          <p className={`text-base sm:text-lg ${backgroundTheme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
            {article.titleZh}
          </p>
          <p className={`text-xs sm:text-sm mt-2 ${backgroundTheme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
            作者：{article.author}
          </p>
        </div>

        {/* 英文原文 */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              nightMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
            }`}>
              英文原文
            </span>
            <button
              onClick={() => handleAddNote(0)}
              className={`p-1.5 rounded-lg transition-colors ${
                nightMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}
              title="添加笔记"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className={currentFontClass}>
            {renderHighlightedContent(article.contentEn, 0)}
          </div>
        </div>

        {/* 中文译文 */}
        {showTranslation && (
          <div className={`border-t pt-6 sm:pt-8 animate-fadeIn ${
            nightMode ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <div className="flex items-center mb-3 sm:mb-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                nightMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
              }`}>
                中文译文
              </span>
            </div>
            <div className={`font-serif leading-loose ${nightMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {renderInteractiveText(article.contentZh, false, 0)}
            </div>
          </div>
        )}
      </div>

      {/* 提示信息 */}
      <div className={`px-4 sm:px-6 py-3 sm:py-4 border-t ${
        nightMode ? 'bg-gray-700 border-gray-600' : 'bg-amber-50 border-amber-100'
      }`}>
        <p className={`text-xs text-center ${
          nightMode ? 'text-gray-400' : 'text-amber-700'
        }`}>
          💡 选中文本可添加高亮和批示 | 点击单词查看释义和音标
        </p>
      </div>

      {/* 笔记面板 */}
      {showNotesPanel && (
        <div className={`border-t p-4 ${
          nightMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-semibold ${nightMode ? 'text-white' : 'text-gray-800'}`}>
              我的笔记
            </h3>
            <button
              onClick={() => setShowNotesPanel(false)}
              className={`p-1 rounded-lg ${nightMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 高亮笔记列表 */}
          {highlightNotes.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-2">
                <Highlighter className="w-4 h-4 text-amber-500" />
                <span className={`text-sm font-medium ${nightMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  高亮笔记 ({highlightNotes.length})
                </span>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {highlightNotes.map((note) => (
                  <div
                    key={note.id}
                    className={`p-3 rounded-lg cursor-pointer ${
                      nightMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white border border-gray-200 hover:border-amber-300'
                    }`}
                    onClick={() => handleEditNote(note)}
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className="w-4 h-4 rounded flex-shrink-0 mt-0.5"
                        style={getHighlightStyle(note.highlightColor)}
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs truncate ${
                          nightMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          "{note.highlightText}"
                        </p>
                        {note.highlightComment && (
                          <p className={`text-sm mt-1 ${nightMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <MessageSquare className="w-3 h-3 inline mr-1" />
                            {note.highlightComment}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteNote(note.id);
                        }}
                        className={`p-1 rounded ${nightMode ? 'hover:bg-gray-500' : 'hover:bg-gray-100'}`}
                      >
                        <Trash2 className="w-3.5 h-3.5 text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 普通笔记列表 */}
          {normalNotes.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-2">
                <StickyNote className="w-4 h-4 text-indigo-500" />
                <span className={`text-sm font-medium ${nightMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  普通笔记 ({normalNotes.length})
                </span>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {normalNotes.map((note) => (
                  <div
                    key={note.id}
                    className={`p-3 rounded-lg ${
                      nightMode ? 'bg-gray-600' : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <p className={`text-sm flex-1 ${nightMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {note.content}
                      </p>
                      <div className="flex items-center space-x-1 ml-2">
                        <button
                          onClick={() => handleEditNote(note)}
                          className={`p-1 rounded ${nightMode ? 'hover:bg-gray-500' : 'hover:bg-gray-100'}`}
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className={`p-1 rounded text-red-500 ${nightMode ? 'hover:bg-gray-500' : 'hover:bg-gray-100'}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <p className={`text-xs mt-2 ${nightMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {new Date(note.updatedAt).toLocaleDateString('zh-CN')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {notes.length === 0 && (
            <p className={`text-sm text-center py-4 ${nightMode ? 'text-gray-500' : 'text-gray-400'}`}>
              暂无笔记，选中文本可添加高亮，或点击上方按钮添加笔记
            </p>
          )}

          {/* 添加/编辑笔记表单 */}
          {(selectedParagraph !== null || editingNote) && (
            <div className={`mt-4 p-3 rounded-lg ${
              nightMode ? 'bg-gray-600' : 'bg-white border border-gray-200'
            }`}>
              {editingNote?.isHighlight && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">高亮颜色:</span>
                    {highlightColors.map((c) => (
                      <button
                        key={c.color}
                        onClick={() => setSelectedColor(c.color)}
                        className={`w-5 h-5 rounded border-2 transition-all ${
                          selectedColor === c.color ? 'border-indigo-600 scale-110' : 'border-gray-300'
                        }`}
                        style={c.style}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      value={highlightComment}
                      onChange={(e) => setHighlightComment(e.target.value)}
                      placeholder="添加批示..."
                      className={`flex-1 px-2 py-1 text-sm rounded ${
                        nightMode ? 'bg-gray-700 text-white border-gray-500' : 'bg-gray-50 text-gray-800 border-gray-200'
                      } border`}
                    />
                  </div>
                </div>
              )}
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder={editingNote?.isHighlight ? "笔记内容..." : "输入笔记内容..."}
                className={`w-full p-2 rounded-lg text-sm resize-none ${
                  nightMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-800 border-gray-200'
                } border`}
                rows={3}
              />
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  onClick={closeNotePanel}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    nightMode ? 'hover:bg-gray-500 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  取消
                </button>
                <button
                  onClick={handleSaveNote}
                  disabled={!noteContent.trim()}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    noteContent.trim()
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  保存
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Reader;
