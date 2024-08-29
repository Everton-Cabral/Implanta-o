<template>
    <div class="corpo">
        
        <div class="graficos">
            
            <!-- Gráfico Donut existente -->
            <div class="grafico-item1">
                <ApexChart :options="chartOptions" :series="chartSeries" />
                <div class="progresso-container">
                        <q-linear-progress
                            :value="progress"
                            color="primary"
                            size="10px"
                            track-color="grey-3"
                        />
                    <div class="progresso-descricao">
                        <span class="descricao-texto">
                            <strong>Carros Prontos:</strong> {{ carrosProntos }} de {{ totalCarros }}
                        </span>
                    </div> 
                </div>
       
            </div>
            <h5>Polícia Militar Sem Cela</h5>
           
        </div>
        <div class="grafico-item2">
            <ApexChart :options="barChartOptions1"  :series="barChartSeries1"/>
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
        carrosProntos: 25, 
      totalCarros: 50, 
      progress: 0.5,
  
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
  
        
  
        /* Grafico Especializado */
        barChartOptions1: {
        
          chart: {
          type: 'bar',
          height: 500
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: ['INSULFILM G20', 'GIROFLEX', 'STROBOS', 'CAPA DE BANCO E PISO', 'PLOTAGEM', 'ABASTECIMENTO','LAVAGEM'],
        },
        },
       
        barChartSeries1: [
        {
          name: 'S10',  // Nome da série 1
          data: [
            { x: 'INSULFILM G20', y: 44, goals: [{ name: 'Expectativa', value: 50, strokeColor: '#FF8C00' }] },
            { x: 'GIROFLEX', y: 55, goals: [{ name: 'Expectativa', value: 60, strokeColor: '#FF8C00' }] },
            { x: 'STROBOS', y: 41, goals: [{ name: 'Expectativa', value: 45, strokeColor: '#FF8C00' }] },
            { x: 'CAPA DE BANCO E PISO', y: 64, goals: [{ name: 'Expectativa', value: 70, strokeColor: '#FF8C00' }] },
            { x: 'PLOTAGEM', y: 22, goals: [{ name: 'Expectativa', value: 30, strokeColor: '#FF8C00' }] },
            { x: 'ABASTECIMENTO', y: 43, goals: [{ name: 'Expectativa', value: 50, strokeColor: '#FF8C00' }] },
            { x: 'LAVAGEM', y: 21, goals: [{ name: 'Expectativa', value: 25, strokeColor: '#FF8C00' }] }
          ]
        }, 
        {
          name: 'CRETA',  // Nome da série 2
          data: [
            { x: 'INSULFILM G20', y: 53, goals: [{ name: 'Expectativa', value: 60, strokeColor: '#FF8C00' }] },
            { x: 'GIROFLEX', y: 32, goals: [{ name: 'Expectativa', value: 40, strokeColor: '#FF8C00' }] },
            { x: 'STROBOS', y: 33, goals: [{ name: 'Expectativa', value: 38, strokeColor: '#FF8C00' }] },
            { x: 'CAPA DE BANCO E PISO', y: 52, goals: [{ name: 'Expectativa', value: 58, strokeColor: '#FF8C00' }] },
            { x: 'PLOTAGEM', y: 13, goals: [{ name: 'Expectativa', value: 20, strokeColor: '#FF8C00' }] },
            { x: 'ABASTECIMENTO', y: 44, goals: [{ name: 'Expectativa', value: 48, strokeColor: '#FF8C00' }] },
            { x: 'LAVAGEM', y: 32, goals: [{ name: 'Expectativa', value: 36, strokeColor: '#FF8C00' }] }
          ]
        },
        {
          name: 'SPIN',  // Nome da série 3
          data: [
            { x: 'INSULFILM G20', y: 55, goals: [{ name: 'Expectativa', value: 60, strokeColor: '#FF8C00' }] },
            { x: 'GIROFLEX', y: 22, goals: [{ name: 'Expectativa', value: 28, strokeColor: '#FF8C00' }] },
            { x: 'STROBOS', y: 73, goals: [{ name: 'Expectativa', value: 75, strokeColor: '#FF8C00' }] },
            { x: 'CAPA DE BANCO E PISO', y: 52, goals: [{ name: 'Expectativa', value: 55, strokeColor: '#FF8C00' }] },
            { x: 'PLOTAGEM', y: 3, goals: [{ name: 'Expectativa', value: 10, strokeColor: '#FF8C00' }] },
            { x: 'ABASTECIMENTO', y: 44, goals: [{ name: 'Expectativa', value: 50, strokeColor: '#FF8C00' }] },
            { x: 'LAVAGEM', y: 32, goals: [{ name: 'Expectativa', value: 35, strokeColor: '#FF8C00' }] }
          ]
        },
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
    height: 75vh;
    justify-content: center;
  }
  h5{
    margin-left: 10px;
  }
  .graficos{
  margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .grafico-item1{
    height: 100px;
    width: 300px;
  
  }
  .grafico-item2{
    height: 300px;
    width: 73%;
    
  }
 
  .progresso-container {
  margin-top: 20px;
  width: 100%;
}

.progresso-descricao {
  margin-top: 5px;
  font-size: 14px;
  color: #333;
}

.descricao-texto {
  display: block;
}
  </style>
  