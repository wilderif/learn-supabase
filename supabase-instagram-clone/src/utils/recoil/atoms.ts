import { atom } from 'recoil';

export const selectedUserIdState = atom({
  key: 'selectedUserIdState',
  default: '',
});

export const selectedUserIndexState = atom({
  key: 'selectedUserIndexState',
  default: 0,
});

export const presenceState = atom({
  key: 'presenceState',
  default: {},
});
