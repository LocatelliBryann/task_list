<template>
<section>
  <cabecalho />
  <div class="container">
    <h2>{{ titulo }}</h2>
    <div class="input-group">
      <input @keyup.enter="adicionarTarefa" v-model="novatarefa" type="text">
      <span class="input-group-btn">
        <button @click="adicionarTarefa" class="btn btn-primary">Adicionar Tarefas</button>
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
      
    </footer>
  </div>
  <rodape />
</section>
</template>

<script>
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape"

export default {
  name: 'App',
  components: { Cabecalho, Rodape },
  data() {
    return {
      titulo: "Minha lista de tarefas",
      novatarefa: '',
      tarefas: [
        {titulo: "Ler", checked: true },
        {titulo: "Jogar", checked: false},
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
  font-family:cursive; 
  color: black
}

.removed {
  color: white;
}

.removed label {
  text-decoration: line-through;
}

button {
  background-color: rgb(157, 216, 89);
  color: white; text-shadow: black 0.1em 0.1em 0.2em;
}

</style>
