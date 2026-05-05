const readline= require("readline")//readline mudavel

const rl =readline.createInterface({//codigo estatico e padrão nao mude nada desse bloco
  input:process.stdin,
  output:process.stdout
});

let db = [
  {
    id: 1,
    title: "Tarefa 01",
    done: false,
  },
];

function salvarNoBanco(tasks) {
  return new Promise((resolve) => {
    setTimeout(() => {
      db=tasks;
      resolve();
    }, 1000);
  });
}

function buscarnoBanco() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db);
    }, 1000);
  });
}

async function addTask() {
  try {
    const title = await perguntar("Digite o título da tarefa: ");

    let tarefas = await buscarnoBanco();

    const novaTarefa = {
      id: tarefas.length + 1,
      title,
      done: false,
    };

    tarefas.push(novaTarefa);

    await salvarNoBanco(tarefas);

    console.log("Tarefa adicionada com sucesso!");
  } catch (error) {
    console.log("Erro ao adicionar tarefa");
  }
}

async function listTarefa() {
  const tarefas = await buscarnoBanco();
  tarefas.forEach((element) => {
    const status = element.done ? "Concluída" : "Pendente";
    console.log(`${element.id} - ${element.title} - [${status}]`);
  });
  return
}
function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}
async function concluirTarefa() {
  try {
    const id = parseInt(await perguntar("Digite o ID da tarefa: "));

    let tarefas = await buscarnoBanco();

    tarefas = tarefas.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );

    await salvarNoBanco(tarefas);

    console.log("Tarefa concluída!");
  } catch (error) {
    console.log("Erro ao concluir tarefa");
  }
}


async function removerTarefa() {
  try {
    const id = parseInt(await perguntar("Digite o id da tarefa: "));
    let tarefas = await buscarnoBanco();
    tarefas = tarefas.filter((t) => t.id !== id);
    await salvarNoBanco(tarefas);
    console.log("Tarefa removida!");
  } catch (error) {
    console.log("Erro");
  }
}

async function menu() {
  console.log("\n=== MENU ===");
  console.log("1 - add tarefa");
  console.log("2 - listar tarefas");
  console.log("3 - concluir segunda tarefa"); 
  console.log("4- remover"); 
  console.log("5 - finalizar");
  rl.question("Digite a opção desejada:", async(numero)=>{
     
      switch (numero) {
              case "1":
              await addTask();
              break;

              case "2":
              await listTarefa();
              break; // tinhamos esquecido o break

              case "3":
              await concluirTarefa(1);
              break; // tinhamos esquecido o break
              
              case "4":
              await removerTarefa();
              break;
              case "5":
              console.log("saindo")
              rl.close();
              return;

              default:
              console.log("Opção inválida");
              }
      menu();
    }
    )
    
        
    
}

// Criei essa função main só para usar async/await na chamada do menu, pois uma função precisa esperar a outra finalizar
async function main() {
  await menu();
  
}

main();