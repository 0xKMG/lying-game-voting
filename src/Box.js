import React from "react"

export default function Box(props) {


    return (
        <div className="Box">

            <h1 onClick={props.toggleBox}>{props.isTrue ? "✅ " : "❌ "}</h1>
            <p>{props.description}</p>

        </div>
    )
}