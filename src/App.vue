<template>
  <div class="container">
    <h2>{{ titulo }}</h2>
    <div class="input-group">
      <input @keyup.enter="adicionarTarefa" v-model="novatarefa" type="text">
      <span class="input-group-btn">
        <button @click="adicionarTarefa" class="btn btn-primary">Adicionar</button>
      </span>

    </div>
    <ul>
      <li v-for="(tarefa, index) in tarefas"
        :key="index"
        :class="{removed: tarefa.checked}">
        <input type="checkbox" v-model="tarefa.checked">
        <label>{{ tarefa.titulo }}</label>
      </li>
      </ul>
    <footer>
      <em>Altere aqui o titulo da sua lista de tarefas</em>
      <input v-model="titulo" type="text" />
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      titulo: "Minha lista de tarefas",
      novatarefa: '',
      tarefas: [
        {titulo: "Ler", checked: true },
        {titulo: "Jogar", checked: true},
      ]
    };
  },
  methods: {
    adicionarTarefa() {
      this.tarefas.push( {
        titulo: this.novatarefa,
        checked: false,
      });
      this.novatarefa = "";
    }
  }
}
</script>

<style>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}

ul li {
  list-style: none;
}

.removed {
  color: gray;
}

.removed label {
  text-decoration: line-through;
}
</style>
