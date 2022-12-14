class aluno {
  constructor(nome = "", qtdFaltas, notas = []) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
  }

  faltas() {
    this.qtdFaltas++;
    return this.qtdFaltas;
  }

  calculaMedia() {
    let soma = 0;

    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }

    let media = soma / this.notas.length;
    return media;
  }
}

const curso = {
  nomeCurso: "Curso CTD",
  notaAprovacao: 7.0,
  faltasMaximas: 5,
  estudantes: [],

  adicionarAluno(nome, qtdFaltas, notas) {
    const novoaluno = new aluno(nome, qtdFaltas, notas);
    this.estudantes.push(novoaluno);
  },

  buscaAluno(estudanteInformado) {
    for (let estudante of this.estudantes) {
      if (estudanteInformado === estudante.nome) {
        return estudante;
      }
    }
  },

  verificaAprovacao(estudante) {
    const estudanteVerificado = curso.buscaAluno(estudante);
    const media = estudanteVerificado.calculaMedia();
    const aprovacaoFaltaIguais = this.notaAprovacao + this.notaAprovacao * 0.1; // 7.7

    if (
      estudanteVerificado.qtdFaltas == this.faltasMaximas &&
      media >= aprovacaoFaltaIguais
    ) {
      return true;
    } else if (
      media >= this.notaAprovacao &&
      estudanteVerificado.qtdFaltas < this.faltasMaximas
    ) {
      return true;
    } else {
      return false;
    }
  },

  listaAprovado() {
    let lista = [];

    for (let i = 0; i < this.estudantes.length; i++) {
      let aprovacao = curso.verificaAprovacao(this.estudantes[i].nome);
      lista.push(this.estudantes[i].nome + ": " + aprovacao);
    }

    return lista;
  },
};

curso.adicionarAluno("Marcos", 5, [8, 6, 10]);
curso.adicionarAluno("Mario", 6, [10, 10, 3]);
curso.adicionarAluno("Marcela", 2, [10, 10, 10]);
curso.adicionarAluno("Rose", 0, [1, 4, 9]);
curso.adicionarAluno("Daniel", 0, [2, 9, 4]);

console.log(
  "Adicionado " +
    curso.estudantes[3].faltas() +
    " falta ao Aluno(a) " +
    curso.estudantes[3].nome
);
console.log(
  "Media Aluno(a) " +
    curso.estudantes[2].nome +
    ": " +
    curso.estudantes[2].calculaMedia()
);

console.log(curso.estudantes);
console.log(curso.buscaAluno("Marcela"));
console.log(curso.verificaAprovacao("Marcos"));
console.log(curso.verificaAprovacao("Mario"));
console.log(curso.listaAprovado());
