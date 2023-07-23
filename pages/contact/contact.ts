import { Component, Vue } from 'vue-property-decorator';

// Define the component class
@Component
export default class ContactPage extends Vue {
  // Data properties
  public videoTitle: string = 'HOLLER AT US....';

  public timeLineTitle: string = 'HERE IS WHAT YOU CAN EXPECT';
  public timeLineCardTitle1: string = 'CONTACT INFO SECTION';
  public timeLineCardDescription1: string = 'Find our contact information if you are interested in reaching out, or need any details regarding a matter!';
  public timeLineCardTitle2: string = 'SIGN UP AS A JAZZ ARTISTS SECTION';
  public timeLineCardDescription2: string = 'Fans/Users can provide their information in the form if interested in joining us as a jazz artist.';

  public contactInfoTitle: string = 'CONTACT INFO';
  public locationTitle: string = 'LOCATION';
  public contactLocation: string = '1412 3rd Ave, New York, NY 10018, United States';
  public phoneTitle: string = 'PHONE';
  public contactPhone: string = '917-122-1412';
  public emailTitle: string = 'EMAIL';
  public contactEmail: string = 'kid@leveeJazz.com';

  
  public formTitle: string = 'INTERESTED IN JOINING OUR COMPANY AS A JAZZ ARTIST?';

  public valid: boolean = false;
  public firstName: string = '';
  public lastName: string = '';
  public phoneNumber: string = '';
  public comment: string = '';

  public firstNameLabel: string = 'First Name(ex. John)';
  public lastNameLabel: string = 'Last Name(ex. Charles)';
  public phoneNumberLabel: string = 'Phone Number(ex. 6123561023)';
  public emailLabel: string = 'E-mail(ex. pheon@outlook.com)';
  public commentLabel: string ='(optional)Write anything you deem interesting about yourself, or you thought we should know';

  public clearButtonText: string = 'CLEAR';
  public submitButtonText: string = 'SUBMIT';
  public confirmationText: string = 'THANK YOU FOR COMPLETING THE FORM. WE WILL REACH OUT TO YOU AS SOON AS WE CAN';
  
  overlay: boolean = false;
  zIndex: number = 0;

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
  email: string = '';
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
  phoneRules: ((value: string) => string | boolean)[] = [
    value => {
      if (value) return true;

      return 'Phone is required.';
    },
    value => {
      if (value?.length <= 10) return true;

      return 'Phone must be 10 characters.';
    },
  ];

  public enableButton = true;


  public switchToEnglish() {
    this.videoTitle = 'HOLLER AT US....';

    this.timeLineTitle = 'HERE IS WHAT YOU CAN EXPECT';
    this.timeLineCardTitle1 = 'CONTACT INFO SECTION';
    this.timeLineCardDescription1 = 'Find our contact information if you are interested in reaching out, or need any details regarding a matter!';
    this.timeLineCardTitle2 = 'SIGN UP AS A JAZZ ARTISTS SECTION';
    this.timeLineCardDescription2 = 'Fans/Users can provide their information in the form if interested in joining us as a jazz artist.';

    this.contactInfoTitle = 'CONTACT INFO';
    this.locationTitle = 'LOCATION';
    this.contactLocation = '1412 3rd Ave, New York, NY 10018, United States';
    this.phoneTitle = 'PHONE';
    this.contactPhone = '917-122-1412';
    this.emailTitle = 'EMAIL';
    this.contactEmail = 'kid@leveeJazz.com';

    
    this.formTitle = 'INTERESTED IN JOINING OUR COMPANY AS A JAZZ ARTIST?';

    this.clearButtonText = 'CLEAR';
    this.submitButtonText = 'SUBMIT';
    this.confirmationText = 'THANK YOU FOR COMPLETING THE FORM. WE WILL REACH OUT TO YOU AS SOON AS WE CAN';

    this.firstNameLabel = 'First Name(ex. John)';
    this.lastNameLabel = 'Last Name(ex. Charles)';
    this.phoneNumberLabel = 'Phone Number(ex. 6123561023)';
    this.emailLabel = 'E-mail(ex. pheon@outlook.com)'
    this.commentLabel ='(optional)Write anything you deem interesting about yourself, or you thought we should know'

  
  }

  public switchToFrench() {
    this.videoTitle = 'NOUS CONTACTER....';

    this.timeLineTitle = 'CE QUE VOUS POUVEZ ATTENDRE';
    this.timeLineCardTitle1 = 'SECTION INFORMATIONS DE CONTACT';
    this.timeLineCardDescription1 = "Trouvez nos informations de contact si vous souhaitez nous joindre ou si vous avez besoin de détails concernant un sujet !";
    this.timeLineCardTitle2 = 'SECTION INSCRIPTION EN TANT QU\'ARTISTE JAZZ';
    this.timeLineCardDescription2 = 'Les fans/utilisateurs peuvent fournir leurs informations dans le formulaire s\'ils souhaitent nous rejoindre en tant qu\'artiste jazz.';

    this.contactInfoTitle = 'INFORMATIONS DE CONTACT';
    this.locationTitle = 'EMPLACEMENT';
    this.contactLocation = '1412 3rd Ave, New York, NY 10018, États-Unis';
    this.phoneTitle = 'TÉLÉPHONE';
    this.contactPhone = '917-122-1412';
    this.emailTitle = 'E-MAIL';
    this.contactEmail = 'kid@leveeJazz.com';

    this.formTitle = 'INTÉRESSÉ(E) À REJOINDRE NOTRE COMPAGNIE EN TANT QU\'ARTISTE JAZZ ?';

    this.clearButtonText = 'EFFACER';
    this.submitButtonText = 'SOUMETTRE';
    this.confirmationText = 'MERCI D\'AVOIR COMPLÉTÉ LE FORMULAIRE. NOUS VOUS CONTACTERONS DÈS QUE POSSIBLE.';

    this.firstNameLabel = 'Prénom(ex. John)';
    this.lastNameLabel = 'Nom(ex. Charle)';
    this.phoneNumberLabel = 'Numéro de téléphone(ex. 6123561023)';
    this.emailLabel = 'E-mail(ex. pheon@outlook.com)'
    this.commentLabel = '(optionel)Écrivez tout ce que vous jugez intéressant à propos de vous-même ou que vous pensez que nous devrions savoir';

  }


  public clearForm() {
    this.firstName = ''
    this.lastName = ''
    this.phoneNumber = ''
    this.email = ''
    this.comment = ''
  }

  public verifyFormInputs() {
    if ((this.firstName.length == 0 || this.lastName.length == 0 || this.phoneNumber.length < 10 || !(this.email.includes('.com')))  ) {
      return this.enableButton = true;
    } else if (this.firstName.length > 0 && this.lastName.length > 0 && this.phoneNumber.length == 10 && this.email.includes('.com')) {
      return this.enableButton = false;
    }
  }

}
