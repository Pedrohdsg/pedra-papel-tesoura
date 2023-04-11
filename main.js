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

function jogador() {
  const opcaoJogador = document.getElementById("seletorId").value;
  console.log(opcaoJogador);
  if (opcaoJogador === "papel") {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `<span class="material-symbols-outlined">note</span>`;
  } else if (opcaoJogador === "pedra") {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `<span class="material-symbols-outlined">radio_button_unchecked</span>`;
  } else {
    const e = document.createElement("p");
    document
      .getElementById("jogadorId")
      .appendChild(
        e
      ).innerHTML = `<span class="material-symbols-outlined">content_cut</span>`;
  }
}
