document.querySelectorAll(".faq ul li").forEach((item) => {
  // Defina os estilos iniciais
  const targetP = item.querySelector("p");
  const targetH3 = item.querySelector("h3");

  targetP.style.display = "none";
  targetH3.style.fontWeight = "400";

  // Adicione o evento de clique
  item.addEventListener("click", (event) => {
    const targetLi = event.currentTarget;
    const targetP = targetLi.querySelector("p");
    const targetH3 = targetLi.querySelector("h3");
    const targetArrow = targetLi.querySelector("img");

    targetP.style.display = targetP.style.display === "none" ? "block" : "none";
    targetH3.style.fontWeight =
      targetH3.style.fontWeight === "400" ? "bold" : "400";
    targetArrow.classList.toggle("arrow-rotate");
  });
});
