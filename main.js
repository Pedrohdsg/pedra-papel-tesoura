// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959',
// 		'X-RapidAPI-Host': 'rock-paper-scissors13.p.rapidapi.com'
// 	}
// };

// fetch('https://rock-paper-scissors13.p.rapidapi.com/?choice=paper', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const vitorias = 0;
const derrotas = 0;

function jogador() {
 
  let opcaoJogador = document.getElementById("seletorId").value;

  if (opcaoJogador === "papel") {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/paper1.png" alt="">
      `;
  } else if (opcaoJogador === "pedra") {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/rock1.png" alt="">
      `;
  } else {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/scissor1.png" alt="">
      `;
  }
  return opcaoJogador
}

function sorteioAdversario() {
  let adversario = Math.round(Math.random() * 2);

  if ((adversario == 0)) {
    const ad = document.createElement("p");
    document
      .getElementById("adversarioId")
      .appendChild(
        ad
      ).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/paper2.png" alt="">
      `;
  } else if ((adversario == 1)) {
    const ad = document.createElement("p");
    document
      .getElementById("adversarioId")
      .appendChild(
        ad
      ).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/rock2.png" alt="">
      `;
  } else {
    const ad = document.createElement("p");
    document
      .getElementById("adversarioId")
      .appendChild(
        ad
      ).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/scissor2.png" alt="">
      `;
  }
  return adversario;
}

function jogar(){  
  jogador();
  sorteioAdversario();
}