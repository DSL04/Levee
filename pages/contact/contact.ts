import { Component, Vue } from 'vue-property-decorator';

// Define the component class
@Component
export default class ContactPage extends Vue {
  // Data properties
  valid: boolean = false;
  firstname: string = '';
  lastname: string = '';
  phone: string = '';
  comment: String = '';
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
}
