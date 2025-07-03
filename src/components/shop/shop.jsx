import { useEffect,useState } from "react";
import Card from '../card/card.jsx'
import style from './shop.module.css'
import {  useOutletContext } from "react-router-dom";

export default function Shop(){
  const [listed,addItemCallback,deleteItemCallback]=useOutletContext();
  const [items,setItems]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data));
  },[])
  return (<div className={style.container}>
    {items.map((item)=>{
      return <Card item={item} key={item.id} addItemCallback={addItemCallback} deleteItemCallback={deleteItemCallback} listed={listed(item)}/>
    })}
  </div>)
}