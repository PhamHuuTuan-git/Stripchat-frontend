export const sidebarSelectorMode = (state: { sidebar: { isOpen: boolean } }) => state.sidebar.isOpen;
export const userSelector = (state: { authen: { user: any } }) => state.authen.user;