import { useEffect, useState } from 'react'
import './App.css'
import { FormInput } from './components/form'
import { Mybutton } from './components/button'
import { Card } from './components/card'

function App() {
  const [text, setText] = useState(0)
  
  return (
    <>
    <h2>Live Charcter Count</h2>
      <FormInput count={text.length} setText={setText} ></FormInput>
      {/* <Card>
        <h2>Counter: {count}</h2>
        <div className="btn-container">
          <Mybutton type='increase' onClick = {()=>setcount(count+1)} color = "#1fab69"></Mybutton>
          <Mybutton type='decrease' onClick = {()=>count>0?setcount(count-1):setcount(0)} color = '#1b64ad'></Mybutton>
          <Mybutton type='reset' onClick = {()=>setcount(0)} color = '#f7de22ff'></Mybutton>
        </div>
      </Card> */}
    </>
  )
}

export default App
