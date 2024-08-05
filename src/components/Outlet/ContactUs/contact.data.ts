export interface FieldType {
  label: string;
  name: string;
  placeholder: string;
  validation: string;
  сheckbox?: string;
}

export interface Form {
  form: {
    field1: FieldType;
    field2: FieldType;
    field3: FieldType;
    field4: FieldType;
    сheckbox: FieldType;
    button: string;
    message: string;
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
    сheckbox: {
      label: 'Checkbox',
      name: 'Checkbox',
      placeholder: 'Save my name, email, and website in this browser for the next time.',
      validation: 'Required',
    },
    button: 'Submit',
    message: 'Your answer was sent',
  },
};

export const contactData = {
  title: 'Contact Us',
  button: 'BOOK NOW',
};
