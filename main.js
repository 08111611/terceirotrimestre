function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
document.querySelector('.tecla_pom').onclick = tocaSomPom;}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
document.querySelector('.tecla_clap').onclick = tocaSomClap;}

function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
document.querySelector('.tecla_tim').onclick = tocaSomTim;}

function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
document.querySelector('.tecla_puff').onclick = tocaSomPuff;}

function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
document.querySelector('.tecla_splah').onclick = tocaSomSplash;}

function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
document.querySelector('.tecla_toim').onclick = tocaSomToim;}

function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
document.querySelector('.tecla_psh').onclick = tocaSomPsh;}

function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
document.querySelector('.tecla_tic').onclick = tocaSomTic;}

function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom

let contador= 0

// Estrutura de repetição- Enquanto
while(contador < listaDeTeclas.length) {
    listaDeTeclas [contador].onclick = tocaSomPom;
    contador= contador + 1;
}