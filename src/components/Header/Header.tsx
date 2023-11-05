import React, { useContext, useState } from 'react';
import { Filter } from '../../ui/icons/Filter';
import { Logo } from '../../ui/Logo';
import { getTranslation, Language } from '../../utils/functions/language';
import { LanguageSelector } from '../LanguageSelector';
import { LanguageUsed } from '../LanguageUsed';
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
      <div className={style.logo}>
        <Logo />
      </div>

      <div className={style.services}>
        <Filter />

        <LanguageUsed setLang={setLang} />
      </div>
    </div>
  );
};
