import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Head from './Components/Head';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Counter from './Components/Counter'
import Login from './Components/Login'

function App() {
  const [warning,setWarning]=useState(false)
  const [gCounter,setgCounter]=useState(0);
  const [cart,addtoCart]=useState([])
  const [loginStatus,setLoginStatus]=useState(false)
 //let CartItem=[{fid:100,fname:"Apple",price:180}]
  
  const addtoMyCart=(product)=>{

    let isPresent=false;
    cart.forEach((item)=>{
      if(item.fid===product.fid)
       isPresent=true;
    }) 
    if(isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },1000)
    
      return;                  
    
    }                     
  else
    addtoCart([...cart,product]); 
    
  }
  const handleCount=(item,op)=>{
    let Index=-1
    {cart.forEach((data,index)=>{
        if(data.fid===item.fid)
            Index=index;
    })}
    const tempArr=cart
    if(op==='+')
    tempArr[Index].amount+=1
  else if(op==='-')
    tempArr[Index].amount-=1
    if(tempArr[Index].amount==0) tempArr[Index].amount=1
    addtoCart([...tempArr])
  }

  return (
   <React.Fragment>
    {loginStatus && 
    <div className="App">
    
      <div className='Headcount'>
      <Head />
      <Counter gCounter={cart.length} setLoginStatus={setLoginStatus} />
      </div>

      {
        warning && <div style={{background:'yellow',color:'red',marginLeft:'1000px',padding:'5px',width:'350px',borderRadius:'10px' }}>Product Already Exists </div>
      }
      <div className="Prodcat">
      <Product addtoMyCart={addtoMyCart} />
      <Cart mycart={cart}  handleCount={handleCount} setCart={addtoCart} />
      </div>
    </div>
    }
    {!loginStatus && <Login setLoginStatus={setLoginStatus} />}
    </React.Fragment>
  );
  
}

export default App;
