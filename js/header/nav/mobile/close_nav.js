/*importamos los enlaces del DOM */
import { link } from "../desktop/remove_border_link.js";
/*También importamos el menu */
import { nav_list } from "./show_nav_list_responsive.js";
/*importar el método que transforma el icono hamburguesa */
import { rotateBar } from "./rotate_ham_burger.js";

const closeNav = () => {
  /*Por cada link dentro del menú se usa el parámetro link_item */
  link.forEach((link_item) => {
    //Este parámetro al escuchar el evento click se ejecutará una  función
    link_item.addEventListener("click", function () {
      /*Mediante la propiedad classList se quitarán las clases mostrar el menú y ocultar el scroll del body */
      nav_list.classList.remove("nav__list--activate");
      body.classList.remove("scroll-hidden");
      /*Además, se ejecutará la función para rotar las barras y no se quede como el símbolo de borrar */
      rotateBar();
    });
  });
};

export { closeNav };
