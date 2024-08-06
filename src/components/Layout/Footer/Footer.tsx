import { Grid, Box, TextField, Button, Typography } from '@mui/material';
import Container from '@/components/Outlet/Container';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import Link from 'next/link';
import * as yup from 'yup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as classes from './style';
import Logo from '../Logo/Logo';
import { footerData } from './footer.data';

const INITIAL_FORM_VALUES = {
  email_newsletter: '',
};

const VALIDATION_SCHEMA = yup.object().shape({
  email_newsletter: yup.string().email('Invalid email address').required('Email is required'),
});

interface FormValues {
  email_newsletter: string;
}

export default function Footer() {
  const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    const notifySucsess = () => {
      toast.success('Thank you for subscribing!', {
        position: 'bottom-left',
      });
    };
    notifySucsess();
    resetForm();
  };

  return (
    <footer css={classes.footer}>
      <div>
        <Container>
          <div css={classes.body}>
            <Grid
              item
              xs={12}
              md={4}>
              <div css={classes.column}>
                <Typography variant='h4'>About Us</Typography>
                <Typography variant='h5'>
                  With a commitment to excellence and a dedication to customer satisfaction, we strive to make every
                  journey seamless and memorable. Trust us to be your ultimate partner in travel, guiding you every step
                  of the way towards unforgettable adventures.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}>
              <div css={classes.column}>
                <Typography variant='h4'>Contact Information</Typography>
                <div>
                  <Box
                    display='flex'
                    alignItems='center'
                    gap={2}
                    mb={2}>
                    <LocationOnIcon style={{ width: 30, height: 40 }} />
                    <span>{footerData.adress}</span>
                  </Box>
                  <Box
                    display='flex'
                    gap={2}
                    alignItems='center'>
                    <EmailIcon style={{ width: 30, height: 40 }} />
                    <Link
                      href='mailto:reservation@grand-hotel.com.ua'
                      color='inherit'>
                      {footerData.email}
                    </Link>
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}>
              <div css={classes.column}>
                <Typography variant='h4'>Subscribe to our news</Typography>
                <Formik
                  initialValues={INITIAL_FORM_VALUES}
                  validationSchema={VALIDATION_SCHEMA}
                  onSubmit={handleSubmit}>
                  {({ errors, touched }) => (
                    <Form css={classes.inputWrap}>
                      <Field
                        as={TextField}
                        type='email'
                        name='email_newsletter'
                        id='email_newsletter'
                        variant='outlined'
                        placeholder='Your email'
                        fullWidth
                        error={touched.email_newsletter && Boolean(errors.email_newsletter)}
                        helperText={touched.email_newsletter && errors.email_newsletter}
                      />
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        aria-label='submit'>
                        <EmailIcon />
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Grid>
          </div>
        </Container>
      </div>
      <Container>
        <Box
          css={classes.copy}
          mt={10}>
          <Logo />
          <Typography
            mt={{ xs: 3, sm: 0 }}
            textAlign={{ xs: 'center', sm: 'right' }}>
            ©&nbsp;2024 All Rights Reserved. <br className='d-sm-none' />
            <Link
              href='/terms-and-conditions'
              color='inherit'>
              Terms of Use
            </Link>
            &nbsp;and&nbsp;
            <Link
              href='/privacy-policy'
              color='inherit'>
              Privacy Policy
            </Link>
            .
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
