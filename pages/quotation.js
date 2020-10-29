import React from "react"
import refreshIcon from "../img/refresh.svg"
function Quotation({quoteText, quoteAuthor, quoteGenre}) {
    const handleClick = (e) => {
        console.log("click");
    }
    return (
        <div>
            <h3><q>{quoteText}</q></h3>
            <div className="random">
                <span>random</span>
                <button onClick={handleClick} className="random-btn"><img src={refreshIcon} /></button>
            </div>
            <div className="author">
                <p><a href="/">{quoteAuthor}</a></p>
                <span>{quoteGenre}</span>
            </div>
        </div>
    )
}
export default Quotation;