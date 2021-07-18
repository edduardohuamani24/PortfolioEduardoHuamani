/*Se crea variables let con los elementos de enlace vacíos. Son variables let porque se pondrá valor a los atributos href*/
let button_github = document.getElementById("button_github");
let button_linkedin = document.getElementById("button_linkedin");
/*  Constantes con los enlaces*/
const url_github = "https://github.com/edduardohuamani24";
const url_linkedin = "https://www.linkedin.com/in/eduardo-huamani-43707812a/";
const linkContact = () => {
  /*A cada botón se le agrega el evento click y una función anónima que usará la variable global window y el método open para abrir el enlace correspondiente */
  button_github.addEventListener("click", () => {
    window.open(url_github);
  });
  button_linkedin.addEventListener("click", () => {
    window.open(url_linkedin);
  });
};

export { linkContact };
