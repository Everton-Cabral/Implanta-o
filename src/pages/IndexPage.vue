<template>
  <div class="corpo">
    <q-input 
      v-model="chassi" 
      filled 
      type="search" 
      hint="Digite o Chassi ou a Placa"
    >
      <template v-slot:append>
        <q-icon name="search" class="icone" @click="consulta()" />
      </template>
    </q-input>

    <div v-if="carro && typeof carro === 'object'" class="card">
      <div v-for="(value, key) in carro" :key="key" class="card-content">
        <strong>{{ key }}:</strong> {{ value }}
      </div>
      <q-btn label="Limpar" color="primary" @click="limparPesquisa" class="btn-clear"/>
    </div>

    <div v-else-if="carro" class="no-car">
      {{ carro }}
    </div>
  </div>
</template>

<script>
import Carros from '../Data.json';

export default {
  name: 'IndexPage',
  data() {
    return {
      carros: Carros.Dados,
      chassi: '',
      carro: ''
    };
  },
  watch: {
    chassi(newValue) {
      this.chassi = newValue.toUpperCase();
    }
  },
  methods: {
    consulta() {
      const resultado = this.carros.find(carro => carro.CHASSI === this.chassi || carro.PLACA === this.chassi);
      if (resultado) {
        this.carro = resultado;
      } else {
        this.carro = 'Veículo Não Encontrado';
      }
    },
    limparPesquisa() {
      this.chassi = '';
      this.carro = '';
    }
  }
};
</script>

<style scoped>
.corpo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.icone:hover {
  cursor: pointer;
}

.card {
  background-color: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  width: 300px;
}

.card-content {
  margin-bottom: 10px;
}

.no-car {
  margin-top: 20px;
  font-size: 16px;
  color: #ff0000;
}

.btn-clear {
  margin-top: 15px;
  width: 100%;
}
</style>
