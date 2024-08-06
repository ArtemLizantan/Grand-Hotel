export const popupData = {
    title: 'Sign up now to get real casino promotions',
  };

  export interface FieldType {
    label: string;
    name: string;
    placeholder: string;
    validation: string;
    сheckbox?: string;
    сheckbox2?: string;
  }

  export interface Form {
    form: {
      field1: FieldType;
      field2: FieldType;
      field3: FieldType;
      field4: FieldType;
      field5: FieldType; // Добавлено поле для телефона
      сheckbox: FieldType;
      button: string;
      message: string;
      сheckbox2: FieldType;
    };
  }

  export const form: Form = {
    form: {
      field1: {
        label: 'Your Name',
        name: 'name',
        placeholder: 'Enter Your Name',
        validation: 'Required',
      },
      field2: {
        label: 'Your Surname',
        name: 'surname',
        placeholder: 'Enter Your Surname',
        validation: 'Required',
      },
      field3: {
        label: 'Email Address',
        name: 'email',
        placeholder: 'Enter Your Email',
        validation: 'Required',
      },
      field4: {
        label: 'Message',
        name: 'message',
        placeholder: 'Enter Your Message',
        validation: 'Required',
      },
      field5: { // Добавлено поле для телефона
        label: 'Phone Number',
        name: 'phone',
        placeholder: 'Enter Your Phone Number',
        validation: 'Required',
      },
      сheckbox: {
        label: 'Checkbox',
        name: 'Checkbox',
        placeholder: 'I would like to receive exclusive promotions via E-mail & SMS',
        validation: 'Required',
      },
      сheckbox2: {
        label: 'Checkbox',
        name: 'Checkbox',
        placeholder: 'I accept the <a href="/terms-and-conditions">Terms and Conditions</a>',
        validation: 'Required',
      },
      button: 'SIGN NOW',
      message: 'Your answer was sent',
    },
  };
