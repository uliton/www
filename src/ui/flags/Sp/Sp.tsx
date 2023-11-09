import React from 'react';
import style from './Sp.module.scss';

type Props = {}

export const Sp: React.FC<Props> = () => {
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
          d="M 0 45 c 0 8.199 2.202 15.88 6.034 22.5 h 77.932 C 87.798 60.88 90 53.199 90 45 c 0 -8.199 -2.202 -15.88 -6.034 -22.5 H 6.034 C 2.202 29.12 0 36.801 0 45 z"
          className={style.p_1}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 83.966 22.5 c -0.269 -0.465 -0.546 -0.926 -0.831 -1.381 C 75.176 8.438 61.077 0 45 0 c -8.201 0 -15.881 2.205 -22.5 6.04 c -6.357 3.682 -11.736 8.867 -15.635 15.08 C 6.58 21.574 6.304 22.035 6.034 22.5 H 83.966 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
        <path
          d="M 6.034 67.5 c 0.269 0.465 0.546 0.926 0.831 1.38 c 3.899 6.213 9.278 11.397 15.635 15.08 C 29.119 87.795 36.799 90 45 90 c 16.077 0 30.176 -8.438 38.135 -21.12 c 0.285 -0.455 0.562 -0.915 0.831 -1.38 H 6.034 z"
          className={style.p_2}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"/>
      </g>
    </svg>
  );
};
