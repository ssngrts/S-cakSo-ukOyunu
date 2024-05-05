let msg1= document.getElementById("msg1");
let msg2= document.getElementById("msg2");
let msg3= document.getElementById("msg3");

let answer= Math.floor( Math.random()*100)+1;
let guess= 0;
let guesNum= [];

function play() {
    let userGuess= document.getElementById("find").value;

    if(userGuess<1|| userGuess>100){
        alert("Lütfen 1-100 arasında bir sayı yazın. ")
    }else{
        guesNum.push(userGuess);
        guess+= 1;
        if(userGuess<answer){
            msg1.innerHTML= "SOĞUK";
            msg2.innerHTML= "Tahmin yok: " + guess;
            msg3.innerHTML= "Tahmin edilen sayılar:" + guessNum;
        }else if(userGuess>answer){
            msg1.innerHTML= "SICAK";
            msg2.innerHTML= "Tahmin yok: " + guess;
            msg3.innerHTML= "Tahmin edilen sayılar:" + guessNum;
        }else if(userGuess=answer){
            msg1.innerHTML= "TEBRİKLER BULDUN";
            msg2.innerHTML= "Sayı: " + guess;
            msg3.innerHTML= guess  + "tahminde sonucu buldun 👍";
        }
    }
}

const input = document.getElementById('find');

input.addEventListener('keypress', function(e) {
  const regex = /[0-9]/;
  if (!regex.test(String.fromCharCode(e.keyCode))) {
    e.preventDefault();
  }
});