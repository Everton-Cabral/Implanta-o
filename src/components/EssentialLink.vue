<template>
  <q-item
    clickable
    :to="route"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" :color="props.iconColor" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: 'EssentialLink'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  route:{
    type: String,
    default:''
  },

  icon: {
    type: String,
    default: ''
  },

  iconColor: {
    type: String,
    default: ''
  }
})
</script>
