import { Article } from '../types';
import { longArticles } from './longArticles';
export const articles: Article[] = [
  ...longArticles,
];
export const getArticlesByLevel = (level: string): Article[] => articles;
export const getArticleById = (id: string): Article | undefined => articles.find(a => a.id === id);
export const getArticlesByCategory = (category: string): Article[] => articles;
