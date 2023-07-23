import { Component, Vue } from 'vue-property-decorator';

// Define the component class
@Component({
  components: {
  }
})
export default class HomePage extends Vue {
    //Data Properties
    public venues = [
        {
          src: require('../static/venu1.jpg') ,
          description: "HARMONIA HEIGHTS JAZZ CLUB"
        },
        {
          src: 'https://images.squarespace-cdn.com/content/v1/5e74322153980d7786e4455a/cea07e96-dddc-4e31-a065-480c1c80a695/dizzys-color-header.jpg',
          description: "MELODY MANSION LOUNGE"
        },
        {
          src: require('../static/venu3.jpg') ,
          description: "JAZZSCAPE TERRACE"
        },
        {
          src: require('../static/venu4.jpg') ,
          description: "RHYTHM HAVEN AUDITORIUM"
        },
      ];

    public topArtists = [
        {
            artistName: 'KATSUO OHNO',
            artistImage: require('../static/katsuo.jpeg'),
            artistDescription: 'A Japanese musician and composer known for his exceptional mastery of the shamisen, a traditional three-stringed instrument. He combines traditional and contemporary elements in his playing style, creating a unique and influential musical expression.'
        },

        {
            artistName: 'YUJI OHNO',
            artistImage: require('../static/Yuji.jpg'),
            artistDescription: 'A Japanese jazz pianist and composer known for his work on the "Lupin III" anime series, creating memorable and dynamic soundtracks that blend jazz, funk, and fusion influences.'
        },

        {
            artistName: 'STEVE COLE',
            artistImage: require('../static/Cole.jpg'),
            artistDescription: 'An American smooth jazz saxophonist known for his soulful and melodic playing style, delivering captivating performances and producing chart-topping contemporary jazz hits.'
        },

        {
            artistName: 'JIRO INAGAKI',
            artistImage: require('../static/Jiro.jpg'),
            artistDescription: 'A Japanese jazz saxophonist and bandleader who played a significant role in popularizing jazz in Japan during the 1960s and 1970s. His music blends elements of traditional Japanese music with jazz, creating a unique and captivating sound.'
        },

        {
            artistName: 'ERIC DARIUS',
            artistImage: require('../static/Eric.jpg'),
            artistDescription: 'A dynamic saxophonist known for his soulful and energetic jazz performances. With his captivating melodies and infectious groove, he brings a fresh and vibrant sound to the genre, captivating audiences worldwide.'
        },

        {
            artistName: 'VANDELL ANDREW',
            artistImage: require('../static/Vandell.jpg'),
            artistDescription: 'Talented jazz vocalist with a mesmerizing voice that effortlessly blends soul, R&B, and jazz influences. Her expressive performances and heartfelt lyrics resonate deeply, creating a powerful connection with her listeners.'
        },

        {
            artistName: 'YUSUF LATEEF',
            artistImage: require('../static/Yusuf.jpg'),
            artistDescription: 'Groundbreaking multi-instrumentalist and composer who pushes the boundaries of jazz and embraces a diverse range of musical traditions. His innovative blend of Eastern and Western influences, coupled with his mastery of various instruments, creates a rich and captivating musical experience that continues to inspire and influence musicians today.'
        },
        
    ]
    
    


    //Methods
}