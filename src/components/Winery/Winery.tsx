import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

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
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        initialSlide="1"
        loop={true}        
      >
        <React.Fragment key={winery.id}>
          <SwiperSlide>
            <WineryData
              data={winery.data}
            />
          </SwiperSlide>

          <SwiperSlide>
            <WineryData
              data={winery.data}
              />
          </SwiperSlide>
              
          <SwiperSlide>
            <WineryData
              data={winery.data}
            />
          </SwiperSlide>

          <SwiperSlide>
            <WineryData
              data={winery.data}
              />
          </SwiperSlide>
              
        </React.Fragment>
      </Swiper>
    </div>
  );
};
