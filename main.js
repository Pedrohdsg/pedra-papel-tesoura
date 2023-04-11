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

let vitorias = 0;
let derrotas = 0;

let valorJogador = "";
let valorAdversario = "";

function jogador() {
  let opcaoJogador = document.getElementById("seletorId").value;

  if (opcaoJogador === "papel") {
    const e = document.createElement("p");
    document.getElementById("jogadorId").appendChild(e).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/paper1.png" alt="">
      `;
    valorJogador = "papel";
  } else if (opcaoJogador === "pedra") {
    const e = document.createElement("p");
    document.getElementById("jogadorId").appendChild(e).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/rock1.png" alt="">
      `;
    valorJogador = "pedra";
  } else {
    const e = document.createElement("p");
    document.getElementById("jogadorId").appendChild(e).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/scissor1.png" alt="">
      `;
    valorJogador = 'tesoura';
  }
}

function sorteioAdversario() {
  let adversario = Math.round(Math.random() * 2);

  if (adversario == 0) {
    const ad = document.createElement("p");
    document.getElementById("adversarioId").appendChild(ad).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/paper2.png" alt="">
      `;
    valorAdversario = "papel";
  } else if (adversario == 1) {
    const ad = document.createElement("p");
    document.getElementById("adversarioId").appendChild(ad).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/rock2.png" alt="">
      `;
    valorAdversario = "pedra";
  } else {
    const ad = document.createElement("p");
    document.getElementById("adversarioId").appendChild(ad).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/scissor2.png" alt="">
      `;
    valorAdversario = "tesoura";
  }
}

function jogar() {
  jogador();
  sorteioAdversario();
  resultados()
}

function resultados(){

  
  if (valorJogador == 'pedra' && valorAdversario == 'tesoura'){    
    const resultado = document.createElement('h1');
    document.getElementById('resultadoId').appendChild(resultado).innerHTML=`
  <h1 class="resultado">Venceu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
  } else if (valorJogador == 'pedra' && valorAdversario == 'papel'){
    alert('perdeu');
  } else if (valorJogador == 'pedra' && valorAdversario == 'pedra'){
    alert('empatou');
  }

  if (valorJogador == 'papel' && valorAdversario == 'tesoura'){
    alert('perdeu');
  } else if (valorJogador == 'papel' && valorAdversario == 'papel'){
    alert('empatou');
  } else if (valorJogador == 'papel' && valorAdversario == 'pedra'){
    alert('venceu');
  }

  if (valorJogador == 'tesoura' && valorAdversario == 'tesoura'){
    alert('empatou');
  } else if (valorJogador == 'tesoura' && valorAdversario == 'papel'){
    alert('venceu');
  } else if (valorJogador == 'tesoura' && valorAdversario == 'pedra'){
    alert('perdeu');
  }

}

function recomecar(){
  location.reload()
}