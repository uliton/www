import React, { useContext, useState } from 'react';
import { Cz } from '../../ui/flags/Cz';
import { De } from '../../ui/flags/De';
import { En } from '../../ui/flags/En';
import { Fr } from '../../ui/flags/Fr';
import { It } from '../../ui/flags/It';
import { Pl } from '../../ui/flags/Pl';
import { Sp } from '../../ui/flags/Sp';
import { Tr } from '../../ui/flags/Tr';
import { Ua } from '../../ui/flags/Ua';
import { Language } from '../../utils/functions/language';
import { LanguageSelector } from '../LanguageSelector';
import style from './LanguageUsed.module.scss';

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

export const LanguageUsed: React.FC<Props> = ({ setLang }) => {
  const lang = useContext(Language);
  const [languageSelectorIsOpen, setLanguageSelectorIsOpen] = useState<boolean>(false);

  
  const languageSelected = (lang: string) => {
    switch (lang) {
      case LANG.de:
        return <De />
      case LANG.cz:
        return <Cz />
      case LANG.pl:
        return <Pl />
      case LANG.ua:
        return <Ua />
      case LANG.fr:
        return <Fr />
      case LANG.it:
        return <It />
      case LANG.sp:
        return <Sp />
      case LANG.tr:
        return <Tr />
      default:
        return <En />
    }
  }

  const handlerLanguageSelect = () => {
    setLanguageSelectorIsOpen(true);
  }

  return (
    <div className={style.body}>
      <button
        type="button"
        className={style.icon}
        onClick={handlerLanguageSelect}
      >
        {languageSelected(lang)}
      </button>

      <LanguageSelector
        languageSelectorIsOpen={languageSelectorIsOpen}
        setLanguageSelectorIsOpen={setLanguageSelectorIsOpen}
        setLang={setLang}
      />
    </div>
  );
};
