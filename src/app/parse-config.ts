import Parse from 'parse';

export const initializeParse = () => {
  Parse.initialize('o5n9hnKCy1Jo3Ou5mtFnqd0oKVrcy8IlqhAxtedd', '');
  Parse.serverURL = 'https://parseapi.back4app.com';
};