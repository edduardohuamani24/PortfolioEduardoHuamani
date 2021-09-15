const button_repository_01 = document.getElementById("button_repository_001");
const button_repository_02 = document.getElementById("button_repository_002");
const link_github_pj1 = "https://github.com/edduardohuamani24/ListPokemon";

const link_github_pj2 = "https://github.com/edduardohuamani24/ComicReview";

const button_page_01 = document.getElementById("button_page_001");
const button_page_02 = document.getElementById("button_page_002");

const link_page_01 = "https://edduardohuamani24.github.io/ComicReview";
const link_page_02 = "https://edduardohuamani24.github.io/ListPokemon";

const linkButton = () => {
  button_repository_01.addEventListener("click", () => {
    window.open(link_github_pj1);
  });
  button_repository_02.addEventListener("click", () => {
    window.open(link_github_pj2);
  });
};

const linkPage = () => {
  button_page_01.addEventListener("click", () => {
    window.open(link_page_01);
  });
  button_page_02.addEventListener("click", () => {
    window.open(link_page_02);
  });
};

export { linkButton, linkPage };
