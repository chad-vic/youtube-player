<template>
  <div>
        <div>
            <img src="@/assets/youtubelogo.svg" class="logo" alt="toutube logo">
        </div>

        <div class="video-items">
            <div class="items" v-for="videos in setState" :key="videos.id.videoId" @click="selectedVid(videos.id.videoId)" >
                <img :src="videos.snippet.thumbnails.high.url" alt="video thumbnail">
                <div class="video-info">
                    <small> {{videos.snippet.title}} </small>
                </div>
            </div>            
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name:'videoItems',
        computed:{
            ...mapGetters(['setState'])
        },
        methods:{
            ...mapActions(['fetchVideos','fetchSelectedVid']),
            selectedVid(id) {
                this.fetchSelectedVid(id)
            }
        },
        mounted(){
            this.fetchVideos()
        }
    }
</script>

<style scoped>
    .video-items {
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         gap:1rem;
    }

    .video-items > div {
        width: 230px;
    } 

    small {
      color: #292626;
    }

    .video-info {
        padding:0 0.5rem;
    }

    .items > img {
        width: 100%;
        height: 115px;
        object-fit: cover;
    }


    .logo {
        width: 6rem;
        margin: 0.5rem 0;
    }
</style>