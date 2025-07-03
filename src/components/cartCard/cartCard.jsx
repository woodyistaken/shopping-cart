import { useState } from "react"
import style from './cartCard.module.css'


export default function CartCard({item,quantity,deleteCallback,changeQuantityCallback}){
  

  function changeInput(e){
    if(e.target.value==""){
      changeQuantityCallback(item,1)
    }else{
      changeQuantityCallback(item,e.target.value)
    }
  }

  return (
  <div className={style.container}>
    <img src={item.image} className={style.image}></img>
    <div className={style.textContainer}>
      <div className={style.header}>
        <h1 className={style.heading}>{item.title}</h1>
        <button onClick={()=>deleteCallback(item)}>X</button>
      </div>
      <div className={style.bottom}>
        <p>${item.price}</p>
        <div className={style.quantity}>
          <button className={style.quantityButton} onClick={()=>{if(quantity>1){changeQuantityCallback(item,quantity-1)}}}>-</button>
          <input type="number" className={style.quantityInput} value={quantity} onChange={changeInput}></input>
          <button className={style.quantityButton} onClick={()=>{changeQuantityCallback(item,quantity+1)}}>+</button>
        </div>
      </div> 
    </div>
  </div>
  )
}