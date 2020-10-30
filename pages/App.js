import React, { useEffect, useState } from "react"
import Quotation from "./quotation.js"
import QuotesByAuthor from "./quotesByAuthor.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random"
function App() {
  const [quote, setQuote] = useState([])

  async function fetchData() {
      const res = await fetch(url);
      const data = await res.json()
      setQuote(data.quote);
      console.log(data.quote);
  }
  useEffect(() => {
     fetchData()
  }, [])
    return (
        <Router >
            <Switch>
                <Route path='/authors/:authorName'>
                    <QuotesByAuthor/>
                </Route>
                <Route path='/'>
                <Quotation {...quote}/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App;