import React from "react";
const quotes= (props) => {
    return (<div>
        <p>{props.quotation}</p>
        <p>{props.author}</p>
    </div>);
}
export default quotes;