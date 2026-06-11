document.addEventListener("DOMContentLoaded", () => {
  const botaoCarta = document.getElementById("abri-carta");
  const senhaInput = document.getElementById("senha");
  const body = document.body;

  const carta = document.querySelector(".carta");
  const livro = document.querySelector(".livro");
  const botaoNext = document.getElementById("next");

  const senhaCorreta = "06092024";

  botaoCarta.addEventListener("click", () => {
    if (senhaInput.value === senhaCorreta) {
      body.classList.add("cinema");

      setTimeout(() => {
        carta.classList.add("aberta");
        livro.classList.add("ativo");
      }, 800);
    } else {
      senhaInput.classList.add("erro");

      setTimeout(() => {
        senhaInput.classList.remove("erro");
      }, 500);
    }
  });

  const paginas = document.querySelectorAll(".pagina");

  let paginaAtual = 0;

  botaoNext.addEventListener("click", () => {
    paginas[paginaAtual].classList.remove("ativa");

    paginaAtual++;

    if (paginaAtual >= paginas.length) {
      paginaAtual = 0;
    }

    paginas[paginaAtual].classList.add("ativa");
  });
});
