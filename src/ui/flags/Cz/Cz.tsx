import React from 'react';
import style from './Cz.module.scss';

type Props = {}

export const Cz: React.FC<Props> = () => {
  return (
    <svg
      viewBox="0 0 256 256"
      className={style.flag}
    >
      <g
        className={style.g}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <circle
          cx="45"
          cy="45"
          r="45"
          className={style.c}
          transform="  matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 45 90 C 20.147 90 0 69.853 0 45 h 90 C 90 69.853 69.853 90 45 90 z"
          className={style.p_1}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap-="round"
        />
        <path
          d="M 10.013 73.29 C 3.755 65.56 0 55.721 0 45 c 0 -10.675 3.725 -20.475 9.935 -28.19 l 42.342 28.248 L 10.013 73.29 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
