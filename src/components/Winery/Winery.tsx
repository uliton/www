import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.scss';

import { WineryData } from '../WineryData';
import style from './Winery.module.scss';
import { Wine } from '../Wine/Wine';

type Props = {
  winery: Winery;
}

export const Winery: React.FC<Props> = ({ winery }) => {
  if (!winery) {
    return <></>
  }


  return (
    <div className={style.body}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        initialSlide="1"
      >
        <SwiperSlide>
          <WineryData
            data={winery.data}
          />
        </SwiperSlide>

        {winery.catalog.map(wine => (
          <React.Fragment key={wine.id}>
            <SwiperSlide>
              <Wine
                wineInfo={wine}
              />
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </div>
  );
};
