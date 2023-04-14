let vitorias = 0;
let derrotas = 0;
let empates = 0;

vitorias = JSON.parse(localStorage.getItem('vitorias'))
derrotas = JSON.parse(localStorage.getItem('derrotas'))
empates = JSON.parse(localStorage.getItem('empates'))


let valorJogador = "";
let valorAdversario = "";


function adicionarPlacar(){
  let placar = document.createElement('div');
  document.getElementById('placarId').appendChild(placar).innerHTML =`
  <p>VITÓRIAS = ${vitorias}_________EMPATES = ${empates}_________DERROTAS = ${derrotas}</p>
  `
}



function jogador() {
  let opcaoJogador = document.getElementById("seletorId").value;
  const e = document.createElement("p");

  if (opcaoJogador === "papel") {
    document.getElementById("jogadorId").appendChild(e).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/paper1.png" alt="">
      `;
    valorJogador = "papel";
  } else if (opcaoJogador === "pedra") {
    document.getElementById("jogadorId").appendChild(e).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/rock1.png" alt="">
      `;
    valorJogador = "pedra";
  } else {
    document.getElementById("jogadorId").appendChild(e).innerHTML = `
      <h3>Jogador</h3>
      <img id="bg-jogador" src="img/scissor1.png" alt="">
      `;
    valorJogador = "tesoura";
  }
}

function sorteioAdversario() {
  let adversario = Math.round(Math.random() * 2);
  const ad = document.createElement("p");

  if (adversario == 0) {
    document.getElementById("adversarioId").appendChild(ad).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/paper2.png" alt="">
      `;
    valorAdversario = "papel";
  } else if (adversario == 1) {
    document.getElementById("adversarioId").appendChild(ad).innerHTML = `
      <h3>Adversário</h3>
      <img id="bg-adversario" src="img/rock2.png" alt="">
      `;
    valorAdversario = "pedra";
  } else {
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
  adicionarPlacar()
}

function resultados() {
  let resultado = document.createElement("div");

  if (valorJogador == "pedra" && valorAdversario == "tesoura") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Venceu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    vitorias++;
  } else if (valorJogador == "pedra" && valorAdversario == "papel") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Perdeu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    derrotas++;
  } else if (valorJogador == "pedra" && valorAdversario == "pedra") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Empate!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    empates++;
  }

  if (valorJogador == "papel" && valorAdversario == "tesoura") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Perdeu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    derrotas++;
  } else if (valorJogador == "papel" && valorAdversario == "papel") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
    <h1 class="resultado">Empate!</h1>
    <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
    `;
    empates++;
  } else if (valorJogador == "papel" && valorAdversario == "pedra") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Venceu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    vitorias++;
  }

  if (valorJogador == "tesoura" && valorAdversario == "tesoura") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Empate!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    empates++;
  } else if (valorJogador == "tesoura" && valorAdversario == "papel") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Venceu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    vitorias++;
  } else if (valorJogador == "tesoura" && valorAdversario == "pedra") {
    document.getElementById("resultadoId").appendChild(resultado).innerHTML = `
  <h1 class="resultado">Perdeu!</h1>
  <input type="button" value="OK!" id="buttonId" onclick="recomecar()">
  `;
    derrotas++;
  }

  localStorage.setItem("vitorias", vitorias);
  localStorage.setItem("derrotas", derrotas);
  localStorage.setItem("empates", empates);


  const esconderSeletor = document.getElementById("selecaoOpcao");
  esconderSeletor.style.display = "none";
}

function recomecar() {
  location.reload();
  
}
