//MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

//click abrir
btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");

});

//CLICK CERRAR
btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active");

});

//cerrar menu con elementos
enlaces.addEventListener("click", function(){
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});

//SLIDER DE PRODUCTOS
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    //EVENTO PARA BOTON DERECHO
    btnDerecho.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth;
    });


     //EVENTO PARA BOTON IZQUIERDO
    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });

    //validacion de formulacio

var formulario = document.getElementById("formulario");

function validar(e){
    var inputNombre = document.getElementById("nombre"),
    inputEmail = document.getElementById("email"),
    inputComents = document.getElementById("comentarios"),
    alertSuccess = document.getElementById("alertSuccess"),
    alertError = document.getElementById("alertError");

    if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0){
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");

        setTimeout(function(){
            alertError.classList.remove("show");
            alertError.classList.add("hide");
        }, 2000);

        
    }else{
        e.preventDefault();
        alertSuccess.classList.remove("hide");
        alertSuccess.classList.add("show");

        setTimeout(function(){
            alertSuccess.classList.remove("show");
            alertSuccess.classList.add("hide");
        }, 2000);
        inputNombre.value = "";
        inputEmail.value = "";
        inputComents.value = "";

    }
}

//EVENTOS DEL FORMULARIO

formulario.addEventListener("submit", validar);

// SCROLL TOP --SUBIR

var btnTop = document.getElementById("btn-top"),
logo = document.getElementById("logo");

// DETECTAR SCROLL EN LA PAGINA
window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop,
    //ALTO COMPLETO DE LA PAGINA HTML
        fullSize = document.documentElement.offsetHeight,
        sizeVp = document.documentElement.clientHeight;

        scroll=scroll-.800048828125;

    if (scroll > 100) {
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }

    // Modificar elemento cuando llegue al final de pagina.
    if (fullSize == (scroll + sizeVp)) {
        btnTop.classList.add("scrollFinal");
    }else{
        btnTop.classList.remove("scrollFinal");
    }

 });


// Detectamos evento click en el botono
btnTop.addEventListener("click",function () {
    window.scrollTo(0,0);
});

// DETECTAR EVENTO CLICK EN LOGO
logo.addEventListener("click",function () {
window.scrollTo(0,0);   
});

