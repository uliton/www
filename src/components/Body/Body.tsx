import React from 'react';
import DATA from '../../WWW_DATA.json';
import { Winery } from '../Winery';
import style from './Body.module.scss';

type Props = {}

export const Body: React.FC<Props> = () => {
  console.log(DATA)
  return (
    <div className={style.body}>
      {DATA.map(winery => (
        <React.Fragment key={winery.id}>
          <Winery winery={winery} />
        </React.Fragment>
      ))}
    </div>
  );
};
