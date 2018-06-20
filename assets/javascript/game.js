console.log("my javascript is linked")
var goal;
var counter;

var images = imageArray = [
    "assets/images/pink.png", 
    "assets/images/diamond.jpg", 
    "assets/images/silver.jpg", 
    "assets/images/emerald.jpg"
];

function setGoal(){
    goal = Math.floor(Math.random() * (120 - 19 + 1 )) + 19 ;
    console.log("goal: " + goal);
}

function startGame(){
    counter = 0;
    setGoal();
    processCrystals();
}

function processCrystals() {
    // $("#crystals").html("");
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * (12 - 1 + 1 )) + 1;
        $("#crystals").append(
            "<img id='crystal" + i + "' class='crystal' value=" + randomNumber + " src=" + imageArray[i] + ">",           
            "<div class='crystal"+ i + "'></div>"   
        )
    }
}

$(document).on("click", ".crystal", function(){
  counter += parseInt($(this).attr("value"))
  crystalId = $(this).attr("id");
  $("#" + crystalId).html("");
  $("#" + crystalId).append($(this).attr("value"))
  if (counter === goal){
    alert("you win");
    startGame();
  }
  else if (counter > goal){

  }
  else{
      console.log("good Play");
  }
})

startGame();


