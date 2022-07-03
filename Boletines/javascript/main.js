//Obtener los elementos de la clase .close
//Recorrerlos
//Agregar un evento click a cada uno de ellos
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})*/
let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener('click',function(ev){
        ev.preventDefault();

        let content = document.querySelector(".content");
        //Quitar las clases de animación que ya tiene
        content.classList.remove("animate__animated");
        content.classList.remove("animate__slideInDown");
        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__animated");
        content.classList.add("animate__slideOutUp");
        
        setTimeout(function(){
            location.href = "/";
        },600)

        return false;

    });
})