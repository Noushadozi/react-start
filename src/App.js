import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(()=>{} ,[])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data))
  })
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border:'2px solid red', margin:'20px'}}>
     <h3>Name:{props.name}</h3>
     <h3>Name:{props.email}</h3>
    </div>
  )
}

export default App;


// function Counter() {
//   const [count, setCount] = useState(1000000000000);
//   const IncreaseCount = () => {
//     setCount(count + 1);
//   };
//   const DecreaseCount = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={IncreaseCount}>Increase</button>
//       <button onClick={DecreaseCount}>Decrease</button>
//     </div>
//   );
// }
// const products = [
//   {name:"laptop", price:"120000"},
//   {name:"phone", price:"100000"},
//   {name:"watch", price:"5000"},
//   {name:"PC", price:"150000"},
// ];

// {
//   products.map(product => <Product  name={product.name} price={product.price}></Product>)
// }

// {/* <Product name="laptop" price="120000"></Product>
// <Product name="phone" price="100000"></Product>
// <Product name="watch" price="5000"></Product> */}

// function Product(props) {
//   return (
//     <div className="product">
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }
