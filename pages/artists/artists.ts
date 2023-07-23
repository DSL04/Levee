import { Component, Vue } from 'vue-property-decorator';

// Define the component class
@Component({
  components: {
  }
})
export default class ArtistsPage extends Vue {
  // Data properties
  public artists = [
    {
      name: "Katsu Ohno",
      src: 'https://open.spotify.com/embed/artist/3qqjOqSKN1IKax9C8VmFmZ?utm_source=generator',
      genre: "Contemporary Jazz"
    },

    {
      name: "Yuji Ohno",
      src: 'https://open.spotify.com/embed/artist/7xIfi0ePXzLGlYO5lFjnvu?utm_source=generator',
      genre: "Contemporary Jazz"
    },

    {
      name: "Steve Cole",
      src: 'https://open.spotify.com/embed/artist/6rpOQ4XZKUz0ayWSMgvmWb?utm_source=generator',
      genre: "Smooth Jazz"
    },

    {
      name: "Jiro Inagaki",
      src: 'https://open.spotify.com/embed/artist/3iIErrW9Zsp3U4UqrB71jq?utm_source=generator',
      genre: "Fusion Jazz"
    },

    {
      name: "Ben Matthews",
      src: 'https://open.spotify.com/embed/artist/3v7zpTrvEZgZFEnsILoAao?utm_source=generator',
      genre: "Smooth Jazz"
    },

    {
      name: "Eric Darius",
      src: 'https://open.spotify.com/embed/artist/39HDjLbYtWrCQrqpl9sOX8?utm_source=generator',
      genre: "Contemporary Jazz"
    },

    {
      name: "Vandell Andrew",
      src: 'https://open.spotify.com/embed/artist/2CqMN6Wc7xALKwcrV2vqEW?utm_source=generator',
      genre: "Contemporary Jazz"
    },

    {
      name: "Yusuf Lateef",
      src: 'https://open.spotify.com/embed/artist/33XkS6h90eeK7e6OJHw0mq?utm_source=generator',
      genre: "Smooth Jazz"
    },

    {
      name: "Hiromi Uehara",
      src: 'https://open.spotify.com/embed/artist/7DeuppKQdCVhuWrzzCBBpc?utm_source=generator',
      genre: "Contemporary Jazz"
    },

    {
      name: "Robert Glasper",
      src: "https://open.spotify.com/embed/artist/5cM1PvItlR21WUyBnsdMcn?utm_source=generator",
      genre: "Contemporary Jazz"
    },

    {
      name: "Esperanza Spalding",
      src: "https://open.spotify.com/embed/artist/5bepW5vcdRzheNc0F8lHJ5?utm_source=generator",
      genre: "Contemporary Jazz"
    },

    {
      name: "Kamasi Washington",
      src: "https://open.spotify.com/embed/artist/6HQYnRM4OzToCYPpVBInuU?utm_source=generator",
      genre: "Contemporary Jazz"
    },

    {
      name: "Urban Knights",
      src: "https://open.spotify.com/embed/artist/3aCeHneB4PHsdJFVkJzEM5?utm_source=generator",
      genre: "Smooth Jazz"
    },

    {
      name: "Diana Krall",
      src: "https://open.spotify.com/embed/artist/5z1VAFwT35EVvCp1XlZZuL?utm_source=generator",
      genre: "Smooth Jazz"
    },

    {
      name: "Chick Corea",
      src: "https://open.spotify.com/embed/artist/5olDKSsFhhmwh8UCWwKtpq?utm_source=generator",
      genre: "Fusion Jazz"
    },

    {
      name: "Tarek Yamani",
      src: "https://open.spotify.com/embed/artist/2SUJL3rs8CrkPCnc5kV6QK?utm_source=generator",
      genre: "Fusion Jazz"
    },

    {
      name: "Toku",
      src: "https://open.spotify.com/embed/artist/5PKGGjmxe8c0uWQSJlhL2q?utm_source=generator",
      genre: "Contemporary Jazz"
    },

    {
      name: "Youngjoo Song",
      src: "https://open.spotify.com/embed/artist/0jyJptmLldFZbeSm7KDopo?utm_source=generator",
      genre: "Contemporary Jazz"
    }
 
  ];

  public awards = [
    {
      title: "Grammy Award for Best Contemporary Jazz Album",
      subtitle: "Recognizes outstanding contemporary jazz albums."
    },
    {
      title: "Jazz FM Award for Album of the Year",
      subtitle: "Awarded to the best jazz album of the year."
    },
    {
      title: "DownBeat Critics Poll for Rising Star Saxophonist",
      subtitle: "Voted as a rising star saxophonist by DownBeat critics."
    },
    {
      title: "Smooth Jazz Award for Best Collaboration",
      subtitle: "Recognizes the best collaboration in smooth jazz music."
    },
    {
      title: "Jazz Times Reader's Poll for Pianist of the Year",
      subtitle: "Voted as the pianist of the year by Jazz Times readers."
    },
    {
      title: "Golden Disk Award for Best Jazz & Crossover Performance",
      subtitle: "Recognizes the best jazz and crossover performance."
    },
    {
      title: "Jazz Japan Award for Jazz Album of the Year",
      subtitle: "Awarded to the best jazz album of the year in Japan."
    },
    {
      title: "Korean Music Award for Best Jazz & Crossover Performance",
      subtitle: "Recognizes the best jazz and crossover performance in Korea."
    },
    {
      title: "Billboard Japan Music Award for Jazz Artist of the Year",
      subtitle: "Awarded to the jazz artist of the year by Billboard Japan."
    },
    {
      title: "Korea Popular Music Award for Best Jazz Performance",
      subtitle: "Recognizes the best jazz performance in Korea."
    },
    {
      title: "Seoul Music Award for Best Jazz Album",
      subtitle: "Awarded to the best jazz album by Seoul Music Award."
    },
    {
      title: "Asian Television Award for Best Original Music Score",
      subtitle: "Recognizes the best original music score for television."
    },
    {
      title: "Japan Academy Prize for Outstanding Achievement in Music",
      subtitle: "Recognizes outstanding achievement in music for films."
    },
    {
      title: "Annie Award for Outstanding Achievement in Music in an Animated Television Production",
      subtitle: "Recognizes outstanding achievement in music for animated television."
    },
    {
      title: "Korean Film Award for Best Original Music",
      subtitle: "Recognizes the best original music in Korean films."
    }
  ];

  public collabs = [
    {
      src: require('../../static/tmsStudio.png') ,
      description: "TMS"
    },
    {
      src: require('../../static/cona.jpg'),
      description: "DETECTIVE CONAN"
    },
    {
      src: require('../../static/lupin.jpg') ,
      description: "LUPIN THE 3RD"
    },
    {
      src: require('../../static/robert.jpg') ,
      description: "KENDRICK LAMAR"
    },
  ];

  public genres = [ 'Smooth Jazz', "Contemporary Jazz", "Fusion Jazz"];

  public selectValue: string = '';

  //Methods

  public filteredArtists() {
    if (!this.selectValue) {
      return this.artists; // Return all artists if no genre is selected
    } 
    else {
      return this.artists.filter((artist) => artist.genre === this.selectValue);
    }
  }
  
}
