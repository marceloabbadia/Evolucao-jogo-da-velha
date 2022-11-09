var tabuleiro = document.getElementById("tabuleiro");
var msg = document.getElementById("msg");
var proximoJogador = "O";
var vencedor = "";

function fazJogada(linha, coluna) {
  var td = getTd(linha, coluna);
  if (vencedor == "" && td.textContent == "") {
    td.textContent = proximoJogador;
    if (venceu(proximoJogador)) {
      vencedor = proximoJogador;
      msg.textContent = "Vencedor: " + vencedor;
    } else if (deuVelha()) {
      msg.textContent = "Deu velha!";
    } else {
      proximoJogador = proximoJogador == "O" ? "X" : "O";
      msg.textContent = "Aguardando jogada de " + proximoJogador + "...";
    }
  }
}

function venceu(j) {
  // Fez a linha
  for (var linha = 0; linha < 3; linha++) {
    if (
      jogada(linha, 0) == j &&
      jogada(linha, 1) == j &&
      jogada(linha, 2) == j
    ) {
      return true;
    }
  }
  // Fez a coluna
  for (var coluna = 0; coluna < 3; coluna++) {
    if (
      jogada(0, coluna) == j &&
      jogada(1, coluna) == j &&
      jogada(2, coluna) == j
    ) {
      return true;
    }
  }
  // Fez a diagonal
  if (jogada(0, 0) == j && jogada(1, 1) == j && jogada(2, 2) == j) {
    return true;
  }
  // Fez a diagonal oposta
  if (jogada(0, 2) == j && jogada(1, 1) == j && jogada(2, 0) == j) {
    return true;
  }
  // Se chegou aqui é porque não venceu
  return false;
}

function deuVelha() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (jogada(i, j) == "") {
        return false;
      }
    }
  }
  return true;
}

function reinicia() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      getTd(i, j).textContent = "";
    }
  }
  proximoJogador = "O";
  vencedor = "";
  (msg.textContent = "Aguardando jogada de " + proximoJogador), "...";
}

function getTd(linha, coluna) {
  return tabuleiro.children[linha].children[coluna];
}

function jogada(linha, coluna) {
  return getTd(linha, coluna).textContent;
}
