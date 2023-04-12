let vitorias = 0;
let derrotas = 0;
let empates = 0;



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
    valorJogador = "tesoura";
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
  resultados();
}

function resultados() {
  let resultado = document.createElement("div");

  if (valorJogador == "pedra" && valorAdversario == "tesoura") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Venceu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  } else if (valorJogador == "pedra" && valorAdversario == "papel") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Perdeu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  } else if (valorJogador == "pedra" && valorAdversario == "pedra") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Empate!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  }

  if (valorJogador == "papel" && valorAdversario == "tesoura") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Perdeu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  } else if (valorJogador == "papel" && valorAdversario == "papel") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
    <h1 class="resultado">Empate!</h1>
    <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
    `;

  } else if (valorJogador == "papel" && valorAdversario == "pedra") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Venceu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  }

  if (valorJogador == "tesoura" && valorAdversario == "tesoura") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Empate!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  } else if (valorJogador == "tesoura" && valorAdversario == "papel") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Venceu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  } else if (valorJogador == "tesoura" && valorAdversario == "pedra") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Perdeu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;

  }

  const esconderSeletor = document.getElementById('selecaoOpcao')
  esconderSeletor.style.display = 'none'
}

function recomecar() {
  location.reload();
}
