import {atom} from 'recoil';

export const account = atom<string | undefined>({
  key: 'rlyAccount',
  default: undefined,
});

export const balance = atom<number | undefined>({
  key: 'rlyBalance',
  default: undefined,
});

export const userDetails = atom<{name: string; username: string} | undefined>({
  key: 'userDetails',
  default: undefined,
});

export const errorMessage = atom<{title: string; body: string} | undefined>({
  key: 'errorMessage',
  default: undefined,
});
