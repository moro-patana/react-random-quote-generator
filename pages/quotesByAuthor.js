import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import backArrowIcon from "../img/backArrow-icon.svg"
const authorLink = "https://quote-garden.herokuapp.com/api/v2/authors/"
const maxPage = "?page=1&limit=10"

function QuotesByAuthor({ quotes }) {
    const { authorName } = useParams()
    const [author, setAuthor] = useState([])
    console.log(authorName)
    async function fetchAuthorName() {
        const response = await fetch(authorLink + authorName + maxPage)
        const dataAuthor = await response.json()
        setAuthor(dataAuthor.quotes);
        console.log(dataAuthor.quotes);
    }
    useEffect(() => {
        fetchAuthorName()
    },[])
    return (
        <div className="container">
            <ul>
                {author.map((list) => (
                    <li key={list.id}><q>{list.quoteText}</q></li>
                ))}
            </ul>
            <Link to="/"><img src={backArrowIcon}/></Link>
        </div>
    )
}
export default QuotesByAuthor;