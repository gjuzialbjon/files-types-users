import { User } from '../models/user';

export const RETRY_COUNT = 5; // Max number of retries in case of server side errors
export const DELAY_TIME = 1000; // Wait 1s before retrying on server side errors

export const SKELETON_CARDS_NR = 6;

export const Endpoints = {
  FILES_API: 'files',
  USERS_API: 'users',
  TYPES_API: 'types'
};

export const emptyUser: User = {
  id: -1,
  givenName: 'Not',
  familyName: 'Available'
};
