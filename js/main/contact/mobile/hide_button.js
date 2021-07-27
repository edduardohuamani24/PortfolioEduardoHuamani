let button_container = document.getElementById("button_container");

const hideButton = () => {
  button_container.classList.toggle("hidden-button");
};

export { button_container, hideButton };
