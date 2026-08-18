const alunos = ["Giovani", "Gustavo", "Ingrid", "Isabela"];

const aluno = alunos.find((nome) => nome === "Ingrid");

console.log(aluno); // Ingrid

const aluno1 = alunos.find((nome) => nome === "Felipe");

console.log(aluno1); // undefined (pois não existe no array)