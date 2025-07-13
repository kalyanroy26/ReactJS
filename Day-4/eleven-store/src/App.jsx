import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import './component.css'
import { ProductCard } from './components/card'
import { Navbar } from './components/navbar'
function App() {
  const [products, setProduct] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => console.log("Error: ", err.message))
  }, [])


  return (
    <>
      <div className='container'>
        <Navbar logo="Eleven Store"></Navbar>
        <div className='main'>
          {
            products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
              >

              </ProductCard>
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
