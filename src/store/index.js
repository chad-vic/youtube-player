import { createStore } from 'vuex'

export default createStore({
  state: {
    videos:[],
    videosLink:[],
    activeVideo:'',
    defaultQuery:'babies',
    apiKey:'AIzaSyCJrlkCV0pLdvSIZ80gGpW8bBaVCgnlqg4',
    // apiKey2:'AIzaSyDQAiCXLiwsdg3VnEWvl2jIc3Y4wUJh9Gk'
  },
  mutations: {
    setVideos(state,payload) {
        state.videosLink = []
        state.videosLink.push(payload.video)
        state.activeVideo = `https://youtube.com/embed/${payload.video.id.videoId}`
        state.videos = payload.videos 
    },
    fetchSelectedVid(state,payload) {
        state.videosLink = []
        state.videosLink.push(payload.video)
        state.activeVideo = `https://youtube.com/embed/${payload.video.id}`
    },
  
  },
  actions: {
     fetchVideos({commit,state},query) {
       fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=${query||state.defaultQuery}&type=video&key=${state.apiKey}`)
        .then((res) => res.json())
        .then((res) => {

          commit('setVideos',{
            videos:res.items,
            video:res.items[0]
          })
        })
    },
    fetchSelectedVid({commit,state},id) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${state.apiKey}&part=snippet,statistics,status`)
      .then((res) => res.json())
      .then((res) => {
        
        commit('fetchSelectedVid', {
          videos:res.items,
          video:res.items[0]
        })
      })
    }
      
  },
  getters:{
      setState(state){
        return state.videos
      },
      active(state){
        return state.activeVideo
      },
      currentVideo(state){
        return state.videosLink
      }
  },
  modules: {
  }
})
