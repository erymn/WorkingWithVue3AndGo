<template>
  <Header/>
  <div>
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'AppLayout',
  components: {
    Header,
    Footer,
  }
}
</script>

<style></style>
