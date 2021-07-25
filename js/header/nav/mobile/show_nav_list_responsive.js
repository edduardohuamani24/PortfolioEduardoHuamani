import { rotateBar } from "./rotate_ham_burger.js";
import { hideCard } from "../../../main/projects/card/mobile/hide_card.js";
import { hideButton } from "../../../main/contact/mobile/hide_button.js";
import { hideScrollbar } from "./hide_scrollbar.js";
const button_ham = document.querySelector(".button-hamburger");
const nav_list = document.querySelector(".nav__list");

const openCloseHam = () => {
  //El botón hamburguesa se le agregá un evento list que es una función anónimma.
  button_ham.addEventListener("click", () => {
    /*Mediante el método toggle se agregará la clase .nav__list-activate al nav__list en caso no tenga y si tiene la clase, lo quitará.  */
    nav_list.classList.toggle("nav__list--activate");
    /*Quitar barra espaciadora horizontal */
    hideScrollbar();
    /*Se agrega la función para rotar la barras del botón hamburger*/
    rotateBar();
    /*Llamar a la función que muestra o esconde la visibilidad del container de los card para que no este encima del nav list para móviles */
    hideCard();
    /*Función para que los botones no se sobrepongan a la lista de navegación*/
    hideButton();
  });
};

export { nav_list, openCloseHam };
