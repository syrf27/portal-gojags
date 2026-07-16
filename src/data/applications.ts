import type { Application, Category } from '../types';
import raw from './applications.json';

const data = raw as { categories: Category[]; applications: Application[] };

export const categories: Category[] = data.categories;
export const applications: Application[] = data.applications;

export function getApplicationsByCategory(categoryId: string): Application[] {
  if (categoryId === 'all') return applications;
  return applications.filter((app) => app.category === categoryId);
}

export function getFrequentApplications(): Application[] {
  return applications.filter((app) => app.isFrequent);
}

export function getFavoriteApplications(): Application[] {
  return applications.filter((app) => app.isFavorite);
}
