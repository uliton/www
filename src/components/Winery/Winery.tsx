import React from 'react';
import { WineryData } from '../WineryData';
import style from './Winery.module.scss';

type Props = {
  winery: Winery;
}

export const Winery: React.FC<Props> = ({ winery }) => {
  if (!winery) {
    return <></>
  }


  return (
    <div className={style.body}>
      <WineryData
        data={winery.data}
      />


    </div>
  );
};
