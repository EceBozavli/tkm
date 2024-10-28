// tasBtn.addEventListener('click', pickUp);
// kagitBtn.addEventListener('click', pickUp);
// makasBtn.addEventListener('click', pickUp);
// rulesBtn.addEventListener('click', gameRules);
// playAgain.addEventListener('click', reset);

tasBtn.addEventListener("click",tasSecimi);
kagitBtn.addEventListener("click",kagitSecimi);
makasBtn.addEventListener("click",makasSecimi);
// delScors.addEventListener('click',resetprogramı);
// rulesBtn.addEventListener('click', gameRules);
// winner.addEventListener('click',winnerprogramı);
// playAgain.addEventListener('click', resetprogramı);
// random.addEventListener("click",randomSecimi);

let oyuncuHamlesi = ['taş', 'kağıt', 'makas'];
let score=12;

// let oyuncuskor= 0;
// let bilgisayarskor= 0;
// deneme=0

function tasSecimi() {
  oyuncuHamlesi="taş"
  randomSecimi();
  // alert(oyuncuHamlesi);
   }
function kagitSecimi() {
    oyuncuHamlesi="kağıt"
    randomSecimi();
    // alert(oyuncuHamlesi);
   }
function makasSecimi() {
    oyuncuHamlesi="makas"
    randomSecimi();
    // alert(oyuncuHamlesi);
   }


function randomSecimi() {
    let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));
    oyuncu.innerText = oyuncuHamlesi;
    bilgisayar.innerText = bilgisayarHamlesi;
    // alert(bilgisayarHamlesi);

  if(oyuncuHamlesi==bilgisayarHamlesi) {

  alert('Berabere kaldınız');

  } 
  else if (oyuncuHamlesi=="taş" && bilgisayarHamlesi=="kağıt" ) {
  
  
  score--;
  countScore.innerText = score;


  alert('oyuncu hamlesi=taş, bilgisayar hamlesi=kağıt. Kaybettiniz, bilgisayar kazandı');

  }
  else if (oyuncuHamlesi=="taş" && bilgisayarHamlesi=="makas") {


  score++;
  countScore.innerText = score;

  alert('oyuncu hamlesi=taş, bilgisayar hamlesi=makas.Tebrikler, kazandınız');

  }
  else if (oyuncuHamlesi=="kağıt" &&  bilgisayarHamlesi=="taş") {


  score++;
  countScore.innerText = score;

  alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=taş.Tebrikler, kazandınız');

  }
  else if (oyuncuHamlesi=="kağıt" &&  bilgisayarHamlesi=="makas") {

 
  score--;
  countScore.innerText = score;


  alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=makas.Kaybettiniz, bilgisayar kazandı');
  
  }
  else if (oyuncuHamlesi=="makas" &&  bilgisayarHamlesi=="taş") {

  
  score--;
  countScore.innerText = score;


  alert('oyuncu hamlesi=makas, bilgisayar hamlesi=taş.Kaybettiniz, bilgisayar kazandı');
  
  }
  else if (oyuncuHamlesi=="makas" &&  bilgisayarHamlesi=="kağıt") {

  score++;
  countScore.innerText = score;

  alert('oyuncu hamlesi=makas, bilgisayar hamlesi=kağıt. Tebrikler, kazandınız');

  }
  else {

  alert('hatalı giriş yaptınız!');

  }
} 

function resetprogramı () {
  // oyuncuskor=0;
  // bilgisayarskor=0;
  score=12;
  oyuncuHamlesi = ['taş', 'kağıt', 'makas'];
  countScore.innerText = score;
  // countPlayer.innerText = oyuncuskor;
  // countComputer.innerText = bilgisayarskor;
}

// function winnerprogramı () {

//   if (oyuncuskor > bilgisayarskor) {
//     alert('Tebrikler Oyuncu Kazandı');
//   }

//   else if (oyuncuskor < bilgisayarskor) {
//     alert('Üzgünüz Kaybettiniz Bilgisayar Kazandı');
//   }
  
//   else {
//     alert('Berabere Kaldınız');
//   }
// }




// tasBtn.addEventListener('click', pickUp);
// kagitBtn.addEventListener('click', pickUp);
// makasBtn.addEventListener('click', pickUp);
// rulesBtn.addEventListener('click', gameRules);
// playAgain.addEventListener('click', reset);

// let oyuncuHamlesi = ['.tasBtn', '.kagitBtn', '.makasBtn'];


// function pickUp() {
//   if(oyuncuHamlesi==bilgisayarHamlesi) {

//     alert('Berabere kaldınız');
  
//     } 
//     else if (oyuncuHamlesi== tasBtn && bilgisayarHamlesi== kagitBtn ) {
    
    
//     // bilgisayarskor++;
//     // countComputer.innerText = bilgisayarskor;
  
  
//     alert('oyuncu hamlesi=taş, bilgisayar hamlesi=kağıt. Kaybettiniz, bilgisayar kazandı');
  
//     }
//     else if (oyuncuHamlesi== tasBtn && bilgisayarHamlesi== makasBtn) {
  
  
//     // oyuncuskor++;
//     // countPlayer.innerText = oyuncuskor;
  
//     alert('oyuncu hamlesi=taş, bilgisayar hamlesi=makas.Tebrikler, kazandınız');
  
//     }
//     else if (oyuncuHamlesi==kagitBtn &&  bilgisayarHamlesi== tasBtn) {
  
  
//     // oyuncuskor++;
//     // countPlayer.innerText = oyuncuskor;
  
//     alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=taş.Tebrikler, kazandınız');
  
//     }
//     else if (oyuncuHamlesi==kagitBtn &&  bilgisayarHamlesi== makasBtn) {
  
   
//     // bilgisayarskor++;
//     // countComputer.innerText = bilgisayarskor;
  
  
//     alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=makas.Kaybettiniz, bilgisayar kazandı');
    
//     }
//     else if (oyuncuHamlesi== makasBtn &&  bilgisayarHamlesi== tasBtn) {
  
    
//     // bilgisayarskor++;
//     // countComputer.innerText = bilgisayarskor;
  
  
//     alert('oyuncu hamlesi=makas, bilgisayar hamlesi=taş.Kaybettiniz, bilgisayar kazandı');
    
//     }
//     else if (oyuncuHamlesi== makasBtn &&  bilgisayarHamlesi== kagitBtn) {
  
//     // oyuncuskor++;
//     // countPlayer.innerText = oyuncuskor;
  
//     alert('oyuncu hamlesi=makas, bilgisayar hamlesi=kağıt. Tebrikler, kazandınız');
  
//     }

// }