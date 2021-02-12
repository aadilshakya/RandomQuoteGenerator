import React, { useState } from 'react';
import Quotes from './Quotes/Quotes';
import imge from './img/developer.png';
import imge2 from './img/developer2.png';
import ImageComponent from './Quotes/ImageComponent';
import './App.css';

const App = (props) => {

  const [quoteHolder,setQuoteholder]= useState("This is random quote generator");
  const [authorHolder, setAuthorHolder]=useState("- authors");



  const generateQuotesHandler= () =>{
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      console.log(response);
    return response.json();
    })
    .then(function(data) {
    var maxIndices = data.length;
    var randomIndex1 = Math.floor(Math.random()*maxIndices);
    console.log(data[randomIndex1])
    console.log(randomIndex1);
    setQuoteholder(data[randomIndex1].text);
    setAuthorHolder(data[randomIndex1].author);
    // document.querySelector(".cite").innerHTML="-"+data[randomIndex1].author;
    // console.log(data[randomIndex1].author);

    });
    // const objectLength = quoteObjects.quotes.length;
    // console.log(objectLength);
    // const randomNumber = Math.floor(Math.random()*objectLength);
    // console.log(randomNumber);
    
  }

  
  return (
    <div className="App">
      <h1>Random Quote generator</h1>
      <Quotes  quotation={quoteHolder} author={authorHolder}/>
      {/* <Quotes quotation={this.state.quotes[0].quote}/> */}
      <ImageComponent source={imge}/>
      {/* <ImageComponent source={imge2}/> */}
      <button className="btn btn-danger" onClick={generateQuotesHandler}>Generate Quotes</button>
    </div>
  );
  }


export default App;
