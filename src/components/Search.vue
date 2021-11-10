<template>
    <div>
        <h3>Video Search</h3>
        <div class="form">
          <input type="text" placeholder="Search..." v-model="query" @keyup="fetchData">
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        name:'Search',
        data() {
            return {
                query:''
            }
        },
        methods:{
            ...mapActions(['fetchVideos']),
           fetchData(e) {
               if(e.key === 'Enter') {
                   this.fetchVideos(this.query)
               }
            
          }
        }
    }
</script>

<style scoped>

    h3 {
        margin: 6px 0;
        padding: 0;
        color: #423f3f;
        cursor: pointer;
    }

    .form {
        width: 100%;
    }

    input{
      width: 40%;
      max-width: 350px;
      border: none;
      outline: none;
      padding: 0.65rem;
      border-radius: 20px;
    }

    input:focus {
        border: 1px solid #c75ce2;
    }
</style>