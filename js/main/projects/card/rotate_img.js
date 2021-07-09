/*Creamos una constante que contendrá el contenedor card */
const card_item = document.querySelectorAll(".card");
/*Creamos una función que exportaremos y será ejecutado en el main del js*/
const rotateImage = () => {
  /* Usamos el método forEach para recorrer todos los card del DOM 
  Se crea una función anónima con el parámetro element
  */
  card_item.forEach(function (element) {
    /* Mediante el parámetro element accedemos al método addEventListener para que con evento click  se ejecute otra función anónima */
    element.addEventListener("click", function () {
      /*this: Reemplaza al parámetro.
      Accedemos a la propiedad classList y con el método toggle agregamos o quitamos la clase .rotate-img */
      this.classList.toggle("rotate-img");
    });
  });
};

export { rotateImage };
