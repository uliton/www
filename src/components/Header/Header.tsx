import React, { useState } from 'react';
import { Logo } from '../../ui/Logo';
import { FilterButton } from '../FilterButton';
import { LanguageUsedButton } from '../LanguageUsedButton';
import style from './Header.module.scss';
import { FilterSelector } from '../FilterSelector';
import classNames from 'classnames';

type Props = {
  setLang: (_: string) => void,
}

export const Header: React.FC<Props> = ({ setLang }) => {
  const [filterSelectorIsOpen, setFilterSelectorIsOpen] = useState<boolean>(false);

  return (
    <header className={style.body}>
      <div className={style.header}>
        <div className="container">
          <div className={style.content}>
            <div className={style.logo}>
              <Logo />
            </div>

            <div className={style.services}>
              <FilterButton
                filterSelectorIsOpen={filterSelectorIsOpen}
                setFilterSelectorIsOpen={setFilterSelectorIsOpen}
              />

              <LanguageUsedButton setLang={setLang} />
            </div>
          </div>

        </div>
      </div>

      <div className={classNames({
        "container": true,
        [style.filters]: true,
        [style.filters_is_open]: filterSelectorIsOpen,
      })}>
        <FilterSelector filterSelectorIsOpen={filterSelectorIsOpen} />
      </div>
    </header>
  );
};
