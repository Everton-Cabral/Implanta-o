<template>
  <div class="corpo">
    <AppCard titulo="GERAL" @click="irParaPagina()"/>
    <AppCard titulo="CASA CIVIL"/>
    <AppCard titulo="SDS VELADO"/>
    <AppCard titulo="PM SEM CELA"/>
    <AppCard titulo="PM DESCARACTERIZADA"/>
    <AppCard titulo="PM COM CELA"/>
    <AppCard titulo="PM CANIL"/>
    <AppCard titulo="PM TRÂNSITO SEM CELA"/>
    <AppCard titulo="PC DESCARACTERIZADA"/>
    <AppCard titulo="PC COM CELA"/>
    <AppCard titulo="PC SEM CELA"/>
    <AppCard titulo="PP DESCARACTERIZADA"/>
    <AppCard titulo="PP COM CELA"/>
    <AppCard titulo="BOMBEIROS COM CELA"/>
    <AppCard titulo="BOMBEIROS SEM CELA"/>
    <!-- <ApexChart type="pie" :options="chartOptions" :series="chartSeries" /> -->
      
      <!-- {{ carros }} -->
   
   </div>
</template>

<script>
/* import ApexChart from 'vue3-apexcharts'; */
import Carros from '../Data.json';
import AppCard from 'app/src/components/AppCard.vue'


export default {
  name: 'IndexPage',
  components: {
   /*  ApexChart */
   AppCard
  },
  data() {
    return {

      carros: Carros,
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Rótulos para o gráfico de pizza
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      chartSeries: [30, 40, 35, 50, 49, 60, 70] // Valores para cada segmento do gráfico de pizza
     
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
