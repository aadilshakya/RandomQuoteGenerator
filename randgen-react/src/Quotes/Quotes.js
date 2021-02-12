import React from "react";
const quotes= (props) => {
    return (<div>
        <p className="quotations">{props.quotation}</p>
        <p className="cite">{props.author}</p>
    </div>);
}
export default quotes;