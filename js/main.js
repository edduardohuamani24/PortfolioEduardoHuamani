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
