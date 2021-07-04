import { rotateBar } from "./rotate_ham_burger.js";
const button_ham = document.querySelector(".button-hamburger");
const nav_list = document.querySelector(".nav__list");

const openCloseHam = () => {
  //El botón hamburguesa se le agregá un evento list que es una función anónimma.
  button_ham.addEventListener("click", () => {
    /*Mediante el método toggle se agregará la clase .nav__list-activate al nav__list en caso no tenga y si tiene la clase, lo quitará.  */
    nav_list.classList.toggle("nav__list--activate");
    /*Se agrega la función para rotar la barras del botón hamburger*/
    rotateBar();
  });
};

export { openCloseHam };
