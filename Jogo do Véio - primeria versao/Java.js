//todas variáveis

var a1 = window.document.getElementById("A1");
var a2 = window.document.getElementById("A2");
var a3 = window.document.getElementById("A3");
var b1 = window.document.getElementById("B1");
var b2 = window.document.getElementById("B2");
var b3 = window.document.getElementById("B3");
var c1 = window.document.getElementById("C1");
var c2 = window.document.getElementById("C2");
var c3 = window.document.getElementById("C3");
var ganhador = window.document.getElementById("quemGanhou");

d1 = window.document.getElementById("BT");
d1.addEventListener("click", reset);

a1.addEventListener("click", clicar1);
a1.addEventListener("dblclick", clicar10);

a2.addEventListener("click", clicar2);
a2.addEventListener("dblclick", clicar20);

a3.addEventListener("click", clicar3);
a3.addEventListener("dblclick", clicar30);

b1.addEventListener("click", clicar4);
b1.addEventListener("dblclick", clicar40);

b2.addEventListener("click", clicar5);
b2.addEventListener("dblclick", clicar50);

b3.addEventListener("click", clicar6);
b3.addEventListener("dblclick", clicar60);

c1.addEventListener("click", clicar7);
c1.addEventListener("dblclick", clicar70);

c2.addEventListener("click", clicar8);
c2.addEventListener("dblclick", clicar80);

c3.addEventListener("click", clicar9);
c3.addEventListener("dblclick", clicar90);

d1 = window.document.getElementById("BT");
d1.addEventListener("click", reset);

// Bloco A

function clicar1() {
  a1.style.background = "red";
  verifica();
}

function clicar10() {
  a1.style.background = "green";
  verifica();
}

function clicar2() {
  a2.style.background = "red";
  verifica();
}

function clicar20() {
  a2.style.background = "green";
  verifica();
}

function clicar3() {
  a3.style.background = "red";
  verifica();
}

function clicar30() {
  a3.style.background = "green";
  verifica();
}

// bloco B

function clicar4() {
  b1.style.background = "red";
  verifica();
}

function clicar40() {
  b1.style.background = "green";
  verifica();
}

function clicar5() {
  b2.style.background = "red";
  verifica();
}

function clicar50() {
  b2.style.background = "green";
  verifica();
}

function clicar6() {
  b3.style.background = "red";
  verifica();
}

function clicar60() {
  b3.style.background = "green";
  verifica();
}

// Bloco C

function clicar7() {
  c1.style.background = "red";
  verifica();
}

function clicar70() {
  c1.style.background = "green";
  verifica();
}

function clicar8() {
  c2.style.background = "red";
  verifica();
}

function clicar80() {
  c2.style.background = "green";
  verifica();
}

function clicar9() {
  c3.style.background = "red";
  verifica();
}

function clicar90() {
  c3.style.background = "green";
  verifica();
}

function reset() {
  a1.style.background = "blue";
  a2.style.background = "blue";
  a3.style.background = "blue";
  b1.style.background = "blue";
  b2.style.background = "blue";
  b3.style.background = "blue";
  c1.style.background = "blue";
  c2.style.background = "blue";
  c3.style.background = "blue";
  ganhador.innerHTML = " Quem vai ganhar?";
}

//verificar campeao

function verifica() {
  if (
    a1.style.background == "red" &&
    a2.style.background == "red" &&
    a3.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!";
  } else if (
    b1.style.background == "red" &&
    b2.style.background == "red" &&
    b3.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!";
  } else if (
    c1.style.background == "red" &&
    c2.style.background == "red" &&
    c3.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!";
  } else if (
    a1.style.background == "red" &&
    b1.style.background == "red" &&
    c1.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!";
  } else if (
    a2.style.background == "red" &&
    b2.style.background == "red" &&
    c2.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!";
  } else if (
    a3.style.background == "red" &&
    b3.style.background == "red" &&
    c3.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!";
  } else if (
    a1.style.background == "red" &&
    b2.style.background == "red" &&
    c3.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!";
  } else if (
    a3.style.background == "red" &&
    b2.style.background == "red" &&
    c1.style.background == "red"
  ) {
    ganhador.innerHTML = "O Vermelho Ganhou!"; // aqui começa a verificacao do "green"
  } else if (
    a1.style.background == "green" &&
    a2.style.background == "green" &&
    a3.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    b1.style.background == "green" &&
    b2.style.background == "green" &&
    b3.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    c1.style.background == "green" &&
    c2.style.background == "green" &&
    c3.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    a1.style.background == "green" &&
    b1.style.background == "green" &&
    c1.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    a2.style.background == "green" &&
    b2.style.background == "green" &&
    c2.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    a3.style.background == "green" &&
    b3.style.background == "green" &&
    c3.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    a1.style.background == "green" &&
    b2.style.background == "green" &&
    c3.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    a3.style.background == "green" &&
    b2.style.background == "green" &&
    c1.style.background == "green"
  ) {
    ganhador.innerHTML = "O Verde Ganhou!";
  } else if (
    a1.style.background != "" &&
    a2.style.background != "" &&
    a3.style.background != "" &&
    b1.style.background != "" &&
    b2.style.background != "" &&
    b3.style.background != "" &&
    c1.style.background != "" &&
    c2.style.background != "" &&
    c3.style.background != ""
  ) {
    ganhador.innerHTML = "Empatou!";
  } else ganhador.innerHTML = "Quem vai ganhar?!";
}
