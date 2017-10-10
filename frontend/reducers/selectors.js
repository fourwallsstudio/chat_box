import { createSelector } from 'reselect';

const pathSelector = state => state.match.path;

export const selectFormType = createSelector(
  pathSelector,
  path => path === '/login' ? 'login' : 'sign_up'
);

export const currentUserSelector = state =>
  state.users.usersByIds[state.session.currentUser];

export const friendsSelector = createSelector(
  currentUserSelector,
  currentUser => currentUser ? currentUser.friends : []
);
