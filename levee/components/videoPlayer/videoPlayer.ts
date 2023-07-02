import { Component, Vue } from 'vue-property-decorator';
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

@Component({
  components: {
    VideoPlayer
  }
})
export default class VideoPlayerComponent extends Vue {
  
}