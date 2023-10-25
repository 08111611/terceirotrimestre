function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();}

document.querySelectorAll('.tecla');
const listaDeTeclas=document.querySelectorAll('.tecla');
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador < listaDeTeclas.leigth) {

   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   '#som_ $(instrumento)';
   console.log(instrumento);
   tecla.onclick = function () {
    tocaSom('#som_tecla_splash');
   }
  };