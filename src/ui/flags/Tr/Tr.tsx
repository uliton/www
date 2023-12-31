import React from 'react';
import style from './Tr.module.scss';

type Props = {}

export const Tr: React.FC<Props> = () => {
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
          d="M 87.429 30 C 81.254 12.534 64.611 0.015 45.034 0 h -0.068 C 25.389 0.015 8.745 12.534 2.571 30 C 0.911 34.693 0 39.739 0 45 c 0 5.261 0.912 10.308 2.571 15 C 8.75 77.476 25.408 90 45 90 s 36.25 -12.524 42.429 -30 C 89.088 55.307 90 50.261 90 45 C 90 39.739 89.089 34.693 87.429 30 z"
          className={style.p_1}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 42.102 62.332 c -9.739 0 -17.634 -7.76 -17.634 -17.333 s 7.895 -17.333 17.634 -17.333 c 5.241 0 9.934 2.26 13.164 5.828 c -3.899 -6.102 -10.803 -10.161 -18.675 -10.161 c -12.174 0 -22.042 9.7 -22.042 21.667 s 9.868 21.667 22.042 21.667 c 7.875 0 14.781 -4.062 18.679 -10.168 C 52.041 60.07 47.346 62.332 42.102 62.332 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 62.926 34.878 l -0.178 8.009 l -7.472 2.029 l 7.366 2.623 l -0.178 7.345 l 4.804 -5.736 l 7.259 2.518 l -4.199 -6.155 l 5.124 -6.121 l -7.864 2.168 L 62.926 34.878 L 62.926 34.878 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
      </g>
    </svg>
  );
};
