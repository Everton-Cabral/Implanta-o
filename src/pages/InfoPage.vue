<template>
  <div class="corpo">
    <div class="graficos">
      <!-- Gráfico Donut existente -->
      <div class="grafico-item1">
        <ApexChart :options="chartOptions" :series="chartSeries" />
      </div>

      <!-- Novo Gráfico de Barras -->
       
      <div class="grafico-item2">
        <ApexChart :options="barChartOptions" :series="barChartSeries" />
      </div>

      <div class="grafico-item3">
        <ApexChart :options="barChartOptions2" :series="barChartSeries2" />
      </div>

      <div class="grafico-item4">
        <ApexChart :options="barChartOptions3" :series="barChartSeries3" />
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
          width: 200,  // Defina a largura desejada
          height: 200, // Defina a altura desejada
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
          align: 'left', // Alinhamento do título
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

      /* Grafico Modelo S10 */

      barChartOptions: {
        chart: {
          height: 200,
          width: 200,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#1E90FF'],
        dataLabels: {
          formatter: function (val, opt) {
            const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`;
            }
            return val;
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['QTD Atual', 'QTD a Alcançar'],
          markers: {
            fillColors: ['#1E90FF', '#FF8C00']
          }
        },
        title: {
          text: 'Modelo S10', // Texto do título
          align: 'center', // Alinhamento do título
          margin: 10, // Margem acima do título
          offsetY: 0, // Deslocamento vertical do título
          style: {
          fontSize: '16px', // Tamanho da fonte do título
          fontWeight: 'bold', // Peso da fonte do título
          color: '#263238' // Cor do título
          }
        }
        
      },
      
      barChartSeries: [
        {
          name: 'Actual',
          data: [
            { x: 'Giro-Flex', y: 70, goals: [{ name: 'Expected', value: 90, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Strobo Farois e Grade', y: 30, goals: [{ name: 'Expected', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Capa de Banco e Carpete', y: 67, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Plotagem', y: 67, goals: [{ name: 'Expected', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Cela', y: 20, goals: [{ name: 'Expected', value: 30, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Capota', y: 15, goals: [{ name: 'Expected', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Protetor de Caçamba', y: 70, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Rastreador', y: 45, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Insufilm', y: 67, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Emplacamento', y: 15, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] }
          ]
        }
      ],

      /* Grafico Creta */

      barChartOptions2: {
        chart: {
          height: 200,
          width: 200,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['rgb(0, 227, 150)'],
        dataLabels: {
          formatter: function (val, opt) {
            const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`;
            }
            return val;
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['QTD Atual', 'QTD a Alcançar'],
          markers: {
            fillColors: ['rgb(0, 227, 150)', '#FF8C00']
          }
        },
        title: {
          text: 'Modelo CRETA', // Texto do título
          align: 'center', // Alinhamento do título
          margin: 10, // Margem acima do título
          offsetY: 0, // Deslocamento vertical do título
          style: {
          fontSize: '16px', // Tamanho da fonte do título
          fontWeight: 'bold', // Peso da fonte do título
          color: '#263238' // Cor do título
          }
        }
        
      },
      
      barChartSeries2: [
        {
          name: 'Actual',
          data: [
            { x: 'Giro-Flex', y: 70, goals: [{ name: 'Expected', value: 90, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Strobo Farois e Grade', y: 30, goals: [{ name: 'Expected', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Capa de Banco e Carpete', y: 67, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Plotagem', y: 67, goals: [{ name: 'Expected', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Cela', y: 20, goals: [{ name: 'Expected', value: 30, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Rastreador', y: 67, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Insufilm', y: 67, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Emplacamento', y: 84, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] }
          ]
        }
      ],

      /* Grafico Spin */
      barChartOptions3: {
        chart: {
          height: 200,
          width: 200,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['rgb(254, 176, 25)'],
        dataLabels: {
          formatter: function (val, opt) {
            const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`;
            }
            return val;
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['QTD Atual', 'QTD a Alcançar'],
          markers: {
            fillColors: ['rgb(254, 176, 25)', '#1E90FF']
          }
        },
        title: {
          text: 'Modelo SPIN', // Texto do título
          align: 'center', // Alinhamento do título
          margin: 10, // Margem acima do título
          offsetY: 0, // Deslocamento vertical do título
          style: {
          fontSize: '16px', // Tamanho da fonte do título
          fontWeight: 'bold', // Peso da fonte do título
          color: '#263238' // Cor do título
          }
        }
        
      },
      
      barChartSeries3: [
        {
          name: 'Actual',
          data: [
            { x: 'Giro-Flex', y: 70, goals: [{ name: 'Expected', value: 90, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] },
            { x: 'Strobo Farois e Grade', y: 30, goals: [{ name: 'Expected', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] },
            { x: 'Capa de Banco e Carpete', y: 50, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] },
            { x: 'Plotagem', y: 67, goals: [{ name: 'Expected', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] },
            { x: 'Cela', y: 20, goals: [{ name: 'Expected', value: 30, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] },
            { x: 'Rastreador', y: 67, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] },
            { x: 'Insufilm', y: 77, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] },
            { x: 'Emplacamento', y: 54, goals: [{ name: 'Expected', value: 99, strokeWidth: 5, strokeHeight: 10, strokeColor: '#1E90FF' }] }
          ]
        }
      ]
      
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
    }
  },
  mounted() {
    this.carregarDados()
  }
}
</script>

<style scoped>
.corpo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  height: 100vh;
}
.graficos{
margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grafico-item1{
  height: 400px;
  width: 400px;

}
.grafico-item2{
  height: 400px;
  width: 500px;
}
.grafico-item3{
  height: 600px;
  width: 500px;
}
.grafico-item4{
  height: 600px;
  width: 500px;
}
</style>
