import React from 'react';
import style from './Ua.module.scss';

type Props = {}

export const Ua: React.FC<Props> = () => {
  return (
    <svg
      viewBox="0 0 256 256"
      className={style.flag}
    >
      <g
        className={style.g}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 45 90 C 20.147 90 0 69.853 0 45 h 90 C 90 69.853 69.853 90 45 90 z"
          className={style.p_1}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"/>
        <path
          d="M 45 0 C 20.147 0 0 20.147 0 45 h 90 C 90 20.147 69.853 0 45 0 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"/>
      </g>
    </svg>
  );
};
