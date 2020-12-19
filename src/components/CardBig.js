import React from 'react';

export default function CardBig(props) {
  const card = props.card;

  return (
    <li className="card card_type_big">
      <img className="card__img card__img_big" src={card.img} alt={card.altText} />
      <div className="card__content card__content_big">
        <div className="card__info">
          <h3 className="card__title">{card.title}</h3>
          <p className="card__date">{card.date}</p>
        </div>
        <div className="card__gradient-wrapper">
          <div className="card__text-wrapper card__text-wrapper_big">
            <p className="card__text">{card.text}</p>
          </div>
          <div className="card__gradient"></div>
        </div>
        <p className="card__address">{card.address}</p>
      </div>
    </li>
  )
}
