import style from "./header.module.css"
import { Outlet,useLocation,Link } from "react-router-dom";
import { useState } from "react";
import CardDialog from '../cardDialog/cardDialog'

export default function Header(){
  const pathname = useLocation().pathname;
  const [dialogOpen,setDialogOpen]=useState(false)
  const [listedItems,setListedItems]=useState([])
  function openDialog(){
    setDialogOpen(true)
  }
  function closeDialog(){
    setDialogOpen(false)
  }
  function addListedItem(item){
    let newItem={item:item,quantity:1}
    let newList=[...listedItems,newItem]
    setListedItems(newList)
  }
  function clearListedItem(){
    setListedItems([])
  }
  function deleteListedItem(item){
    let newList=[...listedItems]
    for(let i=0; i<listedItems.length;i++){
      if(item.id===listedItems[i].item.id){
        newList.splice(i,1)
        setListedItems(newList)
        return;
      }
    }
  }
  function listed(item){
    for(let i=0; i<listedItems.length;i++){
      if(item.id===listedItems[i].item.id){
        return true; 
      }
    }
    return false;
  }

  function changeQuantity(item,quantity){
    let newList=[...listedItems]
    for(let i=0; i<listedItems.length;i++){
      if(item.id===listedItems[i].item.id){
        newList[i]={...newList[i],quantity:Number(quantity)}
        setListedItems(newList)
        return;
      }
    }
  }

  function total(){
    let price=0;
    for(let i=0; i<listedItems.length;i++){
      price+=listedItems[i].quantity*listedItems[i].item.price
    }
    return price.toFixed(2)
  }

  return (<div >
    <div className={style.header}>
      <ul className={style.navBar}>
          <li><Link to="/" className={`${style.link} ${pathname==="/"?style.selected:""}`}>Home</Link></li>
          <li><Link to="/shop" className={`${style.link} ${pathname==="/shop"?style.selected:""}`}>Shop</Link></li>
      </ul>
      <div className={`${style.link} ${style.shoppingCart}`} onClick={openDialog}>
        <img alt="Shopping cart" src="/shopping-cart.svg"  ></img>
        {listedItems.length>0?<div className={style.number}>{listedItems.length}</div>:null}
      </div>
      
    </div>
    {dialogOpen?<CardDialog listedItems={listedItems} closeCallback={closeDialog} deleteCallback={deleteListedItem} clearCallback={clearListedItem} changeQuantityCallback={changeQuantity} total={total()}/>:null}
    
    
    <Outlet context={[listed,addListedItem,deleteListedItem,listedItems,changeQuantity,total()]}/>
  </div>)
}