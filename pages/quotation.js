import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import refreshIcon from "../img/refresh.svg"
// const authorLink = "https://quote-garden.herokuapp.com/api/v2/authors/"
// const maxPage = "?page=1&limit=10"
function Quotation({quoteText, quoteAuthor, quoteGenre}) {
    // const { authorName } = useParams()
    // const [author, setAuthor] = useState({})

    // async function fetchAuthorName() {
    //     const response = await fetch(authorLink + authorName + maxPage)
    //     const dataAuthor = await response.json()
    //     setAuthor(dataAuthor);
    //     console.log(dataAuthor);
    // }
    // useEffect(() => {
    //     fetchAuthorName()
    // },[])
    const handleClick = (e) => {
        window.location.reload();
    }
    const authorHandleClick = (e) => {
        // fetchAuthorName()
    }
    console.log(quoteAuthor);
    return (
        <div>
            <h3><q>{quoteText}</q></h3>
            <div className="random">
                <span>random</span>
                <button onClick={handleClick} className="random-btn"><img src={refreshIcon} /></button>
            </div>
            <Link to={`/authors/${quoteAuthor}`}>
                <button className="author">
                    <span>{quoteAuthor}</span>
                    <span>{quoteGenre}</span>
                </button>
                </Link>
            </div>
    )
}
export default Quotation;