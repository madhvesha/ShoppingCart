import React, { useEffect,useState } from 'react'
import { Trash } from 'react-bootstrap-icons'

function Cart({mycart,handleCount,setCart}) {
  const [gtotal,setTotal]=useState(0);
  const computeGtotal=()=>{
    let total=0
    {mycart.map(item=>{
      total+=item.price*item.amount
    })}
    setTotal(total)
  }
  const removeItem=(id)=>{
    const filteredArray=mycart.filter((item)=>item.fid!==id);
    console.log()
    setCart(filteredArray)
  }
  useEffect(()=>{
    computeGtotal()
  })
  return (
    <div>
      <h1 style={{color:'blue'}}>Cart</h1>
      <ul style={{listStyle:'none',width:'700px'}}>
        {mycart.map((cartItem,key)=><li className='list-group-item m-1' id={key}>
        <span style={{display:'inline-block', width:'180px'}}>{cartItem.fname}</span>
        <span style={{display:'inline-block', width:'80px'}}>{cartItem.price}</span>
        <span style={{display:'inline-block', width:'60px'}}><button onClick={()=>{handleCount(cartItem,'+')}} className='btn btn-info m-2'>+</button></span>
        <span style={{display:'inline-block', width:'30px'}}>
        {cartItem.amount}
        </span>
        <span style={{display:'inline-block', width:'60px'}}><button onClick={()=>{handleCount(cartItem,'-')}} className='btn btn-warning m-2'>-</button></span>
        <span style={{display:'inline-block', width:'30px'}}>{cartItem.price*cartItem.amount}</span>
        <span style={{display:'inline-block', width:'50px'}}><Trash onClick={()=>removeItem(cartItem.fid)}  color="red" size={15} /></span>

        
        </li>)}
        <span>
          <h3 style={{background:'yellow',color:'red',fontStyle:'bold',margin:'170px',borderRadius:'10px'}}>Amount to Pay Rs.{gtotal}</h3>
        </span>
      </ul>
      </div>
  )
}

export default Cart
