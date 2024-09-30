import React, {useEffect, useState} from 'react'
import './counter.css'
import { Cart } from 'react-bootstrap-icons';
import { Lock } from 'react-bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
function Counter({gCounter,setLoginStatus}) {
  //let counter=params.gCounter;
  useEffect(()=>{
     
  },[gCounter])
  const logout=()=>{
    setLoginStatus(false)
  }
  return (
    <div>
    <div>
    <h1 className='counter'>{gCounter}</h1>
    <Cart color="green" size={36} />
    </div>
    
    <i onClick={()=>logout()} style={{fontSize:'40px'}} class="bi bi-box-arrow-left"></i>
    </div>
  )
}

export default Counter