export type CategoryId = 'eksternal' | 'internal';

export interface Application {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  url: string;
  isPublished?: boolean;
  isFrequent?: boolean;
  isFavorite?: boolean;
}

export interface Category {
  id: CategoryId;
  name: string;
}

export interface ApplicationsData {
  categories: Category[];
  applications: Application[];
}
