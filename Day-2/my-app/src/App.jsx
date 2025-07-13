import './App.css'
import MyButton from './components/button'
import { Heading1, Heading2, Heading3, Heading4 } from './components/heading'
import { Ordlist, Unordlist } from './components/list'
import { Logo } from './components/image'
import react from './assets/react.svg'
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)

  function counter(){
    setCount(count+1)
  }
  return (
    <div>
      {/* <Logo src={react}></Logo>
      <Heading1 title="Ordered List"></Heading1>
      <Ordlist></Ordlist> */}

      <h2>you have clicked {count}</h2>
      <MyButton onClick = {counter}></MyButton>
    </div>
  )
}

export default App