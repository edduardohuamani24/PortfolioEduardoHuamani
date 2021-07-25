/*Se necesita obtener el body para después quitarle la barra espaciadora */
const body = document.getElementById("body");
const hideScrollbar = () => {
  body.classList.toggle("scroll-hidden");
};
export { hideScrollbar };
