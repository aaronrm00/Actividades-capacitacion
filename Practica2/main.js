const enviarInv = document.querySelector("#enviar-inv");
const enviarVis = document.querySelector("#enviar-vis");
function defaultBtnActive(){
   enviarInv.click();
 }

const openModal = document.querySelector('.cta');
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click',(e)=>{
   e.preventDefault();
   modal.classList.add('modal--show');
});

closeModal.addEventListener('click',(e)=>{
   e.preventDefault();
   modal.classList.remove('modal--show');
});