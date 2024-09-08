<template>
 <div class="corpo">
  <div class="linha-1">
    <!-- Gráfico Donut existente -->
    <div class="grafico-item grafico-item1">
      <ApexChart :options="chartOptions" :series="chartSeries" />
    </div>
     
    <!-- Novo Gráfico de Barras -->
    <div class="grafico-item grafico-item2">
      <ApexChart :options="barChartOptions2" :series="barChartSeries2" />
    </div>
  </div>
</div>

</template>

<script>
import ApexChart from 'vue3-apexcharts';
import Carros from '../Data.json';

export default {
  name: 'IndexPage',
  components: {
    ApexChart
  },
  data() {
    return {
      carros: [],

      /* Grafico Geral */
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          type: 'donut',
          width: 300,  // Defina a largura desejada
          height: 300, // Defina a altura desejada
        },
        labels: ['S10', 'CRETA', 'SPIN'],
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex];
          },
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  }
                }
              }
            }
          }
        },
        legend: {
              position: 'bottom'
            },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        title: {
          text: 'Veiculos Recebidos', // Texto do título
          align: 'center', // Alinhamento do título
          margin: 10, // Margem acima do título
          offsetY: 0, // Deslocamento vertical do título
          style: {
          fontSize: '16px', // Tamanho da fonte do título
          fontWeight: 'bold', // Peso da fonte do título
          color: '#263238', // Cor do título
          
          }
        }
      },
      chartSeries: [],

    


       /* Grafico Modelo teste*/

       barChartOptions2: {
  chart: {
    height: 350,
    width: 500,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    }
  },
  xaxis: {
    type: 'text',
    categories: [
    'Casa Civil',
    'SDS Descaracterizada',
    'PM sem cela',
    'PM Descaracterizada',
    'PM com cela',
    'PM Canil',
    'PM Trânsito',
    'PC Descaracterizada',
    'PC com cela',
    'PC sem cela',
    'PP Descaracterizada',
    'PP com cela',
    'Bombeiros com cela',
    'Bombeiros sem cela',
    ]
  },
  legend: {
    position: 'right',
    offsetY: 40,
    show: true
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  fill: {
    opacity: 1
  },
  title: {
    text: 'Divisão de Veículos',
    align: 'center',
    margin: 10,
    offsetY: 0,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#263238'
    }
  }
},
barChartSeries2: [

 ],






     
     
     
    
      
    };

    
  },
  methods: {
    carregarDados() {
      try {
        this.carros = Carros.Dados;
        this.dadosCarregados = true;
        this.atualizarSeries();
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    },
    atualizarSeries() {
      this.chartSeries = [
        this.qtdCarrosS10,
        this.qtdCarrosCreta,
        this.qtdCarrosSpin
      ];
   
      this.barChartSeries2 = [
{
            name: 'S10',
            data: [
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'CASA CIVIL').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'SDS DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PM SEM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PM DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PM COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PM CANIL').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PM TRANSITO').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PC DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PC COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PC SEM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PP DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'PP COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'BOMBEIROS COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'S10' && carro.TIPO === 'BOMBEIROS SEM CELA').length,
                    
                  ]
          },
          {
            name: 'CRETA',
            data: [
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'CASA CIVIL').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'SDS DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PM SEM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PM DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PM COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PM CANIL').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PM TRANSITO').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PC DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PC COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PC SEM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PP DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'PP COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'BOMBEIROS COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.TIPO === 'BOMBEIROS SEM CELA').length,
                     
                  ]
          },
          {
            name: 'SPIN',
            data: [
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'CASA CIVIL').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'SDS DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PM SEM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PM DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PM COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PM CANIL').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PM TRANSITO').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PC DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PC COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PC SEM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PP DESCARACTERIZADA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'PP COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'BOMBEIROS COM CELA').length,
                    this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.TIPO === 'BOMBEIROS SEM CELA').length,
                     
                  ]
        },
 ],

      

      this.barChartSeries = [
      {
          name: 'ENTREGUES',
          data: [
            { x: 'Casa Civil', y: 70, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoCasaCivil, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'SDS Descaracterizada', y: 30, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoCasaSDSDescaracterizado, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM sem cela', y:0, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPmSemCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM Descaracterizada', y: 67, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPmDescaracterizado, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM com cela', y: 20, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPMComCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM Canil', y: 15, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPMCanil, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM Trânsito', y: 70, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPMTransito, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PC Descaracterizada', y: 45, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPCDescaracterizada, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PC com cela', y: 67, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPCComCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PC sem cela', y: 15, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPCSemCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PP Descaracterizada', y: 15, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPPDescaracterizada, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PP com cela', y: 15, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPPComCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Bombeiros', y: 15, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoBombeiro, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] }
          ]
        }
      ]
    }
   
  },
  computed: {
    qtdCarrosCreta() {
      return this.carros.filter(carro => carro.MODELO === 'CRETA').length;
    },
    qtdCarrosS10() {
      return this.carros.filter(carro => carro.MODELO === 'S10').length;
    },
    qtdCarrosSpin() {
      return this.carros.filter(carro => carro.MODELO === 'SPIN').length;
    },
    
   
  },
  mounted() {
    this.carregarDados()
  }
}
</script>

<style scoped>
.corpo {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: #f4f4f9; /* Fundo suave */
  padding: 10px; /* Espaço ao redor */
}

.linha-1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Espaço entre os itens */
  margin: 10px 0;
  padding: 10px;

}

.grafico-item {
  background-color: #fff; /* Fundo branco para destaque */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
  border-radius: 8px; /* Bordas arredondadas */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  padding: 15px;
}

.grafico-item:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Sombra mais forte ao passar o mouse */
  transform: translateY(-5px); /* Elevar levemente o item */
}

/* Ajustes para desktop */
.grafico-item1 {
  width: 28%; /* Ajusta largura para caber 3 gráficos em tela */
}

.grafico-item2 {
  width: 68%; /* Ajusta largura para caber o gráfico maior */
}

/* Responsividade */
@media (max-width: 1024px) {
  .grafico-item1, .grafico-item2 {
    width: 100%; /* Em telas menores, os gráficos ocupam 100% da largura */
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .linha-1 {
    flex-direction: column; /* Em tablets e dispositivos móveis, alinhar os gráficos verticalmente */
    justify-content: center;
  }

  .grafico-item {
    width: 100%; /* Gráficos ocupam toda a largura */
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .corpo {
    padding: 5px; /* Reduzir o espaçamento em telas muito pequenas */
  }
  
  .linha-1 {
    padding: 5px; /* Menos espaço entre os gráficos */
  }

  .grafico-item {
    padding: 10px; /* Reduzir o padding em telas pequenas */
  }
}

</style>
