<template>
  <section>
      <h1>Página 2</h1>
      <hr />
      
      <br />
      <p>
        Username: <input v-model="username" type="text"/>
      </p>
      <button @click="irHome">Ir para home</button>
      <button @click="irUsuario">Confirma nome </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    irHome() {
      this.$router.push({ name: "home"});
    },
    irUsuario() {
      this.$router.push( {
         name: 'usuario', 
         params: { username: this.username } } );
    },
  },
};
  
</script>

<style>
</style>