import React from 'react';
import style from './Fr.module.scss';

type Props = {}

export const Fr: React.FC<Props> = () => {
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
          d="M 59.999 2.571 l 0 84.859 c 17.466 -6.175 29.985 -22.818 30 -42.396 v -0.068 C 89.985 25.389 77.465 8.745 59.999 2.571 z"
          className={style.p_1}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 30 87.429 l 0 -84.858 C 12.524 8.75 0 25.408 0 45 S 12.524 81.25 30 87.429 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 30 87.429 C 34.693 89.088 39.739 90 45 90 c 5.261 0 10.307 -0.911 15 -2.571 l 0 -84.859 C 55.307 0.911 50.261 0 45 0 c -5.261 0 -10.307 0.912 -15 2.571 L 30 87.429 z"
          className={style.p_3}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
      </g>
    </svg>
  );
};
