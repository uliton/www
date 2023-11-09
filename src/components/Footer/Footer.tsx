import React from 'react';
import style from './Footer.module.scss';

type Props = {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className={style.body}>
      <div className="container">
        Footer
      </div>
    </div>
  );
};
