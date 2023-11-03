import React from "react";
import MOCK from '../../WWW_MOCK.json';

// enum enumLanguage {
//   en = "en",
//   de = "de",
//   cz = "cz",
//   pl = "pl",
//   ua = "ua",
//   fr = "fr",
//   it = "it",
//   sp = "sp",
//   tr = "tr",
// }

export const Language = React.createContext('en');

export const getTranslation = (lang) => {
  return MOCK[lang];
};