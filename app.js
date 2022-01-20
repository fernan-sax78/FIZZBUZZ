(function(){
"use strict";



let tablaUno = document.querySelector(".span1");
let tablaDos = document.querySelector(".span2");
let tablaTres = document.querySelector(".span3");
let tablaCuatro = document.querySelector(".span4");

let fragmentos = document.createDocumentFragment();

function esDivisible(numero,divisible){
    if (numero % divisible == 0) {
        return true;
    }else{
        return false;
    }
}

// de 1 a 25//


for (let i = 1; i <= 25; i++) {
  
   

  let numerosDisplay = document.createElement("SPAN");
  
  fragmentos.appendChild(numerosDisplay);
  tablaUno.appendChild(fragmentos);

  if (esDivisible(i,3)) {
      numerosDisplay.innerHTML = "FIZZ";
      numerosDisplay.style.background = "#ddd";

      
  }

  if (esDivisible(i,5)) {
        
    numerosDisplay.innerHTML = "BUZZ";
    numerosDisplay.style.background = "#45a8eb";
 
}

if (esDivisible(i,3) && esDivisible(i,5)) {
    numerosDisplay.innerHTML = "FIZZBUZZ";
    numerosDisplay.style.background = "#5cb44d";
}

if (!esDivisible(i,3) && !esDivisible(i,5)) {
    numerosDisplay.innerHTML = i;
}
    
}

//de 26 a 50

for (let i = 26 ; i <= 50; i++) {

   
  
    let numerosDisplay = document.createElement("SPAN");
   
    fragmentos.appendChild(numerosDisplay);
    tablaDos.appendChild(fragmentos);

    if (esDivisible(i,3)) {
        numerosDisplay.innerHTML = "FIZZ";
        numerosDisplay.style.background = "#ddd";
  
        
    }
  
    if (esDivisible(i,5)) {
          
      numerosDisplay.innerHTML = "BUZZ";
      numerosDisplay.style.background = "#45a8eb";
   
  }
  
  if (esDivisible(i,3) && esDivisible(i,5)) {
      numerosDisplay.innerHTML = "FIZZBUZZ";
      numerosDisplay.style.background = "#5cb44d";
  }
  
  if (!esDivisible(i,3) && !esDivisible(i,5)) {
      numerosDisplay.innerHTML = i;
  }
    }
      
  //de 51 a 75


  for (let i = 51; i <= 75; i++) {

   
  
    let numerosDisplay = document.createElement("SPAN");
    
    fragmentos.appendChild(numerosDisplay);
    tablaTres.appendChild(fragmentos);

    if (esDivisible(i,3)) {
        numerosDisplay.innerHTML = "FIZZ";
        numerosDisplay.style.background = "#ddd";
  
        
    }
  
    if (esDivisible(i,5)) {
          
      numerosDisplay.innerHTML = "BUZZ";
      numerosDisplay.style.background = "#45a8eb";
   
  }
  
  if (esDivisible(i,3) && esDivisible(i,5)) {
      numerosDisplay.innerHTML = "FIZZBUZZ";
      numerosDisplay.style.background = "#5cb44d";
  }
  
  if (!esDivisible(i,3) && !esDivisible(i,5)) {
      numerosDisplay.innerHTML = i;
  }
      
  }

// de 76 a 100
  
  for (let i = 76 ; i <= 100; i++) {

   
    
      let numerosDisplay = document.createElement("SPAN");
      
      fragmentos.appendChild(numerosDisplay);
      tablaCuatro.appendChild(fragmentos);


      if (esDivisible(i,3)) {
        numerosDisplay.innerHTML = "FIZZ";
        numerosDisplay.style.background = "#ddd";
  
        
    }
  
    if (esDivisible(i,5)) {
          
      numerosDisplay.innerHTML = "BUZZ";
      numerosDisplay.style.background = "#45a8eb";
   
  }
  
  if (esDivisible(i,3) && esDivisible(i,5)) {
      numerosDisplay.innerHTML = "FIZZBUZZ";
      numerosDisplay.style.background = "#5cb44d";
  }
  
  if (!esDivisible(i,3) && !esDivisible(i,5)) {
      numerosDisplay.innerHTML = i;
  }
        
 }

    
    



}());