//jshint esversion:6

fetch('https://quotes.rest/qod')
  .then(response => {
    console.log({response});

    return response.json();   //conversion to json
  }).then(data => {
      console.log('Data',data.contents.quotes[0].quote);
      document.getElementById("QOD").textContent=data.contents.quotes[0].quote;
  });

function Generate(){


//   // console.log(randomIndex);
  // console.log(newQuotes[randomIndex].quote);

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var maxIndices = data.length;
    var randomIndex1 = Math.floor(Math.random()*maxIndices);
    console.log(randomIndex1);
    document.querySelector("p").innerHTML ='"'+data[randomIndex1].text+'"';
    document.querySelector(".cite").innerHTML="-"+data[randomIndex1].author;
    console.log(data[randomIndex1].author);

  });


  // document.querySelector("p").innerHTML ='"'+newQuotes[randomIndex].quote+'"';
  // document.querySelector(".cite").innerHTML="-"+newQuotes[randomIndex].cite;

}
