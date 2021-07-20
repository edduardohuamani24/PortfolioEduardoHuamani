/* Obtenemos una colección de los enlaces dentro de cada list item */
let link = document.querySelectorAll(".nav__list-item a");

const removeBorder = () => {
  /*
    A esta función anónima se le pone un párametro que lo llamaremos child
    Mediante este parámetro child accedemos a la propiedad classList y con el método remove  quitamos la clase .link-activate
    */
  link.forEach((child) => {
    child.classList.remove("link-activate");
  });
};
export { link, removeBorder };
