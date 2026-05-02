# R001 LinguaRead 双语阅读平台 工作记录

---

## 项目信息

| 项目 | 内容 |
|------|------|
| **项目名** | LinguaRead 双语阅读平台 |
| **开发端口** | 本地 5169 |
| **GitHub** | https://github.com/lz2026km/linguaread |
| **当前版本** | v6.5.0（2026-04-28） |
| **dev分支** | main |
| **pkg路径** | `/tmp/linguaread_pkg/linguaread/` |
| **数据文件规范** | 参考 skill: `linguaread-articles-format` |
| **开发工作流** | pkg开发 → Git规范提交 → 合入main → 服务同步 |

---

## 功能页面（29个）

| 页面 | 文件 | 说明 |
|------|------|------|
| 首页 | `HomePage.tsx` | v6.5 Banner/谚语/快捷入口 |
| 课程列表 | `CoursesListPage.tsx` | 四级课程体系 |
| 课程详情 | `CourseDetailPage.tsx` | 单元学习内容 |
| 课程阅读 | `CourseReaderPage.tsx` | 课文+翻译 |
| 文章列表 | `ArticlesListPage.tsx` | 400篇短文分类 |
| 文章阅读 | `ArticleReaderPage.tsx` | 50篇长文 |
| 语法教程 | `GrammarPage.tsx` | 800+语法条目 |
| 词汇测试 | `VocabularyPage.tsx` | 400+词汇题 |
| 考试中心 | `ExamsPage.tsx` | 25+套试卷 |
| 试卷中心 | `ExamPapersPage.tsx` | 试卷管理 |
| 每日谚语 | `DailyQuotePage.tsx` | 100+谚语 |
| 习语专题 | `IdiomsPage.tsx` | 200+习语 |
| 学习方法 | `LearningMethodsPage.tsx` | 24单元方法 |
| AI助手 | `AIAssistantPage.tsx` | AI辅助 |
| 成就中心 | `AchievementPage.tsx` | 成就徽章 |
| 统计数据 | `StatsPage.tsx` | 学习统计 |
| 排行榜 | `LeaderboardPage.tsx` | 排行 |
| 错题本 | `WrongBookPage.tsx` | 错题复习 |
| 复习中心 | `ReviewPage.tsx` | 艾宾浩斯复习 |
| 生词本 | `NewWordsPage.tsx` | 生词+复习 |
| 搜索 | `SearchPage.tsx` | 全局搜索 |
| 书籍中心 | `BooksPage.tsx` | 教材配套 |
| 视频学习 | `VideoLearningPage.tsx` | 视频课程 |
| 下载中心 | `DownloadPage.tsx` | 离线下载 |
| 学习报告 | `ReportPage.tsx` | 学习报告 |
| 单词游戏 | `WordGamePage.tsx` | 趣味学习 |
| 留言板 | `GuestBookPage.tsx` | 互动留言 |
| 设置 | `SettingsPage.tsx` | 版本6.5.0 |

---

## 版本历史

| 版本 | 日期 | 主要内容 |
|------|------|---------|
| v6.5.0 | 2026-04-28 | articles 400篇/grammar 800+/quiz 400题/习语200/谚语100/exams扩充/每日谚语banner |
| v6.0.4 | 2026-04-27 | exams.ts闭合括号/speech男声检测/v6.0.4版本更新 |
| v6.0.0 | 2026-04-27 | 搜索/笔记UI/首页重构/考试扩充/长篇文章 |
| v6.0.0 | 2026-04-27 | 桌面侧边栏/深色模式/课程扩充24单元 |
| v5.5.5 | 2026-04-26 | 语法扩充至451条/文章扩至190篇/大学quiz30题 |
| v5.5.0 | 2026-04-25 | 七大功能上线：统计面板/成就/错题本/复习/排行/离线/报告 |
| v5.35 | 2026-04-25 | 语法教程扩充至349条 |
| v5.0.0 | 2026-04-22 | 初始化项目 |

---

## Git 提交记录

| Commit | 日期 | 内容 |
|--------|------|------|
| `de4f72a` | 2026-04-28 | fix: SettingsPage 版本号 6.0.3→6.5.0 |
| `428e677` | 2026-04-28 | feat: v6.5.0 全面扩充 |
| `9e8e332` | 2026-04-27 | fix: exams.ts/speech/v6.0.4 |
| `c32ada2` | 2026-04-27 | fix: 版本号5.7→6.0，设置页6.0版本历史 |
| `51615e7` | 2026-04-27 | feat: v6.0.0 搜索/笔记/首页重构 |
| `804c750` | 2026-04-27 | feat: v6.0.0 桌面侧边栏/深色模式 |
| `bf5d779` | 2026-04-26 | feat: 全面重编人教版教材PEP四级别 |
| `505f320` | 2026-04-26 | feat: v5.5.5 语法451条/文章190篇 |
| `9c61990` | 2026-04-25 | feat: v5.5 七大功能上线 |
| `e879633` | 2026-04-22 | feat: 初始化项目 |

---

## 数据规模

| 类型 | 数量 |
|------|------|
| 短篇文章 | 400篇 |
| 长篇文章 | 50篇 |
| 语法条目 | 800+条 |
| 词汇测试题 | 400+题 |
| 考试试卷 | 25+套 |
| 习语 | 200+条 |
| 每日谚语 | 100+条 |
| 课程单元 | PEP小学24+初中12+高中12+大学12单元 |

---

## 已知问题/TODO

- 桌面端侧边栏与移动端Tab切换体验优化
- 离线下载功能完善
- AI助手响应质量提升

---

## 开发规范

- **数据文件格式**：参考 skill `linguaread-articles-format`
- **工作流**：pkg开发 → Git规范提交 → 合入main → 服务同步
- **版本规范**：package.json version + VERSION.md + SettingsPage版本历史 三处同步更新
