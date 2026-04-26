const { salvarNoBanco, buscarNoBanco } = require("../repositories/TarefaRepository");
const Tarefa = require("../models/Tarefa");

async function listar() {
  const tarefas = await buscarNoBanco();

  tarefas.forEach((t) => {
    const status = t.done ? "Concluída" : "Pendente";
    console.log(`${t.id} - ${t.title} - [${status}]`);
  });
}

async function adicionar(title) {
  const tarefas = await buscarNoBanco();

  const nova = new Tarefa(tarefas.length + 1, title, false);

  tarefas.push(nova);

  await salvarNoBanco(tarefas);
}

async function concluir(id) {
  let tarefas = await buscarNoBanco();

  tarefas = tarefas.map((t) =>
    t.id === id ? { ...t, done: true } : t
  );

  await salvarNoBanco(tarefas);
}

module.exports = {
  listar,
  adicionar,
  concluir
};