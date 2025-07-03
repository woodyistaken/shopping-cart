import { useEffect,useState } from "react";
import PropTypes from 'prop-types';
import style from './card.module.css'

export default function Card({item,addItemCallback,deleteItemCallback,listed}){
  return <div className={style.container}>
    <img className={style.itemImage} src={item.image}></img>
    <div className={style.textContainer}>
      <h1 className={style.title}>{item.title}</h1>
      <div className={style.category}>{item.category}</div>
      <div className={style.descriptionContainer}>{item.description}</div>
      <div className={style.bottomContainer}>
        <div className={style.priceContainer}>
          <div >${item.price}</div>
          <div>{"Rating: "+item.rating.rate+'/5'}</div>
        </div>
        {listed?
        <button className={style.buyButton} onClick={()=>deleteItemCallback(item)}>X</button>
        :
        <button className={style.buyButton} onClick={()=>addItemCallback(item)}><img alt="Shopping cart" src="/shopping-cart.svg" width="50px"></img></button>
        }
        
      </div>
    </div>
  </div>
}

Card.propTypes={
  category:PropTypes.string,
  description:PropTypes.string,
  title:PropTypes.string,
  imageUrl:PropTypes.string,
  price:PropTypes.number,
  rating:PropTypes.number,
}