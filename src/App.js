// import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const products = [
    {name :"PhotoShop", price :"55.369"},
    {name :"Illustrator", price :"15.99"},
  ]
  
  return (
    <div className="App">
      <header className='App-header'>
       <p>I'm a React Person.</p>
       <Count></Count>
        {
          products.map(product => <Product products={product}></Product>)
        }
       <Users></Users>
       <Person name="Elias K" job="football"></Person>
       <Person name="Joshim" job="dorshok"></Person>
      </header>     
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="">
      <h2>Dynamic User :{users.length}</h2>
    </div>
  )
}


function Count(){
  const btnCss = {
    padding:'20px 15px',
    color:'aqua',
    borderRadius:'10px',
    backgroundColor:'#e378c1',
    border:'none',
    fontSize:'20px',
    cursor:'pointer',
    marginLeft:'10px'
  }
  const [countNum, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = countNum + 1;
    setCount(countNum + 1);
  }
  return (
    <div className="">
      <h2>Count : {countNum}</h2>
      <button style={btnCss} onClick={handleIncrease}>Increase</button>
      <button style={btnCss} onClick={() => setCount(countNum - 1)}>Decrease</button>
    </div>
  )
}

function Product(props){
 
  const productCss = {
    color:'cyan',
    backgroundColor:"lightgray",
    height:'200px',
    width:'200px',
    float:'left',
    border:'1px solid #ddd',
    borderRadius:'10px',
    fontSize:'12px',
    margin:"20px 0",
    float:'left',
  }
  const {name,price} = props.products;
 console.log(name,price);
  return (
    <div style={productCss}>
      <h1>{name}</h1>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personCss = {
    color:'red',
    fontSize:'22px',
    backgroundColor:'green',
    marginBottom:'10px',
    padding:'10px'
  }
  return (
    <div style={personCss}>
      <h2>My name: {props.name}</h2>
      <h2>Actress: {props.job }</h2>
    </div>
  )
}

export default App;
