<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Relatório de Implantação Paraíba
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Menu de Opções
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Menu',
    icon: 'home',
    route: '/',
  },
  {
    title: 'Geral',
    icon: 'straight',
    iconColor: 'red', // Corrigi para usar iconColor,
    route: '/info',
  },
  {
    title: 'Casa Civil',
    icon: 'straight', // Coloquei um ícone apropriado,
    iconColor: 'blue',
  },
  {
    title: 'Secretaria de Defesa Social Descaracterizada',
    icon: 'straight',
   
    iconColor: 'green',
  },
  {
    title: 'Polícia Militar Convencional sem cela',
    icon: 'straight',
    iconColor: 'grey',
    route: '/PmSC',
  },
  {
    title: 'Polícia Militar Convencional Descaracterizada',
    icon: 'straight',
   
    iconColor: 'grey',
  },
  {
    title: 'Polícia Militar Convencional com cela',
    icon: 'straight',
   
    iconColor: 'grey',
  },
  {
    title: 'Polícia Militar Convencional Canil',
    icon: 'straight',
   
    iconColor: 'grey',
  },
  {
    title: 'Polícia Militar Trânsito sem cela',
    icon: 'straight',
   
    iconColor: 'yellow',
  },
  {
    title: 'Polícia Civil Descaracterizada',
    icon: 'straight',
    link: 'https://quasar.dev'
  },
  {
    title: 'Polícia Civil com cela',
    icon: 'straight',
    link: 'https://quasar.dev'
  },
  {
    title: 'Polícia Civil sem cela',
    icon: 'straight',
    link: 'https://quasar.dev'
  },
  {
    title: 'Polícia Penitenciária Descaracterizada',
    icon: 'straight',
   
    iconColor: 'yellow',
  },
  {
    title: 'Polícia Penitenciária com cela',
    icon: 'straight',
   
    iconColor: 'yellow',
  },
  {
    title: 'Bombeiros com cela',
    icon: 'straight',
   
    iconColor: 'red',
  },
  {
    title: 'Bombeiros sem cela',
    icon: 'straight',
    iconColor: 'red', // Corrigi para usar iconColor
    
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
