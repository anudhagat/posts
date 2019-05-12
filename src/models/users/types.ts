export interface Geo {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface CompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: CompanyInfo;
}

export interface UsersState {
  users: { [id: number]: User };
  loading: boolean;
  error: null | string;
}

// Describing the different ACTION NAMES available
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE';
export const ADD_USERS_PENDING = 'ADD_USERS_PENDING';

interface AddUsersSuccessAction {
  type: typeof ADD_USERS_SUCCESS;
  payload: { [id: number]: User };
}

interface AddUsersFailureAction {
  type: typeof ADD_USERS_FAILURE;
  payload: string;
}

interface AddUsersPendingAction {
  type: typeof ADD_USERS_PENDING;
  payload: undefined;
}
export type UserActionTypes =
  | AddUsersSuccessAction
  | AddUsersFailureAction
  | AddUsersPendingAction;
