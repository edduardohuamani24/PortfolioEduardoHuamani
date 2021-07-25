/*importamos los enlaces del DOM */
import { nav_list } from "./show_nav_list_responsive.js";
// import { link } from "../desktop/remove_border_link.js";

const closeNav = () => {
  nav_list.classList.remove("nav__list--activate");
};

export { closeNav };
