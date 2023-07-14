import { Component, Vue } from 'vue-property-decorator';

// Define the component class
@Component({
  components: {
  }
})
export default class BookingPage extends Vue {
  public selectedEvent = '';

  //Alternating Steps 
  public step = 1;
  public totalSteps = 4;
  public storedEvent = {};
  public artistName = ''

  public incrementStepAndStoreEvent(event: any) {
    this.step += 1;
    this.storedEvent = event;
    this.artistName = event.artistName;
    

  }

  public eventOptions = [
    'KATSU OHNO(SEPTEMBER 15th 2023)', 
    'YUJI OHNO(OCTOBER 13th 2023)', 
    'STEVE COLE(NOVEMBER 3rd 2023)',
    'JIRO INAGAKI(DECEMBER 22nd 2023)',
    'BEN MATTHEWS(JANUARY 8th 2024)',
    'ERIC DARIUS(FEBRUARY 16th 2024)',
    'VANDELL ANDREW(MARCH 24th 2024)',
    'YUSUF LATEEF(APRIL 21st 2024)',
    'HIROMI UEHARA(MAY 12th, 2024)',
    'ROBERT GLASPER(JUNE 29th 2024)',
    'ESPERANZA SPALDING(JULY 8th 2024)'
]



public events = [
  // September - October 2023
  {
    date: "September 15th, 2023",
    eventName: "KATSU OHNO(SEPTEMBER 15th 2023)",
    theater: "Harmonia Heights Jazz Club",
    artistImage: require("../../static/katsuo.jpeg"),
    artistName: "Katsu Ohno",
  },
  {
    date: "October 13th, 2023",
    eventName: "YUJI OHNO(OCTOBER 13th 2023)",
    theater: "Harmonia Heights Jazz Club",
    artistImage: require("../../static/Yuji2.jpg"),
    artistName: "Yuji Ohno",
  },

  // November - December 2023
  {
    date: "November 3rd, 2023",
    eventName: "STEVE COLE(NOVEMBER 3rd 2023)",
    theater: "Jazzscape Terrace",
    artistImage: require("../../static/Steve2.jpg"),
    artistName: "Steve Cole",
  },
  {
    date: "December 22nd, 2023",
    eventName: "JIRO INAGAKI(DECEMBER 22nd 2023)",
    theater: "Jazzscape Terrace",
    artistImage: require("../../static/Jiro2.jpg"),
    artistName: "Jiro Inagaki",
  },

  // January - February 2024
  {
    date: "January 8th, 2024",
    eventName: "BEN MATTHEWS(JANUARY 8th 2024)",
    theater: "Melody Mansion Lounge",
    artistImage: require("../../static/Ben2.jpg"),
    artistName: "Ben Matthews",
  },
  {
    date: "February 16th, 2024",
    eventName: "ERIC DARIUS(FEBRUARY 16th 2024)",
    theater: "Melody Mansion Lounge",
    artistImage: require("../../static/Eric2.jpg"),
    artistName: "Eric Darius",
  },

  // March - April 2024
  {
    date: "March 4th, 2024",
    eventName: "VANDELL ANDREW(MARCH 24th 2024)",
    theater: "Rhythm Haven Auditorium",
    artistImage: require("../../static/Vandell2.jpeg"),
    artistName: "Vandell Andrew",
  },
  {
    date: "April 21st, 2024",
    eventName: "YUSUF LATEEF(APRIL 21st 2024)",
    theater: "Rhythm Haven Auditorium",
    artistImage: require("../../static/Yusuf2.jpg"),
    artistName: "Yusuf Lateef",
  },

  // May - June 2024
  {
    date: "May 12th, 2024",
    eventName: "HIROMI UEHARA(MAY 12th, 2024)",
    theater: "Melody Mansion Lounge",
    artistImage: require("../../static/Hiromi2.jpg"),
    artistName: "Hiromi Uehara",
  },
  {
    date: "June 29th, 2024",
    eventName: "ROBERT GLASPER(JUNE 29th 2024)",
    theater: "Melody Mansion Lounge",
    artistImage: require("../../static/Robert2.jpg"),
    artistName: "Robert Glasper",
  },

  // July - August 2024
  {
    date: "July 8th, 2024",
    eventName: "ESPERANZA SPALDING(JULY 8th 2024)",
    theater: "Harmonia Heights Jazz Club",
    artistImage: require("../../static/Esperanza2.jpg"),
    artistName: "Esperanza Spalding",
  }
]

public displayEventInfo(event: any) {
  if(!this.selectedEvent) {
    return;
  } else {
    return this.events.filter((event) => event.eventName === this.selectedEvent)
  }
}

public buttonDisplay() {
  if(this.selectedEvent == '') {
    return false;

  } else {
    return true;
  }
}

//Validation Form Logic
  public enableButton = true;

  public firstName = '';
  public lastName = '';
  public email = '';
  public phoneNumber = '';
  
  //Name Rules
  nameRules: ((value: string) => string | boolean)[] = [
    value => {
      if (value) return true;

      return 'Name is required.';
    },
    value => {
      if (value?.length <= 10) return true;

      return 'Name must be less than 10 characters.';
    },
  ];

  //Email Rules
  emailRules: ((value: string) => string | boolean)[] = [
    value => {
      if (value) return true;

      return 'E-mail is required.';
    },
    value => {
      if (/.+@.+\..+/.test(value)) return true;

      return 'E-mail must be valid.';
    },
  ];

  public clearForm() {
    this.firstName = ''
    this.lastName = ''
    this.phoneNumber = ''
    this.email = ''
  }

  public verifyFormInputs() {
    if ((this.firstName.length == 0 || this.lastName.length == 0 || this.phoneNumber.length < 10 || !(this.email.includes('.com')))  ) {
      return this.enableButton = true;
    } else if (this.firstName.length > 0 && this.lastName.length > 0 && this.phoneNumber.length == 10 && this.email.includes('.com')) {
      return this.enableButton = false;
    }
  }
  

}