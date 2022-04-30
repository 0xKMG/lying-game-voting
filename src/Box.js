import React from "react"

export default function Box(props) {


    return (
        <div className="Box">

            <button onClick={props.toggleBox}>{props.isTrue ? "✅ " : "❌ "}</button>
            <p>{props.description}</p>

        </div>
    )
}