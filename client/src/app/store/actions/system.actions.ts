import { createAction, props } from '@ngrx/store';

export const toggleSidebar = createAction('[System] Toggle Sidebar');

export const closeSidebar = createAction('[System] Close Sidebar');

export const openSidebar = createAction('[System] Open Sidebar');
