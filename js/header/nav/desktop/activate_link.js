/* Obtenemos una colección de los enlaces dentro de cada list item */
let link = document.querySelectorAll(".nav__list-item a");
const verificateLink = () => {
  /*Activar enlaces según sección.
Se usará la API IntersectionObserver de Js */
  //En una constante almacenamos la instancia de IntersectionObserver que  va a recibir una función que tendrá una entries como parámetro
  const observer = new IntersectionObserver(
    (entries) => {
      //A las entradas se realiza un recorrido, para esto necesitamos un parámetro entry o entrada, que representa a nuestra raíz de intersección y para cuando una sección intercepte con nuestra raíz de intersección, que por defecto es el viewport.
      //Para cuando alguna de las secciones estén visibles se va a ejecutar una función y la sección deje de estar visible se ejecutará otra función
      entries.forEach((entry) => {
        //La propiedad target hace referencia al elemento del DOM
        //Lo guardamos en una constante id
        const id = entry.target.getAttribute("id");
        //Guardamos en una constante los elementos que seleccionemos que estén dentro del nav__list y tengan el siguiente id
        const navLink = document.querySelector(`.nav__list a[href="#${id}"]`);
        //Mediante la propiedad  isIntersecting condicionamos si el elemento es visible o no para agregar o quitar el subrayado y el font weight
        if (entry.isIntersecting) {
          navLink.classList.add("link-activate");
        } else {
          navLink.classList.remove("link-activate");
        }
      }, {});
      //Usaremos como segundo parámetro el objeto root que por defecto es el viewport
    },
    //MEdiante la propiedad rootMargin le da margen a la raíz. Arriba tiene un margen de -30% para que empiece antes el cambio y abajo se agrega un margen de -70%
    { rootMargin: "-50% 0px -50% 0px" }
  );
  //Obtenemos una colección de datos y mediante el método forEach lo recorremos. Necesitamos un parámetro
  link.forEach((menuLink) => {
    //En una constante guardamos el atributo "href" obtenido del parámetro
    const hashtag = menuLink.getAttribute("href");
    //Almacenamos en la constante target el link seleccionado
    const target = document.querySelector(hashtag);
    //Si encontramos el target, es decir algún elemento con ese identificador.
    if (target) {
      //Se guardará en la constante observer donde almacenamos la instancia del API IntersectionObserver
      //Mediante el método observe verificamos si hay cambio en el DOM mediante el target.
      observer.observe(target);
    }
  });
};

/*En la función activateLink se quitará el estilo de subrayado mediante la función removeBorder que quitará a todos los elementos la clase link-activate.
A cada item de la colección se le agregará la clase según su posición */

// const activateLink = () => {
//   link[0].addEventListener("click", () => {
//     removeBorder();
//     link[0].classList.add("link-activate");
//   });
//   link[1].addEventListener("click", () => {
//     removeBorder();
//     link[1].classList.add("link-activate");
//   });
//   link[2].addEventListener("click", () => {
//     removeBorder();
//     link[2].classList.add("link-activate");
//   });
//   link[3].addEventListener("click", () => {
//     removeBorder();
//     link[3].classList.add("link-activate");
//   });
//   link[4].addEventListener("click", () => {
//     removeBorder();
//     link[4].classList.add("link-activate");
//   });
// };

export { link, verificateLink };
