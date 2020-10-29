import React, { useEffect, useState } from "react"
const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random"
function App() {
  const [quote, setQuote] = useState([])
  const [author, setAuthor] = useState("")

  async function fetchData() {
      const res = await fetch(url);
      const data = await res.json()
      setQuote(data);
      console.log(data);
  }

  useEffect(() => {
     fetchData()
  }, [])
    return (
        <h1>Hello</h1>
    )
}
export default App;