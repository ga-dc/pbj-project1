
whichClickAreWeOn = 1
firstGuess=null
secondGuess=null
function compare(){console.log("compare successful")}

var select = document.querySelectorAll(".clickable");
console.log(select);

for (var i=0;i<select.length;i++){
  select[i].addEventListener("click",function(){
    //console.log(this.getAttribute("name"));
      if (firstGuess == null){
    firstGuess=this.getAttribute("name");
    console.log("Your first guess is "+ firstGuess);}
      else{
        secondGuess=this.getAttribute("name");
        console.log("your second guess is "+secondGuess);

        compare();
        
  firstGuess = null;
  secondGuess = null;
    }
      })
}

    /*

if(whichClickAreWeOn === 1){
  whichClickAreWeOn ++;
  }
if(whichClickAreWeOn === 2){
  //secondGuess=
  //console.log("You guessed " + secondGuess);
  //compare click1 and click2
  //if click1===click2{Success!}
  //else{code for failure}

whichClickAreWeOn =1;

}
  });
} */
