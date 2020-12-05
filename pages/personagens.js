
function clicou(){
    const select= document.querySelector("#select");
    console.log(select.value);
    const personagem = select.value;
    if( personagem === "Jiraya"){
       window.location.href = "jiraya.html"; 
   } else if ( personagem === "Tsunade"){
       window.location.href ="tsunade.html";
  } else if (personagem === "Orochimaru"){
       window.location.href ="orochimaru.html";
  } 


}