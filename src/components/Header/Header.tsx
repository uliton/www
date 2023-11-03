import React, { useContext } from 'react';
import { getTranslation, Language } from '../../utils/functions/language';
import style from './Header.module.scss';

type Props = {
  setLang: (_: string) => void,
}

enum LANG {
  en = "en",
  de = "de",
  cz = "cz",
  pl = "pl",
  ua = "ua",
  fr = "fr",
  it = "it",
  sp = "sp",
  tr = "tr",
}

export const Header: React.FC<Props> = ({ setLang }) => {
  const lang: string = useContext(Language);
  const MOCK = getTranslation(lang);

  console.log(lang);
  
  return (
    <div className={style.body}>
      {MOCK.header_title}
    </div>
  );
};
