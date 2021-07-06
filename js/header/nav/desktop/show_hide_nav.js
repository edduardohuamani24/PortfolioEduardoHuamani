/* Creamos una variable let, donde se almacenará la posición actual que por defecto es 0.
El valor de la posición actual se obtiene con la propiedad pageYOffset.
Se usa una variable de tipo let porque el valor será modificado
 */
let principal_ubication = window.pageYOffset;
/* Se crea un let porque necesitamos una variable vacía y el const necesita un valor*/
let current_ubication;
/*Almacena el header del Dom en una variable const*/
const headerTop = document.querySelector(".header");
/*Creamos una función */
const showHiddenHeader = () => {
  /* Mediante la propiedad onscroll, cuando se realice el evento scroll en el navegador se llamará a la función anónima
  que dará determinado valor a cada scroll según su posición actual del eje Y.
  Esto será almacenado en la ubicación actual */
  window.onscroll = function () {
    current_ubication = window.pageYOffset;
    /** Según el valor de la ubicación actual del scroll se mostrará u ocultará el header.
     * Para esto se compararán los valores de la ubicación principal con la ubicación actual
     */
    if (principal_ubication >= current_ubication) {
      headerTop.style.top = "0";
    } else {
      headerTop.style.top = "-100px";
    }
    /**La ubicación principal tendrá el mismo valor de la ubicación actual y en caso de realizarse un nuevo scroll se volverá a realizar toda la función anónima */
    principal_ubication = current_ubication;
  };
};

export { showHiddenHeader };
