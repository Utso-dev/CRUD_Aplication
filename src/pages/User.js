import React, { useEffect, useState } from 'react'

const User = () => {
    // let isTrue = false;
    // let num = 100;
    let [count, setCount] = useState(0);
  
   
    let [info, setInfo] = useState({
      names : "",
      email : "",
      password : "",
    }); 
  let [store, setStore] = useState();
  
  const handelchange = (e) =>{
    const {name, value} = e.target;
    setInfo((prev)=>({
        ...prev,
        [name] : value,
    }));
  };
  const handelSubmite = () => {
     setStore(info);
  }
  
  let [load, setLoad]= useState();
  let [load1, setLoad1]= useState();
   useEffect(()=>{
    setLoad(load);
   },[])
   useEffect(()=>{
    setLoad1(load1);
   },[])
  const handelLoad =()=>{
    setLoad("my name is utso sarkar");
    setLoad1("my name is utso ");
  }
  return (
   <>
    <h1>my firs project {count}</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count +1)}>incrimant</button>
      <button onClick={()=>setCount(count -1)}>dicriment</button>
      <button onClick={()=>setCount(0)}> reset</button>
        {/* <Navbar value={isTrue ? "utso" : "rabbi"} titel="I'm web developer"/>
        <Navbar titel="I'm web designer"/>  */}
      {/* === templet itaral / backtic ==`c`=== bola */}
       {/* <Navbar a={`amar marks ${num} hoisa`} titel="I'm web ux/ui developer"/> */}

    {/* ===================== onChange function ======================== */}
     <input 
     onChange={handelchange} 
     name="names" 
     type="text" 
     value={info.names}
     placeholder="enter your name" 
     />
     <input 
     onChange={handelchange} 
     name="email" 
     type="email" 
     value={info.email}
     placeholder="enter your email" 
     />
     <input 
     onChange={handelchange} 
     name="password" 
     type="password" 
     value={info.password}
     placeholder="enter your password" 
     />
     
      <button onClick={handelSubmite}>submite</button>
     {
      store && <div>
      <h1>Name: {store ? store.names : ""}</h1>
      <p>Email: {store ? store.email : ""}</p>
      <p>Password: {store ? store.password : ""}</p>
    </div>
     }
      <h1>programmar ditails</h1>
      <p>{load}</p>
      <p>{load1}</p>
      <button onClick={handelLoad}>click</button>
    
   </>
  )
}

export default User
