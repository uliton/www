import React from 'react';
import style from './WineryData.module.scss';

type Props = {
  data: WineryData,
}

export const WineryData: React.FC<Props> = ({ data }) => {
  const shortWebsiteLink = data.contacts.website.split('.').slice(1).join('.');

  return (
    <div className={style.body}>
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
          {data.address.city}
        </li>

        <li className={style.item}>
          <p>Street:</p>
          {data.address.street}
          {' '}
          {data.address.number}
        </li>

        <li className={style.item}>
          <p>ZIP:</p>
          {data.address.zip}
        </li>

        <li className={style.item}>
          <p>Website:</p>
          <a
            href={data.contacts.website}
            className={style.link}
            rel="noreferrer"
            target="_blank"
          >
            {shortWebsiteLink} 
          </a>
        </li>

        <li className={style.item}>
          <p>Email:</p>
          <a href={`mailto:${data.contacts.email}`} className={style.link}>
            {data.contacts.email}
          </a>
        </li>

        <li className={style.item}>
          <p>Phone:</p>
          <a href={`tel:${data.contacts.phone}`} className={style.link}>
            {data.contacts.phone}
          </a>
        </li>
      </ul>
    </div>
  );
};
