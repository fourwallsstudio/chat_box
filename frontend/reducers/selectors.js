import { createSelector } from 'reselect';

const pathSelector = state => state.match.path;

export const selectFormType = createSelector(
  pathSelector,
  path => path === '/login' ? 'login' : 'sign_up'
);
