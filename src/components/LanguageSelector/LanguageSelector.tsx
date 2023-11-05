import React from 'react';
import style from './LanguageSelector.module.scss';

type Props = {
  setLang: (_: string) => void,
  setLanguageSelectorIsOpen: (_: boolean) => void,
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
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        en
      </button>
      
      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        de
      </button>

      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        cz
      </button>

      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        fr
      </button>

      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        it
      </button>

      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        pl
      </button>

      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        sp
      </button>

      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        tr
      </button>

      <button
        type="button"
        className=''
        onClick={() => handlerChoosLanguage('')}
      >
        ua
      </button>
    </div>
  );
};
