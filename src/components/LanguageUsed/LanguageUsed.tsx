import React, { useState } from 'react';
import { Cz } from '../../ui/flags/Cz';
import { LanguageSelector } from '../LanguageSelector';
import style from './LanguageUsed.module.scss';

type Props = {
  setLang: (_: string) => void,
}

export const LanguageUsed: React.FC<Props> = ({ setLang }) => {
  const [languageSelectorIsOpen, setLanguageSelectorIsOpen] = useState<boolean>(false);

  const handlerLanguageSelect = () => {
    setLanguageSelectorIsOpen(!languageSelectorIsOpen);
  }

  return (
    <div className={style.body}>
      <button
        type="button"
        className={style.button}
        onClick={handlerLanguageSelect}
      >
        <Cz />
      </button>

      {languageSelectorIsOpen && (
        <LanguageSelector
          setLang={setLang}
          setLanguageSelectorIsOpen={setLanguageSelectorIsOpen}
        />
      )}
    </div>
  );
};
