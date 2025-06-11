const texto = `Meu amor,

Cada momento com você é um capítulo inesquecível da nossa história. 💖

Teus olhos me acalmam, teu sorriso me alegra, teu abraço me completa.
Não há um dia em que eu não pense em como sou sortudo por ter você ao meu lado.

Essa carta é só uma pequena forma de mostrar o quanto te amo, e quero construir muitos momentos ao seu lado.

Com todo o meu carinho,
Larissa ❤️`;

let i = 0;

function escreverMensagem() {
  const msgEl = document.getElementById("mensagem");
  msgEl.innerText = "";
  i = 0;
  document.getElementById("verFotosBtn").style.display = "none";
  digitar(msgEl);
}

function digitar(elemento) {
  if (i < texto.length) {
    elemento.innerText += texto.charAt(i);
    i++;
    setTimeout(() => digitar(elemento), 40);
  } else {
    document.getElementById("verFotosBtn").style.display = "inline-block";
    document.getElementById("fimBtn").style.display = "inline-block";
  }
}

function mostrarGaleria() {
  document.getElementById("galeria").style.display = "block";
}

function fecharTudo() {
  const carta = document.getElementById("carta");
  carta.style.opacity = "0";
  carta.style.transform = "scale(0.1)";
  setTimeout(() => {
    carta.style.display = "none";
    document.getElementById("galeria").style.display = "none";
  }, 1000);
}

// Corações animados
function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.querySelector('.hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(criarCoracao, 300);
