import { Component, Vue } from 'vue-property-decorator';


// Define the component class
@Component({
  components: {
  }
})
export default class EventsPage extends Vue {
    public dates: string[] = [
        'September - October 2023',
        'November - December 2023',
        'January - February 2024',
        'March - April 2024',
        'May - June 2024',
        'July - August 2024',
      ];

    public events = [
        // September - October 2023
        {
          date: "September 15th, 2023",
          dateRange: "September - October 2023",
          theater: "Harmonia Heights Jazz Club",
          artistImage: require("../../static/katsuo.jpeg"),
          artistName: "Katsu Ohno",
          eventDescription: "Join Katsu Ohno on September 15th, 2023, at Harmonia Heights Jazz Club for an unforgettable night of contemporary jazz as he showcases his virtuosity on the piano. Prepare to be moved by his soulful compositions and exquisite musicianship."
        },
        {
          date: "October 13th, 2023",
          dateRange: "September - October 2023",
          theater: "Harmonia Heights Jazz Club",
          artistImage: require("../../static/Yuji2.jpg"),
          artistName: "Yuji Ohno",
          eventDescription: "Experience the mesmerizing compositions of Yuji Ohno on October 13th, 2023, at Harmonia Heights Jazz Club, as he takes the stage with his signature blend of contemporary jazz and captivating melodies. Don't miss this opportunity to witness his musical brilliance."
        },
      
        // November - December 2023
        {
          date: "November 3rd, 2023",
          dateRange: "November - December 2023",
          theater: "Jazzscape Terrace",
          artistImage: require("../../static/Steve2.jpg"),
          artistName: "Steve Cole",
          eventDescription: "Get ready to groove to the smooth sounds of Steve Cole on November 3rd, 2023, at Jazzscape Terrace, as he brings his unique blend of contemporary jazz and R&B to the stage. Prepare for an evening of soulful melodies and infectious rhythms."
        },
        {
          date: "December 22nd, 2023",
          dateRange: "November - December 2023",
          theater: "Jazzscape Terrace",
          artistImage: require("../../static/Jiro2.jpg"),
          artistName: "Jiro Inagaki",
          eventDescription: "Experience the legendary Jiro Inagaki on December 22nd, 2023, at Jazzscape Terrace, and his band Soul Media as they bring their iconic fusion jazz sound to the stage. Prepare for an evening of energetic performances and infectious grooves."
        },
      
        // January - February 2024
        {
          date: "January 8th, 2024",
          dateRange: "January - February 2024",
          theater: "Melody Mansion Lounge",
          artistImage: require("../../static/Ben2.jpg"),
          artistName: "Ben Matthews",
          eventDescription: "Witness the smooth jazz vibes of Ben Matthews on January 8th, 2024, at Melody Mansion Lounge, as he captivates the audience with his soulful saxophone melodies. Get ready for an intimate night filled with enchanting tunes and captivating improvisations."
        },
        {
          date: "February 16th, 2024",
          dateRange: "January - February 2024",
          theater: "Melody Mansion Lounge",
          artistImage: require("../../static/Eric2.jpg"),
          artistName: "Eric Darius",
          eventDescription: "Don't miss the electrifying performance of Eric Darius on February 16th, 2024, at Melody Mansion Lounge, as he brings his dynamic contemporary jazz fusion to the stage. Get ready to be blown away by his energetic saxophone solos and infectious stage presence."
        },
      
        // March - April 2024
        {
          date: "March 4th, 2024",
          dateRange: "March - April 2024",
          theater: "Rhythm Haven Auditorium",
          artistImage: require("../../static/Vandell2.jpeg"),
          artistName: "Vandell Andrew",
          eventDescription: "Experience the soulful sounds of Vandell Andrew on March 4th, 2024, at Rhythm Haven Auditorium, as he showcases his versatility and passion for contemporary jazz. Get ready for a night of smooth melodies, heartfelt performances, and soul-stirring improvisations."
        },
        {
          date: "April 21st, 2024",
          dateRange: "March - April 2024",
          theater: "Rhythm Haven Auditorium",
          artistImage: require("../../static/Yusuf2.jpg"),
          artistName: "Yusuf Lateef",
          eventDescription: "Join us on April 21st, 2024, at Rhythm Haven Auditorium for a mesmerizing evening with Yusuf Lateef, the master of smooth jazz. Immerse yourself in his enchanting saxophone melodies and experience the sheer beauty of his musical storytelling."
        },
      
        // May - June 2024
        {
          date: "May 12th, 2024",
          dateRange: "May - June 2024",
          theater: "Melody Mansion Lounge",
          artistImage: require("../../static/Hiromi2.jpg"),
          artistName: "Hiromi Uehara",
          eventDescription: "Prepare for an extraordinary musical journey with Hiromi Uehara on May 12th, 2024, at Melody Mansion Lounge. Witness her virtuosic piano skills, intricate compositions, and boundless creativity as she pushes the boundaries of contemporary jazz."
        },
        {
          date: "June 29th, 2024",
          dateRange: "May - June 2024",
          theater: "Melody Mansion Lounge",
          artistImage: require("../../static/Robert2.jpg"),
          artistName: "Robert Glasper",
          eventDescription: "Experience the groundbreaking artistry of Robert Glasper on June 29th, 2024, at Melody Mansion Lounge, as he blurs the lines between jazz, hip-hop, and R&B. Prepare for an unforgettable night filled with innovative improvisations and soul-stirring melodies."
        },
      
        // July - August 2024
        {
          date: "July 8th, 2024",
          dateRange: "July - August 2024",
          theater: "Harmonia Heights Jazz Club",
          artistImage: require("../../static/Esperanza2.jpg"),
          artistName: "Esperanza Spalding",
          eventDescription: "Join us on July 8th, 2024, at Harmonia Heights Jazz Club, as we welcome the extraordinary Esperanza Spalding to the stage. Immerse yourself in her genre-defying music, powerful vocals, and unmatched creativity as she pushes the boundaries of contemporary jazz."
        }
    ]

    public selectedDate: string = '';

    public setDate(date: string) {
        this.selectedDate = date;

    }


    public filterEvents() {
        if (!this.selectedDate) {
            return this.events.filter((event) => event.dateRange === 'September - October 2023')
        } 
        else {
            return this.events.filter((event) => event.dateRange === this.selectedDate);

        }

    }

}
