import React, { useEffect, useState } from "react"
import Quotation from "./quotation.js"
const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random"
function App() {
  const [quote, setQuote] = useState([])
  const [author, setAuthor] = useState("")

  async function fetchData() {
      const res = await fetch(url);
      const data = await res.json()
      setQuote(data.quote);
      console.log(data);
  }
 async function fetchData() {
      const res = await fetch(url);
      const data = await res.json()
      setQuote(data.quote);
      console.log(data);
  }

  useEffect(() => {
     fetchData()
  }, [])
    return (
        <Quotation {...quote}/>
    )
}
export default App;