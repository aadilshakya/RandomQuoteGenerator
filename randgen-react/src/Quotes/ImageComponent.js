import React from "react";
import developer from "../img/developer.png"


const imageComponent = (props)=>{
    return(
        <div>
            <img className="developerImg" src={props.source}>

            </img>
        </div>
    );
}

export default imageComponent;