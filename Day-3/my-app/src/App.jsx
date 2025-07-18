import './App.css'
import { Greeting } from "./components/greet";
import { ProfileCard } from './components/profile-card';
import image from './assets/image.png'
import { Todo } from './components/todo';
import { Alert } from './components/alertbox';
import { ProductCard } from './components/productCard';
import { useState,useEffect } from 'react';

let tasks = ["Buy groceries", "Study React", "Go for a walk", "Read Book"]

function App() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function getProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log("Error: ",error.message);
        
      }
    }

    getProducts()
  },[])

  return (
    <>
      {/* <Greeting name="Kalyan Roy"></Greeting>
    <Greeting name="Naveen"></Greeting>
    <Greeting name="Shantha"></Greeting> */}
      {/* <div className='users'>
        <ProfileCard name="kalyan" role="Mern Dev" pic={image} height="200"></ProfileCard>
        <ProfileCard name="naveen" role="Best Friend" pic={image} height="200"></ProfileCard>
        <ProfileCard name="shantha" role="Mother" pic={image} height="200"></ProfileCard>

      </div> */}

      {/* <h1>Todo List</h1>
        {tasks.map(function (task, index) {
          return <Todo task = {task} key = {index}></Todo>
        })}
         */}

      {/* <div className='card-container'>
          <Alert message = "Success" type="success"></Alert>
          <Alert message = "Warning" type="error"></Alert>
          <Alert message = "Error" type = "warning"></Alert>
          <Alert message = "unknown" type = ""></Alert>
          </div> */}


      <div className='card-container'>
        {
        products.map((product,index) => (
          <ProductCard
            key = {index}
            title={product.title}
            src={product.image}
            alt={product.title}
            price={product.price}>
          </ProductCard>
        )
      )
      }
      </div>




    </>

  )
}

export default App