export interface StoragePayload {
  expiresAt: number;
  data: any[];
}

export interface NavigationItem {
  url: string;
  label: string;
}

export interface SocialLink {
  url: string;
  icon: string;
}

export interface Asset {
  url: string;
  title: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  url: string;
  cover: Asset;
  featured: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  cover: Asset;
  url: string;
  featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  url: string;
  cover: Asset;
  featured: boolean;
}

export interface Tool {
  id: number;
  title: string;
  description: string;
  url: string;
  logo: Asset;
  featured: boolean;
}
