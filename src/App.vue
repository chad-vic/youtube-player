<template>
  <div class="container">
     <div class="container-item">
        <Search/>
        <playVideo/>
        <videoItems/>
     </div>
  </div>
</template>

<script>
import Search from '../src/components/Search.vue'
import playVideo from '../src/components/playVideo.vue'
import videoItems from '../src/components/videoItems.vue'

  export default {
    name:'App',
    components: {
      Search,
      playVideo,
      videoItems
    }
  }
</script>

<style scoped>

  .container {
    width: 100%;
    padding: 2rem 0;
    background:linear-gradient(to right,#8dd7f5,#c75ce2);
    font-size: 0.85rem;
  }

  .container-item {
    width: 58%;
    margin: 0 auto;
    max-width: 1000px;
    background: #e9e4e4;
    padding:1rem 2rem;
    border-radius: 15px;
  }
</style>
