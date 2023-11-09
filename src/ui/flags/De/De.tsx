import React from 'react';
import style from './De.module.scss';

type Props = {}

export const De: React.FC<Props> = () => {
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
          d="M 2.57 30 l 84.859 0 C 81.254 12.534 64.611 0.015 45.033 0 l -0.068 0 C 25.388 0.015 8.745 12.534 2.57 30 z"
          className={style.p_1}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 87.429 60 L 2.57 60 C 8.749 77.476 25.408 90 45 90 S 81.25 77.476 87.429 60 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 87.429 60 C 89.088 55.307 90 50.261 90 45 c 0 -5.261 -0.911 -10.307 -2.571 -15 L 2.57 30 C 0.911 34.693 0 39.739 0 45 c 0 5.261 0.912 10.307 2.571 15 L 87.429 60 z"
          className={style.p_3}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
      </g>
    </svg>
  );
};
