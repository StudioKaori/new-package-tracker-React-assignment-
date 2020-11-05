const { atom } = require("recoil");

export const langState = atom({
  key: 'langState',
  default: 'en',
});

