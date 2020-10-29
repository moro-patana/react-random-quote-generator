import React from "react"
import refreshIcon from "../img/refresh.svg"
function Quotation({quoteText}) {
    return (
        <div>
            <p><q>{quoteText}</q></p>
            <div className="random">
                <span>random</span>
                <button className="random-btn"><img src={refreshIcon} /></button>
            </div>
            <div className="author">
                <p><a href="/">Author</a></p>
                <span>Job</span>
            </div>
        </div>
    )
}
export default Quotation;