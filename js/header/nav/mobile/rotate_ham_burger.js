/*Creamos una constante para almacenar los span del button hamburger*/
const button_br = document.querySelectorAll(".button-hamburger span");

const rotateBar = () => {
  /*Usamos el método forEach para que recorra los 3 span contenidos en la constante button_br*/
  button_br.forEach((child) => {
    /*
    A esta función anónima se le pone un párametro que lo llamaremos child
    Mediante este parámetro child accedemos a la propiedad classList y con el método toggle agregamos o quitamos la clase .animation
    */
    child.classList.toggle("animation");
  });
};

export { button_br, rotateBar };
