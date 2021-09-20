/*Importar imágenes */
import picture from "./../img/foto.jpg";
import cover_1 from "./../img/proyecto_1.png";
import cover_2 from "./../img/proyecto_2.png";

import { openCloseHam } from "./header/nav/mobile/show_nav_list_responsive.js";
import { showHiddenHeader } from "./header/nav/desktop/show_hide_nav.js";
import { rotateImage } from "./main/projects/card/desktop/rotate_img.js";
import {
  linkButton,
  linkPage,
} from "./main/projects/card/desktop/link_button.js";
import { linkContact } from "./main/contact/desktop/link_contact.js";
import { activateLink } from "./header/nav/desktop/activate_link.js";
import { closeNav } from "./header/nav/mobile/close_nav.js";

//Importar css
import "./../css/fontawesome-free-5.15.3-web/css/all.css";
import "./../css/body.css";
import "./../css/header/logo/logo.css";
import "./../css/header/nav/list.css";
import "./../css/main/home/home.css";
import "./../css/main/skills/skills.css";
import "./../css/main/projects/cards/cards.css";
import "./../css/main/hobbies/hobbies.css";
import "./../css/main/contact/contact.css";
import "./../css/footer/footer.css";

//Enlazar con los contenedores de las imágenes
const foto_perfil = document.getElementById("foto_perfil");
const project_card_1 = document.getElementById("project_card_1");
const project_card_2 = document.getElementById("project_card_2");

// Agregar las imágenes a los contenedores
foto_perfil.innerHTML = ` <img src=${picture} alt="Foto del autor del sitio web"
            class="photo-container__developer">`;
project_card_1.innerHTML = `<img class="card__image" src=${cover_1} alt="Imágen del primer proyecto">`;
project_card_2.innerHTML = `<img class="card__image" src=${cover_2} alt="Imágen del segundo proyecto">`;

// Abrir y cerrar el botón con forma de hamburguesa en vista para móviles.
openCloseHam();
/*Mostrar el header al hacer un scroll hacia arriba y ocultarlo cuando el scroll es hacia abajo */
showHiddenHeader();
/** Rotar imágen de los cards al dar click */
rotateImage();
/*Dar enlace a los botones de los cards */
linkButton();
/*Ejecutar función que permite abrir los enlaces de cada red social almacenada en un botón */
linkContact();
/*Cerrar ventana de menu en modo responsive */
closeNav();
/*Subrayar cada enlace según su ubicación de cada sección */
activateLink();
/*Abrir páginas de mis proyectos ya mínificados los archivos */
linkPage();
