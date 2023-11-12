import React from 'react';
import style from './FilterSelector.module.scss';

type Props = {
  filterSelectorIsOpen: boolean,
}

export const FilterSelector: React.FC<Props> = ({ filterSelectorIsOpen }) => {
  return (
    <div className={style.body}>
      <div>
        FilterSelector
      </div>
      <div>
        FilterSelector
      </div>
      <div>
        FilterSelector
      </div>
      <div>
        FilterSelector
      </div>
      <div>
        FilterSelector
      </div>
      <div>
        FilterSelector
      </div>
    </div>
  );
};
