const Tarefa = require("../models/Tarefa");

let db = [
  new Tarefa(1, "Tarefa 01", false)
];

function salvarNoBanco(tasks) {
  return new Promise((resolve) => {
    setTimeout(() => {
      db = tasks;
      resolve();
    }, 1000);
  });
}

function buscarNoBanco() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db);
    }, 1000);
  });
}

module.exports = {
  salvarNoBanco,
  buscarNoBanco
};