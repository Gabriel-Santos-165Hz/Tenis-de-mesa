function mostrarMensagem(){

  alert(
    "O tênis de mesa exige reflexos rápidos e muita concentração!"
  );

}

function mostrarCuriosidade(){

  const curiosidades = [

    "A bola pode ultrapassar 100 km/h.",

    "O esporte surgiu na Inglaterra.",

    "A China domina os campeonatos mundiais.",

    "Tênis de mesa virou esporte olímpico em 1988."

  ];

  const numeroAleatorio = Math.floor(
    Math.random() * curiosidades.length
  );

  document.getElementById("texto").innerText =
  curiosidades[numeroAleatorio];

}

function mostrarContato(){

  alert(
    "TikTok: @gabux"
  );

}

function fazerLogin(){

  alert(
    "Login realizado com sucesso!"
  );

}

/* ANIMAÇÃO DOS CARDS */

const cards =
document.querySelectorAll(".player-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
    "scale(1.03)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
    "scale(1)";

  });

});

/* MINI JOGO */

let pontos = 0;

const bola =
document.getElementById("bola");

bola.addEventListener("click", () => {

  pontos++;

  document.getElementById("pontos")
  .innerText = pontos;

  const x =
  Math.random() * 300 - 150;

  const y =
  Math.random() * 300 - 150;

  bola.style.transform =
  `translate(${x}px, ${y}px)`;

});

/* LOADING */

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loading")
    .style.display = "none";

  }, 2000);

});

/* TEMA */

const temaBtn =
document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){

    temaBtn.innerText = "🌙";

  }

  else{

    temaBtn.innerText = "☀️";

  }

});

/* MÚSICA */

const musica =
document.getElementById("musica");

function tocarMusica(){

  musica.play();

}

function pausarMusica(){

  musica.pause();

}

/* IA */

function responderIA(){

  const pergunta =
  document.getElementById("pergunta")
  .value.toLowerCase();

  const resposta =
  document.getElementById("respostaIA");

  if(pergunta.includes("melhor")){

    resposta.innerText =
    "Ma Long é considerado um dos melhores da história.";

  }

  else if(pergunta.includes("china")){

    resposta.innerText =
    "A China domina o tênis de mesa mundial.";

  }

  else{

    resposta.innerText =
    "Interessante pergunta sobre tênis de mesa!";

  }

}