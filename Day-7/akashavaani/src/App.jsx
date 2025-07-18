import { useState, useEffect } from 'react'
import './App.css'
import { Nav } from './components/navbar'
import { Card } from './components/card'
import { Button } from './components/button'
import axios from 'axios'

function App() {
  const [news, setnews] = useState([])
  const [keyword, setkeyword] = useState('')
  const API_KEY = "fe6dddd98b3b41d6ade53037886ca974"
  const url = "https://newsapi.org/v2/everything?"
  const top_url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

  const getData = async () => {
    try {
      const response = await axios.get(`${url}q=${keyword}&apiKey=${API_KEY}`)
      const data = await response.data
      setnews(data.articles)
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  useEffect(() => {

    const homeData = async () => {
      try {
        const response = await axios.get(top_url)
        const data = response.data
        setnews(data.articles)
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    homeData()

  }, [])

  return (
    <>
      <Nav keyword={keyword} setkeyword={setkeyword} getData={getData}></Nav>
      <div className="main">
        {
          news.map((item, index) => (
            <Card
              key={index}
              {...item}
            >
              <Button url={item.url}></Button>
            </Card>
          ))
        }
      </div>
    </>
  )
}

export default App
