/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useRouter } from 'next/router';
import { useState } from 'react';
import baseUrl from '@/constants/baseUrl';
import axios from 'axios';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as yup from 'yup';
import { Formik, Form as FormikForm, Field } from 'formik';
import { TextField, Snackbar, Checkbox, TextareaAutosize } from '@mui/material';
import Container from '../Container';
import Title from '../Title/Title';
import { contactData, form } from './contact.data';
import * as classes from './style';
import Button from '../Button';

const INITIAL_FORM_VALUES = {
  name: '',
  surname: '',
  email: '',
};

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required(form.form.field1.validation),
  surname: yup.string().required(form.form.field2.validation),
  email: yup.string().email().required(form.form.field3.validation),
});

export default function ContactUs() {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (values: typeof INITIAL_FORM_VALUES) => {
    axios
      .post(baseUrl, values)
      .then(() => {
        setIsSnackbarOpen(true);
        setTimeout(() => {
          setIsSnackbarOpen(false);
          router.push('/submission-success');
        }, 3000);
      })
      .catch((error) => {
        throw new Error('Error submitting form:', error);
      });
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <section css={classes.contact}>
      <Container>
        <div css={classes.body}>
          <div>
            <Title
              color='#000'
              text={contactData.title}
            />
          </div>
          <div css={classes.center}>
            <Formik
              initialValues={INITIAL_FORM_VALUES}
              onSubmit={handleSubmit}
              validationSchema={VALIDATION_SCHEMA}>
              {({ errors, touched }) => (
                <FormikForm>
                  <div css={classes.fields}>
                    <div css={classes.fieldsWrap}>
                      <div css={classes.field}>
                        <label htmlFor='name'>Your name</label>
                        <Field
                          name='name'
                          id='name'
                          placeholder={form.form.field1.placeholder}
                          as={TextField}
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </div>
                      <div css={classes.field}>
                        <label htmlFor='surname'>Your surname</label>
                        <Field
                          name='surname'
                          placeholder={form.form.field2.placeholder}
                          id='surname'
                          as={TextField}
                          error={touched.surname && Boolean(errors.surname)}
                          helperText={touched.surname && errors.surname}
                        />
                      </div>
                    </div>
                    <div css={classes.field}>
                      <label htmlFor='email'>Your email</label>
                      <Field
                        name='email'
                        id='email'
                        placeholder={form.form.field3.placeholder}
                        as={TextField}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </div>
                    <div css={classes.field}>
                      <label htmlFor='message'>Your Message</label>
                      <Field
                        name='message'
                        id='message'
                        as={TextareaAutosize}
                        rows='3'
                        css={classes.message}
                      />
                    </div>
                    <div css={classes.checkboxWrap}>
                      <label htmlFor='checkbox'>{form.form.сheckbox.placeholder}</label>
                      <Checkbox
                        name='checkbox'
                        id='checkbox'
                      />
                    </div>
                  </div>
                  <Button
                    text={form.form.button}
                    size='large'
                    type='submit'
                  />
                </FormikForm>
              )}
            </Formik>
          </div>
          <div css={classes.bottom}>
            <div css={classes.contacts}>
              <EmailIcon />
              <span>plishlank@vemvme.com</span>
            </div>
            <div css={classes.contacts}>
              <LocationOnIcon />
              <span>mElcmelcmerlcm,p2mMdnecnec</span>
            </div>
          </div>
        </div>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message='Form submitted successfully'
        />
      </Container>
    </section>
  );
}
