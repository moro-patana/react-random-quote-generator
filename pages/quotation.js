import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import refreshIcon from "../img/refresh.svg"
import arrowIcon from "../img/arrow-icon.svg"
function Quotation({quoteText, quoteAuthor, quoteGenre, handleClick}) {

    const authorHandleClick = (e) => {
        // fetchAuthorName()
    }
    console.log(quoteAuthor);
    return (
        <div className="card-quotes">
            <div className="random">
                <span>random</span>
                <button onClick={handleClick} className="random-btn"><img src={refreshIcon} /></button>
            </div>

            <p><q> {quoteText} </q></p>
            <div className="buttons">
                <Link to={`/authors/${quoteAuthor}`}>
                    <button className="author">
                        <span>{quoteAuthor}</span>
                        <span>{quoteGenre}</span>
                        <img src={arrowIcon}/>
                    </button>
                </Link>
            </div>
            </div>
    )
}
export default Quotation;