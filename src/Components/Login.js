import { Alert } from 'bootstrap'
import React, { useState } from 'react'

function Login({setLoginStatus}) {
    const [user,setUser]=useState("")
    const [Password,setPassword]=useState("")
    const authenticateUser=()=>{
       if(user==="mlp" && Password==="123"){
       alert("welcome "+user)
       setLoginStatus(true)
       }
    else
    alert("Access Denied")
    }
  return (
    <div>
        <h1>Login</h1>
        <input className='form-control w-25 m-2' value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Login' ></input>
        <input className='form-control w-25 m-2' value={Password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
        <button onClick={()=>authenticateUser()} className='btn btn-primary'>Login</button>
        
        
        </div>
  )
}

export default Login