<template>
    <div class="corpo">
      <div class="card">
        <div class="titulo">
          {{ titulo }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppCard',
    data() {
      return {
       
      }
    },
    props:{
        titulo:{
            type:String
        }
    },

  }
  </script>
  
  <style scoped>
  .corpo {
   margin: 10px;
  }
  
  .card {
    width: 300px; /* Largura do card */
    height: 180px; /* Altura do card */
    background-image: url('/path/to/your/image.jpg'); /* Substitua com o caminho da sua imagem */
    background-size: cover; /* Cobre toda a área do card */
    background-position: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Sombra para dar um efeito de elevação */
    border-radius: 10px; /* Cantos arredondados */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; /* Cor do texto */
    font-size: 24px; /* Tamanho do texto */
    text-align: center; /* Centraliza o texto */
    font-weight: bold; /* Texto em negrito */
  }
  .card:hover{
    cursor: pointer;
  }
  
  .titulo {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra no texto para destacá-lo sobre a imagem */
  }
  </style>
  