import { createSelector } from 'reselect';

const pathSelector = state => state.match.path;

export const selectFormType = createSelector(
  pathSelector,
  path => path === '/login' ? 'login' : 'sign_up'
);

export const currentUserSelector = state =>
  state.session.currentUser;

export const friendsSelector = createSelector(
  currentUserSelector,
  currentUser => currentUser ? currentUser.friends : []
);

const searchResults = state => state.search.results;

export const searchResultsSelector = createSelector(
  currentUserSelector,
  searchResults,
  (currentUser, results) => results.filter((r) => {
    return !currentUser.friend_ids.includes(r.id) && currentUser.id !== r.id
  })
)
