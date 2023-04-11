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
      <span class="material-symbols-outlined">note</span>
      `;
  } else if (opcaoJogador === "pedra") {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `
      <h3>Jogador</h3>
      <span class="material-symbols-outlined">radio_button_unchecked</span>
      `;
  } else {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `
      <h3>Jogador</h3>
      <span class="material-symbols-outlined">content_cut</span>
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
      <span class="material-symbols-outlined">note</span>
      `;
  } else if ((adversario == 1)) {
    const ad = document.createElement("p");
    document
      .getElementById("adversarioId")
      .appendChild(
        ad
      ).innerHTML = `
      <h3>Adversário</h3>
      <span class="material-symbols-outlined">radio_button_unchecked</span>
      `;
  } else {
    const ad = document.createElement("p");
    document
      .getElementById("adversarioId")
      .appendChild(
        ad
      ).innerHTML = `
      <h3>Adversário</h3>
      <span class="material-symbols-outlined">content_cut</span>
      `;
  }
  return adversario;
}

function jogar(){
  jogador();
  sorteioAdversario();

}