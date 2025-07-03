import style from './checkout.module.css'
import {  useOutletContext } from "react-router-dom";
import CartCard from '../cartCard/cartCard'

export default function Checkout(){
  const [listed,addItemCallback,deleteCallback,listedItems,changeQuantityCallback,total]=useOutletContext();
  return (
    <div className={style.container}>
      <div className={style.products}>
        <div className={style.header}>
          <h1>Your Cart</h1>
          <p>{listedItems.length} products</p>
        </div>
        <div className={style.cardContainer}>
              {listedItems.map(({item,quantity})=>{
                  return <CartCard key={item.id} quantity={quantity} item={item} deleteCallback={deleteCallback} changeQuantityCallback={changeQuantityCallback}/>
                })}
        </div>
      </div>
      <div className={style.checkout}>
          <h1>Payment details</h1>
          <form className={style.form}>
            <div className={style.input}>
              <label htmlFor="name">Your name</label>
              <input id="name"></input>
            </div>
            <div className={style.input}>
              <label htmlFor="card">Card Number</label>
              <input id="card" placeholder="**** **** **** ****"></input>
            </div>
            <div className={style.smallInputContainer}>
              <div className={`${style.input} ${style.smallDateInput}`}>
                <label htmlFor="date">Expiration Date</label>
                <input type="date" id="date"></input>
              </div>
              <div className={`${style.input} ${style.smallCVCInput}`}>
                <label htmlFor="cvc">CVC</label>
                <input id="cvc" placeholder="***"></input>
              </div>
            </div>
          </form>
          <div className={style.bottom}>
            <div>
              <p>Total</p>
              <h3>{total}</h3>
            </div>
            <button className={style.checkoutButton}>Pay</button>
          </div>
      </div>
    </div>
  )
}