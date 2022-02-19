const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");


/*-----aqui le agrega una clase o se la quita-- el spread----*/ 
hamburguer.addEventListener("click", () =>
{
    menu.classList.toggle("spread")
})
/*-----------aqui si le da click a otra cosa que no este en el menu se cierra*/ 
window.addEventListener("click", e=>
{
 if(menu.classList.contains("spread")
    && e.target != menu && e.target != hamburguer){
     menu.classList.toggle("spread")
    }
})