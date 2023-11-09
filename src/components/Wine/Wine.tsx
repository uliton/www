import React, { useState } from 'react';
import style from './Wine.module.scss';
import year from '../../ui/icons/year_icon.svg'
import type_icon from '../../ui/icons/type_icon_2.svg'
import alcohol_content from '../../ui/icons/alcohol_insert_icon.svg'

type Props = {
  wineInfo: Wine
}

export const Wine: React.FC<Props> = ({ wineInfo }) => {
  const fixed_view = (num: number) => num.toFixed(2).toString().replace('.', ',');
  const price_per_liter = wineInfo.price / wineInfo.bottle_size || 0;

  const [count, setCount] = useState<number>(0);
  const handlerRemoveCount = () => {
    if (count) {
      setCount(prev => prev - 1);
    }
  }
  const handlerAddCount = () => {
    setCount(prev => prev + 1);
  }

  const handlerAddWine = () => {
    setCount(0);
  }

  return (
    <div className={style.body}>
      <div className={style.content}>

        <div className={style.left}>
          <img
            src={wineInfo.img}
            alt="vine"
            className={style.img}
          />
        </div>

        <div className={style.right}>
          <div className={style.name}>
            {wineInfo.name}
          </div>

          <div className={style.wrapper}>
            <div>
              <img src={year} alt="type" className={style.icon} />

              {wineInfo.year}
            </div>

            <div>
              <img src={type_icon} alt="type" className={style.icon} />

              {wineInfo.type}
            </div>

            <div>
              <img src={alcohol_content} alt="type" className={style.icon} />

              {`${wineInfo.alcohol_content} %`}
            </div>
          </div>

          <div className={style.price}>
            {fixed_view(wineInfo.price)} &#8364;

            <div className={style.liter}>
              {fixed_view(wineInfo.bottle_size)} l

              <p>
                ({fixed_view(price_per_liter)} &#8364;/l)
              </p>
            </div>
          </div>

          <div className={style.counter_container}>
            <span className={style.counter}>
              <button
                type="button"
                onClick={handlerRemoveCount}
                className={style.button}
              >
                -
              </button>

              {count}

              <button
                type="button"
                onClick={handlerAddCount}
                className={style.button}
              >
                +
              </button>
            </span>

            <button
              type="button"
              onClick={handlerAddWine}
              className={style.add_button}
            >
              Add
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
