import { Component, Vue } from 'vue-property-decorator';

// Define the component class
@Component({
  components: {
  }
})

export default class ShopPage extends Vue {

    public items = [
    ['mdi-email', 'Inbox'],
    ['mdi-account-supervisor-circle', 'Supervisors'],
    ['mdi-clock-start', 'Clock-in'],
    ];

    public searchableItems = ['Katsuo Ohno 1st Edition Albums', 'Yuji Ohno 1st Edition Albums', 'Steve Cole 1st Edition Albums'];
    public prices = ['1000$', '1500$', '2000$'];
    public eras = ['1970s', '1990s', '2000s'];

    public listOfAlbums = [
        {
          artist: 'Katsuo Ohno',
          album: {     
            src: 'https://open.spotify.com/embed/album/2tCNihdd8N4TqfouIoDgwu?utm_source=generator',
            era: '1990s',
            price: '1500$'
          },
          category: 'Katsuo Ohno 1st Edition Albums'
        },

        {
          artist: 'Katsuo Ohno',
          album: {     
            src: 'https://open.spotify.com/embed/album/0fAhvb5Ir2kHM2DREhn45a?utm_source=generator',
            era: '1990s',
            price: '2000$'
          },
          category: 'Katsuo Ohno 1st Edition Albums'
        },

        {
          artist: 'Katsuo Ohno',
          album: {     
            src: 'https://open.spotify.com/embed/album/1KvpgzU0FqKKvneATY175e?utm_source=generator',
            era: '1990s',
            price: '1000$'
          },
          category: 'Katsuo Ohno 1st Edition Albums'
        },

        // Yuji Ohno albums
        {
          artist: 'Yuji Ohno',
          album: {     
            src: 'https://open.spotify.com/embed/album/4PZ92qFQ2dNB4MWpNE8PQl?utm_source=generator',
            era: '1970s',
            price: '2000$'
          },
          category: 'Yuji Ohno 1st Edition Albums'
        },

        {
          artist: 'Yuji Ohno',
          album: {     
            src: 'https://open.spotify.com/embed/album/6LTJXQryR0OE9dn9QLByis?utm_source=generator',
            era: '2000s',
            price: '1500$'
          },
          category: 'Yuji Ohno 1st Edition Albums'
        },

        {
          artist: 'Yuji Ohno',
          album: {     
            src: 'https://open.spotify.com/embed/album/6C3izrV3glLAjyosLvPB5e?utm_source=generator',
            era: '2000s',
            price: '1000$'
          },
          category: 'Yuji Ohno 1st Edition Albums'
        },
        // Steve Cole albums

        {
          artist: 'Steve Cole',
          album: {     
            src: 'https://open.spotify.com/embed/album/0BnQMPzjGWbmoAOPFs5Nsn?utm_source=generator',
            era: '1990s',
            price: '2000$'
          },
          category: 'Steve Cole 1st Edition Albums'
        },

        {
          artist: 'Steve Cole',
          album: {     
            src: 'https://open.spotify.com/embed/album/79NioZBsKsNaZ8BinJEYyg?utm_source=generator',
            era: '1990s',
            price: '2000$'
          },
          category: 'Steve Cole 1st Edition Albums'
        },
        
        {
          artist: 'Steve Cole',
          album: {     
            src: 'https://open.spotify.com/embed/album/4mdVVDWleF5p2KLaCYE6XD?utm_source=generator',
            era: '2000s',
            price: '1000$'
          },
          category: 'Steve Cole 1st Edition Albums'
        }
      ];

      public searchedItem: string = '';
      public priceValue: string = '';
      public eraValue: string = '';
      public cartItem: {src: string, era: string, price: string}[] = [];

      public filterBySearch() {
      return this.listOfAlbums.filter((artistCategory) => 
      (this.searchedItem === ''  ? this.listOfAlbums : this.searchedItem === artistCategory.category) &&
      (this.priceValue === ''  ? this.listOfAlbums : this.priceValue === artistCategory.album.price) &&
      (this.eraValue === ''  ? this.listOfAlbums : this.eraValue === artistCategory.album.era)
      
      );
      }

      public cartDisplay(album: {src: string, era: string, price: string}[]) {
        if(!album) {
          return ''
        } 
          else {
            return album
            
        }


      }

      public removeItem(removedAlbum: number){
         return this.cartItem.splice( removedAlbum, 1)

      }

      public verify() {
        if (this.cartItem.length == 0) {
          return false
        } else if (this.cartItem.length > 0) {
          return true
        }
        
      }
      

      // public filteredArtists() {
      //   if (!this.selectValue) {
      //     return this.artists; // Return all artists if no genre is selected
      //   } 
      //   else {
      //     return this.artists.filter((artist) => artist.genre === this.selectValue);
      //   }
      // }

      
}