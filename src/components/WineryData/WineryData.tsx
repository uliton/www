import React from 'react';
import style from './WineryData.module.scss';

type Props = {
  data: WineryData,
}

export const WineryData: React.FC<Props> = ({ data }) => {
  const shortWebsiteLink = data.info.website.split('.').slice(1).join('.');

  return (
    <div className={style.body}>
      <div className={style.content}>
        <img
          src={data.logo}
          alt="logo"
          className={style.img}
          />

        <h3 className={style.name}>
          {data.name}
        </h3>
        
        <ul>
          <li className={style.item}>
            <p>City:</p>
            {data.info.city}
          </li>

          <li className={style.item}>
            <p>Street:</p>
            {data.info.street}
            {' '}
            {data.info.number}
          </li>

          <li className={style.item}>
            <p>ZIP:</p>
            {data.info.zip}
          </li>

          <li className={style.item}>
            <p>Website:</p>
            <a
              href={data.info.website}
              className={style.link}
              rel="noreferrer"
              target="_blank"
            >
              {shortWebsiteLink} 
            </a>
          </li>

          <li className={style.item}>
            <p>Email:</p>
            <a href={`mailto:${data.info.email}`} className={style.link}>
              {data.info.email}
            </a>
          </li>

          <li className={style.item}>
            <p>Phone:</p>
            <a href={`tel:${data.info.phone}`} className={style.link}>
              {data.info.phone}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
