import { openCloseHam } from "./header/nav/mobile/show_nav_list_responsive.js";
import { showHiddenHeader } from "./header/nav/desktop/show_hide_nav.js";
import { rotateImage } from "./main/projects/card/desktop/rotate_img.js";
import { linkButton } from "./main/projects/card/desktop/link_button.js";
import { linkContact } from "./main/contact/desktop/link_contact.js";
// Abrir y cerrar el botón con forma de hamburguesa en vista para móviles.
openCloseHam();
/*Mostrar el header al hacer un scroll hacia arriba y ocultarlo cuando el scroll es hacia abajo */
showHiddenHeader();
/** Rotar imágen de los cards al dar click */
rotateImage();
/*Dar enlace a los botones de los cards */
linkButton();
linkContact();
