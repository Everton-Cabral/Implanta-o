<template>
  <div class="corpo">
    <div class="grafico-coluna-esquerda">
      <!-- Gráficos Donut e Barras na coluna esquerda -->
      <div class="grafico-item">
        <ApexChart :options="chartOptions" :series="chartSeries" />
      </div>
      <div class="grafico-item">
        <ApexChart :options="barChartOptions1" :series="barChartSeries1" />
      </div>
    </div>
    <div class="grafico-item-lateral">
      <!-- Novo Gráfico de Barras ocupando o lado direito -->
      <ApexChart :options="barChartOptions" :series="barChartSeries" />
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
          width: 400,  // Defina a largura desejada
          height: 400, // Defina a altura desejada
        },
        labels: ['ENTREGUES', 'EM SERVIÇO'],
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
        colors: ['rgba(30, 144, 255, 0.85)', '#FF0000'],
        legend: {
                  show: true,
                  position: 'bottom', // Define a posição da legenda para baixo
                  horizontalAlign: 'center', // Alinhamento horizontal da legenda
                  offsetY: 0 // Ajusta o deslocamento vertical, se necessário
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
          text: 'Relatório de Entregas', // Texto do título
          align: 'center', // Alinhamento do título
          margin: 20, // Margem acima do título
          offsetY: 0, // Deslocamento vertical do título
          style: {
          fontSize: '16px', // Tamanho da fonte do título
          fontWeight: 'bold', // Peso da fonte do título
          color: '#263238', // Cor do título
          
          }
        }
      },
      chartSeries: [],

      /* Entregues por Modelo */

      barChartOptions1: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true
      }
    },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      'S10',
      'CRETA',
      'SPIN',
      
    ],
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  title: {
          text: 'Relatório de Entrega por Modelo', // Texto do título
          align: 'center', // Alinhamento do título
          margin: 10, // Margem acima do título
          offsetY: 0, // Deslocamento vertical do título
          style: {
          fontSize: '16px', // Tamanho da fonte do título
          fontWeight: 'bold', // Peso da fonte do título
          color: '#263238', // Cor do título
          }
        },
},

    barChartSeries1: [],




      /* Grafico Modelo ENTREGUES */

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
          customLegendItems: ['Entregues', 'Total a Entregar'],
          markers: {
            fillColors: ['#1E90FF', '#FF8C00']
          }
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
        title: {
          text: 'Relatório de Entrega por Segmento', // Texto do título
          align: 'center', // Alinhamento do título
          margin: 10, // Margem acima do título
          offsetY: 0, // Deslocamento vertical do título
          style: {
          fontSize: '16px', // Tamanho da fonte do título
          fontWeight: 'bold', // Peso da fonte do título
          color: '#263238', // Cor do título
          }
        },
        
      },
      
      barChartSeries: [
        
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
        this.qtdCarrosEntregues,
        this.qtdCarrosEmServico,
      ],
      
      this.barChartSeries1= [{
      name: 'ENTREGUES',
      data: [
       this.carros.filter(carro => carro.MODELO === 'S10' && carro.STATUS === 'ENTREGUE').length,
       this.carros.filter(carro => carro.MODELO === 'CRETA' && carro.STATUS === 'ENTREGUE').length,
       this.carros.filter(carro => carro.MODELO === 'SPIN' && carro.STATUS === 'ENTREGUE').length,
  
      ]
    }],
  
      this.barChartSeries = [
      {
          name: 'ENTREGUES',
          data: [
            { x: 'Casa Civil', y: this.EntreguesCasaCivil, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoCasaCivil, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'SDS Descaracterizada', y: this.EntreguesSDSDescaracterizada, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoCasaSDSDescaracterizado, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM sem cela', y:this.EntreguesPMSemCela, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPmSemCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM Descaracterizada', y: this.EntreguesPMDescaracterizada, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPmDescaracterizado, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM com cela', y: this.EntreguesPMComCela, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPMComCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM Canil', y: this.EntreguesPMCanil, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPMCanil, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PM Trânsito', y: this.EntreguesPMTransito, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPMTransito, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PC Descaracterizada', y: this.EntreguesPCDescaracterizada, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPCDescaracterizada, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PC com cela', y: this.EntreguesPCComCela, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPCComCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PC sem cela', y: this.EntreguesPCSemCela, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPCSemCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PP Descaracterizada', y: this.EntreguesPPDescaracterizada, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPPDescaracterizada, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'PP com cela', y: this.EntreguesPPComCela, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoPPComCela, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] },
            { x: 'Bombeiros', y: this.EntreguesBombeiros, goals: [{ name: 'TOTAL A ENTREGAR', value: this.qtdtTipoBombeiro, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FF8C00' }] }
          ]
        }
      ]
    }
   
  },
  computed: {
    qtdCarrosEntregues() {
      return this.carros.filter(carro => carro.STATUS === 'ENTREGUE').length;
    },
    qtdCarrosEmServico() {
      return this.carros.filter(carro => carro.STATUS != 'ENTREGUE').length;
    },
  
    qtdtTipoCasaCivil(){
      return this.carros.filter(carro => carro.TIPO === 'CASA CIVIL').length;
    },
    qtdtTipoCasaSDSDescaracterizado(){
      return this.carros.filter(carro => carro.TIPO === 'SDS DESCARACTERIZADA').length;
    },
    qtdtTipoPmSemCela(){
      return this.carros.filter(carro => carro.TIPO === 'PM SEM CELA').length;
    },
   
    qtdtTipoPmDescaracterizado(){
      return this.carros.filter(carro => carro.TIPO === 'PM DESCARACTERIZADA').length;
    },
    qtdtTipoPMComCela(){
      return this.carros.filter(carro => carro.TIPO === 'PM COM CELA').length;
    },

    qtdtTipoPMCanil(){
      return this.carros.filter(carro => carro.TIPO === 'PM CANIL').length;
    },
    qtdtTipoPMTransito(){
      return this.carros.filter(carro => carro.TIPO === 'PM TRANSITO').length;
    },
    qtdtTipoPCDescaracterizada(){
      return this.carros.filter(carro => carro.TIPO === 'PC DESCARACTERIZADA' || carro.TIPO === 'PC DESCARACTERIZADA  + PLOTAGEM PRETA').length;
    },
    qtdtTipoPCComCela(){
      return this.carros.filter(carro => carro.TIPO === 'PC COM CELA').length;
    },
 
    qtdtTipoPCSemCela(){
      return this.carros.filter(carro => carro.TIPO === 'PC SEM CELA').length;
    },

    qtdtTipoPPDescaracterizada(){
      return this.carros.filter(carro => carro.TIPO === 'PP DESCARACTERIZADA').length;
    },
    qtdtTipoPPComCela(){
      return this.carros.filter(carro => carro.TIPO === 'PP COM CELA').length;
    },
    qtdtTipoBombeiro(){
      return this.carros.filter(carro => carro.TIPO === 'BOMBEIROS COM CELA' || carro.TIPO === 'BOMBEIROS SEM CELA').length;
    },

    /* CARROS ENTREGUES */
    EntreguesCasaCivil(){
      return this.carros.filter(carro => carro.TIPO === 'CASA CIVIL' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesSDSDescaracterizada(){
      return this.carros.filter(carro => carro.TIPO === 'SDS DESCARACTERIZADA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPMSemCela(){
      return this.carros.filter(carro => carro.TIPO === 'PM SEM CELA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPMDescaracterizada(){
      return this.carros.filter(carro => carro.TIPO === 'PM DESCARACTERIZADA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPMComCela(){
      return this.carros.filter(carro => carro.TIPO === 'PM COM CELA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPMCanil(){
      return this.carros.filter(carro => carro.TIPO === 'PM CANIL' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPMTransito(){
      return this.carros.filter(carro => carro.TIPO === 'PM TRANSITO' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPCDescaracterizada(){
      return this.carros.filter(carro => carro.TIPO === 'PC DESCARACTERIZADA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPCComCela(){
      return this.carros.filter(carro => carro.TIPO === 'PC COM CELA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPCSemCela(){
      return this.carros.filter(carro => carro.TIPO === 'PC SEM CELA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPPDescaracterizada(){
      return this.carros.filter(carro => carro.TIPO === 'PP DESCARACTERIZADA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesPPComCela(){
      return this.carros.filter(carro => carro.TIPO === 'PP COM CELA' && carro.STATUS === 'ENTREGUE').length;
    },
    EntreguesBombeiros(){
      return this.carros.filter(carro => 
    carro.STATUS === 'ENTREGUE' && 
    (carro.TIPO === 'BOMBEIROS COM CELA' || carro.TIPO === 'BOMBEIRO COM CELA')
    ).length;
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
  width: 100%;
  height: 100vh;
  background-color: #f4f4f9; /* Fundo suave */
  box-sizing: border-box; /* Inclui padding e borda no cálculo da largura e altura */
}

.grafico-coluna-esquerda {
  display: flex;
  flex-direction: column;
  width: 30%; /* Largura da coluna esquerda */
  padding: 10px;
  box-sizing: border-box; /* Inclui padding no cálculo da largura */
}

.grafico-item {
  background-color: #fff; /* Fundo branco para destaque */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra para os gráficos */
  border-radius: 8px; /* Bordas arredondadas */
  margin-bottom: 10px; /* Espaço entre os gráficos na coluna esquerda */
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Suavizar sombra e efeito ao passar o mouse */
}

.grafico-item:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Sombra mais forte ao passar o mouse */
  transform: translateY(-5px); /* Elevar levemente o item */
}

.grafico-item-lateral {
  width: 70%; /* Largura do gráfico lateral */
  padding: 10px;
  box-sizing: border-box; /* Inclui padding no cálculo da largura */
  background-color: #fff; /* Fundo branco para destaque */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra para os gráficos */
  border-radius: 8px; /* Bordas arredondadas */
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Suavizar sombra e efeito ao passar o mouse */
}

.grafico-item-lateral:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Sombra mais forte ao passar o mouse */
  transform: translateY(-5px); /* Elevar levemente o item */
}

/* Estilos específicos para tamanhos */
.grafico-item {
  height: 45%; /* Ajuste a altura para reduzir o tamanho dos gráficos */
  width: 101%; /* Ajuste a largura para garantir que os gráficos se ajustem bem */
}

.grafico-item-lateral {
  height: 89%; /* Ajuste a altura para reduzir o tamanho do gráfico lateral */
  width: 70%; /* Ajuste a largura para garantir que o gráfico lateral se ajuste bem */
  margin-top: 10px;
  margin-right: 10px;
}

@media (max-width: 1200px) {
  .corpo {
    flex-direction: column;
  }
  .grafico-coluna-esquerda {
    width: 100%; /* Coluna esquerda ocupa toda a largura em telas menores */
    flex-direction: row; /* Gráficos lado a lado em telas menores */
  }
  .grafico-item {
    width: 50%; /* Gráficos lado a lado em telas menores */
  }
  .grafico-item-lateral {
    width: 100%; /* Gráfico lateral ocupa toda a largura em telas menores */
  }
}

@media (max-width: 768px) {
  .grafico-item {
    width: 100%; /* Gráficos ocupam toda a largura em telas menores */
    margin-bottom: 0; /* Remove espaço entre gráficos em telas menores */
  }
  .grafico-item-lateral {
    height: 300px; /* Ajuste a altura do gráfico lateral para telas menores */
  }
}
</style>


