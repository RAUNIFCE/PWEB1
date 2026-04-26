class Tarefa {
  constructor(id, title, done = false) {
    this.id = id;
    this.title = title;
    this.done = done;
  }
}

module.exports = Tarefa;