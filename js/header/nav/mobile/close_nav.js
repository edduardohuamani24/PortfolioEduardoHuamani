/*importamos los enlaces del DOM */
import { link } from "../desktop/activate_link.js";
/*También importamos el menu */
import { nav_list } from "./show_nav_list_responsive.js";
/*importar el método que transforma el icono hamburguesa */
import { button_br } from "./rotate_ham_burger.js";
/*Importar el contenedor de las cards de los proyectos */
import { card_container } from "../../../main/projects/card/mobile/hide_card.js";
import { button_container } from "../../../main/contact/mobile/hide_button.js";
// const card_container = document.querySelector(".card-container");
const closeNav = () => {
  /*Por cada link dentro del menú se usa el parámetro link_item */
  link.forEach((link_item) => {
    //Este parámetro al escuchar el evento click se ejecutará una  función
    link_item.addEventListener("click", function () {
      /*Mediante la propiedad classList se quitarán las clases mostrar el menú y ocultar el scroll del body */
      nav_list.classList.remove("nav__list--activate");
      body.classList.remove("scroll-hidden");
      /*Se remueve la clase que oculta a los contenedores de las cards de los proyectos */
      card_container.classList.remove("card__hidden");
      /*Se elimina la clase que oculta al contenedor de los botones de contacto */
      button_container.classList.remove("hidden-button");
      /*Además, se removerá la clase que realiza el giro de las barras, para evitar que al dar click en los enlaces en la vista para escritorio afecte el botón hamburger de la vista para móviles.*/
      button_br.forEach((child) => {
        child.classList.remove("animation");
      });
    });
  });
};

export { closeNav };
