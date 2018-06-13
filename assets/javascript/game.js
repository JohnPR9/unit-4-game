console.log("my javascript is linked")
var random;
var userTotal;

function generateNumber() {
  
    var random = Math.floor(Math.random() * ((120-19)+1 + 5));
    Math.floor(Math.random() * 6 + 5);
 
    console.log("Random Computer Generator", random);

    return random;

}

var cgRandom = generateNumber();
console.log("cgRandom", cgRandom)
$("#cScore").text(cgRandom);

function userGenerated(pink, crystal, silver, red) {

    var random = Math.floor(Math.random() * ((12-1)+1 + 5));
    Math.floor(Math.random() * 6 + 5);

    var ugRandom = random;
    
    console.log("Random User Guess Random", ugRandom);

    return ugRandom;
}

var userScore = userGenerated();
userTotal = userScore;
$("#pink").text(userScore);
// console.log("Random Pink Function pinkScore", pinkScore);
// console.log("Random Pink Function userTotal", userTotal);

