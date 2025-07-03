import style from './cardDialog.module.css'
import CartCard from '../cartCard/cartCard'
import { Link } from "react-router-dom";

export default function CardDialog({listedItems,closeCallback,deleteCallback,clearCallback,changeQuantityCallback,total}){
  return (
  <dialog className={style.dialog} open>
    <div className={style.header}>
      <h1>Cart</h1>
      <button onClick={clearCallback} className={style.clearButton}>Clear</button>
      <button onClick={closeCallback} className={style.closeButton}>x</button>
    </div>
    
    <div className={style.cardContainer}>
      {listedItems.map(({item,quantity})=>{
          return <CartCard key={item.id} quantity={quantity} item={item} deleteCallback={deleteCallback} changeQuantityCallback={changeQuantityCallback}/>
        })}
    </div>
      
    <div className={style.bottom}>
      <div>
        <p>Total</p>
        <h3>{total}</h3>
      </div>
      <button className={style.checkoutButton} onClick={closeCallback}><Link className={style.checkoutLink} to="/checkout">Checkout</Link></button>
    </div>
    </dialog>
    )
}