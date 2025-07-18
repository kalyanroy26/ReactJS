import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Card } from './components/card'

function App() {
  const [user, setuser] = useState(0)

  useEffect(()=>{
    axios.get('https://dummyjson.com/users/1')
    .then((res)=>setuser(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <>
    <Card {...user}>
          <h2>User Details</h2>    
    </Card>

    </>
  )
}

export default App
