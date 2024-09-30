import React,{useState} from 'react'
//import allfruits from '../Data/Fruits'
import axios from 'axios'
//import '../../node_modules/bootstrap/dist/css'

function Product({addtoMyCart}) {
  const [allFruits,setallfruits]=useState([])
  const [newCartItem,setCartItem]=useState([])
  
  
  const showAll=()=>{
    axios.get("http://localhost:9000/api/getAllFruits")
    .then(response=>{
      setallfruits(response.data)
    })
  }
  return (
    <div>
    <div><h3 style={{color:'red'}}> My Product</h3></div>
    <button onClick={showAll}  className='btn btn-primary'>Show details</button>
    <ul id='fruits' className='list-group-item m-2' style={{listStyle:'none',width:'700px'}}> 
   
    {allFruits.map((fruit,key)=><li id={key}><span style={{display:'inline-block',width:'100px',textAlign:'left'}}>{fruit.fid}
    </span><span style={{display:'inline-block',width:'140px'}}>{fruit.fname}</span>
    <span style={{display:'inline-block',width:'140px'}}>{fruit.price}</span>
    <button onClick={()=>addtoMyCart(fruit)} className='btn btn-primary m-2'>Add to Cart</button></li>)}
    </ul>
   
    </div>
    
  )
}

export default Product