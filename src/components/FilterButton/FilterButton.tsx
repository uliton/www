import React from 'react';
import style from './FilterButton.module.scss';
import { Filter } from '../../ui/icons/Filter';

type Props = {
  filterSelectorIsOpen: boolean,
  setFilterSelectorIsOpen: (_: boolean) => void,
}

export const FilterButton: React.FC<Props> = ({ filterSelectorIsOpen, setFilterSelectorIsOpen }) => {
  const handlerFilterSelectorIsOpen = () => {
    setFilterSelectorIsOpen(!filterSelectorIsOpen)
  }

  return (
    <div className={style.body}>
      <button
        type="button"
        className={style.button}
        onClick={handlerFilterSelectorIsOpen}
      >
        <Filter />
      </button>
    </div>
  );
};
