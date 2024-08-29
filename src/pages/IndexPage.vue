<template>
  <div class="corpo">
 
   
   </div>
</template>

<script>
import Carros from '../Data.json';



export default {
  name: 'IndexPage',
  components: {

  },
  data() {
    return {
      carros: Carros,
    }
  },
  methods:{
    irParaPagina(){
      this.$router.push('/info');
    }
  }
 /*  mounted() {
    // Função executada quando o componente é montado
    console.log('Dados do array:', this.carros);
  } */
}
</script>

<style scoped>
.corpo{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
