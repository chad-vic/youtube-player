<template>
    <div class="video-container">
       <div v-for="video in currentVideo" :key="video">
           <iframe :src="active" frameborder="0"></iframe>
            <div class="video-info">
                <h4> {{video.snippet.title}} </h4>
                <p> {{video.snippet.description.substring(0,200)}}...... </p>
            </div> 
       </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        name:'playVideo',
        computed: {
            ...mapGetters(['setState','active','currentVideo'])
        },
    }
</script>

<style scoped>

    .video-container {
        margin: 1rem 0;
        background: white;
        border-radius: 20px;
    }

    iframe {
        width: 100%;
        height: 340px;
    }

    .video-info {
       padding: 0.5rem;
    }

    h4 {
        margin: 0;
        padding: 0;
        color: #2b2828;
    }

    p{
        margin: 8px 0;
        padding: 0;
        line-height: 1.3;
        color: #615e5e;
        word-wrap:break-word;
    }
</style>