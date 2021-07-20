import { link, removeBorder } from "./remove_border_link.js";

/*En la función activateLink se quitará el estilo de subrayado mediante la función removeBorder que quitará a todos los elementos la clase link-activate.
A cada item de la colección se le agregará la clase según su posición */

const activaLink = () => {
  link[0].addEventListener("click", () => {
    removeBorder();
    link[0].classList.add("link-activate");
  });
  link[1].addEventListener("click", () => {
    removeBorder();
    link[1].classList.add("link-activate");
  });
  link[2].addEventListener("click", () => {
    removeBorder();
    link[2].classList.add("link-activate");
  });
  link[3].addEventListener("click", () => {
    removeBorder();
    link[3].classList.add("link-activate");
  });
  link[4].addEventListener("click", () => {
    removeBorder();
    link[4].classList.add("link-activate");
  });
};

export { activaLink };
