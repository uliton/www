import React from 'react';
import { Cz } from '../../ui/flags/Cz';
import { De } from '../../ui/flags/De';
import { En } from '../../ui/flags/En';
import { Fr } from '../../ui/flags/Fr';
import { It } from '../../ui/flags/It';
import { Pl } from '../../ui/flags/Pl';
import { Sp } from '../../ui/flags/Sp';
import { Tr } from '../../ui/flags/Tr';
import { Ua } from '../../ui/flags/Ua';
import style from './LanguageSelector.module.scss';

type Props = {
  setLang: (_: string) => void,
  setLanguageSelectorIsOpen: (_: boolean) => void,
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

export const LanguageSelector: React.FC<Props> = ({ setLang, setLanguageSelectorIsOpen }) => {
  const handlerChoosLanguage = (lang: string) => {
    setLang(lang);
    setLanguageSelectorIsOpen(false); 
  }

  return (
    <div className={style.body}>
      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.en)}
      >
        English
        <En />
      </button>
      
      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.de)}
      >
        Deutsch
        <De />
      </button>

      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.cz)}
      >
        Čeština
        <Cz />
      </button>

      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.fr)}
      >
        Français
        <Fr />
      </button>

      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.it)}
      >
        Italiano
        <It />
      </button>

      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.pl)}
      >
        Polski
        <Pl />
      </button>

      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.sp)}
      >
        Español
        <Sp />
      </button>

      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.tr)}
      >
        Türkçe
        <Tr />
      </button>

      <button
        type="button"
        className={style.icon}
        onClick={() => handlerChoosLanguage(LANG.ua)}
      >
        Українська
        <Ua />
      </button>
    </div>
  );
};
