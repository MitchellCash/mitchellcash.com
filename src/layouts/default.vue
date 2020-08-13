<template>
  <div>
    <Header />

    <main class="container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'MainLayout',

  components: {
    Header
  }
};
</script>
