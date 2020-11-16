import { createReducer, on } from '@ngrx/store';
import { NavigationItem, SocialLink } from '../../types';
import {
  closeSidebar,
  openSidebar,
  toggleSidebar,
} from '../actions/system.actions';

export interface SystemState {
  siteName: string;
  loading: boolean;
  initialized: boolean;
  navigation: {
    main: NavigationItem[];
    footer: NavigationItem[];
  };
  socialLinks: SocialLink[];
  sidebarOpen: boolean;
}

export const systemReducer = createReducer(
  {
    siteName: 'Sean Jermey',
    loading: false,
    initialized: false,
    navigation: {
      main: [
        {
          url: '/services',
          label: 'Services',
        },
        {
          url: '/tools',
          label: 'Tools',
        },
        {
          url: '/products',
          label: 'Products',
        },
        {
          url: '/projects',
          label: 'Projects',
        },
      ],
      footer: [],
    },
    socialLinks: [
      {
        url: 'https://www.linkedin.com/in/seanjermey/',
        icon: 'fa-linkedin',
      },
      {
        url: 'https://github.com/seanjermey',
        icon: 'fa-github',
      },
    ],
    sidebarOpen: true,
  },
  on(toggleSidebar, (s) => ({ ...s, sidebarOpen: !s.sidebarOpen })),
  on(closeSidebar, (s) => ({ ...s, sidebarOpen: false })),
  on(openSidebar, (s) => ({ ...s, sidebarOpen: true }))
);
