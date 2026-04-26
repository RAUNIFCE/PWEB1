const readline = require("readline");
const service = require("../services/TarefaService");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n=== MENU ===");
  console.log("1 - adicionar tarefa");
  console.log("2 - listar tarefas");
  console.log("3 - concluir tarefa 1");
  console.log("4 - sair");

  rl.question("Escolha: ", async (op) => {
    switch (op) {
      case "1":
        await service.adicionar("Fazer café");
        break;

      case "2":
        await service.listar();
        break;

      case "3":
        await service.concluir(1);
        break;

      case "4":
        rl.close();
        return;

      default:
        console.log("Inválido");
    }

    menu();
  });
}

module.exports = menu;