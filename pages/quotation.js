import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import refreshIcon from "../img/refresh.svg"
function Quotation({quoteText, quoteAuthor, quoteGenre}) {

    const handleClick = (e) => {
        window.location.reload();
    }
    const authorHandleClick = (e) => {
        // fetchAuthorName()
    }
    console.log(quoteAuthor);
    return (
        <div>
            <p><q>{quoteText}</q></p>
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