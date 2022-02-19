const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const hamburguer1 = document.querySelector(".hamburguer");
imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"))
    })
})
/*-------aqui si le da click se cierra el light box---*/
contenedorLight.addEventListener("click", (e)=>{
   if(e.target !== imagenesLight){
       imagenesLight.classList.toggle("showImage")
       contenedorLight.classList.toggle("show")
       hamburguer1.style.opacity = "1"
   }
})

const aparecerImagen = (imagen)=>{
imagenesLight.src = imagen;
contenedorLight.classList.toggle("show")
imagenesLight.classList.toggle("showImage")
    hamburguer1.style.opacity = "0"
}