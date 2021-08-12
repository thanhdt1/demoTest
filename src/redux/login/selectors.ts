import {createSelector} from 'reselect';

import type {RootStore} from '@redux/store';
const userInfoSelector = (state: RootStore) => state.users;
const allUsers = createSelector(userInfoSelector, state => state.users);
const errorUsers = createSelector(userInfoSelector, state => state.isError);
const allUsersLoading = createSelector(
  userInfoSelector,
  state => state.loading,
);

export {allUsers, errorUsers, allUsersLoading};
