var quotes =["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
"Be yourself; everyone else is already taken.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
"We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.",
"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart"];
function Generate(){

  var max= quotes.length;
  var randomIndex = Math.floor(Math.random(0,max)*4);
  console.log(randomIndex);
  document.querySelector("p").innerHTML ='"'+ quotes[randomIndex]+'"';

}
