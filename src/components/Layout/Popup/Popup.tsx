/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { Checkbox, TextField } from '@mui/material';
import Title from '@/components/Outlet/Title/Title';
import { Formik, Form as FormikForm, Field, FormikHelpers } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { form, popupData } from './popup.data';
import * as classes from './style';
import 'react-phone-number-input/style.css'; // Импорт стилей

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IFirstModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  name1: string;
  email1: string;
  phone: string;
  checkbox2: boolean;
}

export default function FirstModal({ open, setOpen }: IFirstModalProps) {
  const handleClose = () => setOpen(false);

  const INITIAL_FORM_VALUES = {
    name1: '',
    email1: '',
    phone: '',
    checkbox2: false,
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    name1: yup.string().required(form.form.field1.validation),
    email1: yup.string().email().required(form.form.field3.validation),
    phone: yup
      .string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Введите корректный номер телефона')
      .required(form.form.field5.validation),
    checkbox2: yup.boolean().oneOf([true], 'You need to confirn terms and conditions'),
  });

  const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    const notifySucsess = () => {
      toast.success('Thank you!', {
        position: 'bottom-left',
      });
    };
    notifySucsess();
    resetForm();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box
          css={classes.modal}
          sx={style}>
          <Title
            text={popupData.title}
            color='#000'
            fontSize='40px'
          />
          <div>
            <Formik
              initialValues={INITIAL_FORM_VALUES}
              onSubmit={handleSubmit}
              validationSchema={VALIDATION_SCHEMA}>
              {({ values, errors, touched, setFieldValue }) => (
                <FormikForm css={classes.form}>
                  <div css={classes.fields}>
                    <div css={classes.fieldsWrap}>
                      <div css={classes.field}>
                        <label htmlFor='name1'>Your name</label>
                        <Field
                          name='name1'
                          id='name1'
                          placeholder={form.form.field1.placeholder}
                          as={TextField}
                          error={touched.name1 && Boolean(errors.name1)}
                          helperText={touched.name1 && errors.name1}
                        />
                      </div>
                    </div>
                    <div css={classes.field}>
                      <label htmlFor='email1'>Your email</label>
                      <Field
                        name='email1'
                        id='email1'
                        placeholder={form.form.field3.placeholder}
                        as={TextField}
                        error={touched.email1 && Boolean(errors.email1)}
                        helperText={touched.email1 && errors.email1}
                      />
                    </div>

                    <div css={classes.field}>
                      <label htmlFor='phone'>Your phone number</label>
                      <PhoneInput
                        css={classes.PhoneInput}
                        name='phone'
                        id='phone'
                        placeholder={form.form.field5.placeholder}
                        value={values.phone}
                        onChange={(value) => setFieldValue('phone', value)}
                      />
                      {touched.phone && errors.phone && <p css={classes.telError}>{errors.phone}</p>}
                    </div>
                    <div>
                      <div css={classes.checkboxWrap}>
                        <label htmlFor='checkbox1'>{form.form.сheckbox.placeholder}</label>
                        <Checkbox
                          name='checkbox1'
                          id='checkbox1'
                          onChange={(e) => setFieldValue('checkbox1', e.target.checked)}
                        />
                      </div>
                      <div css={classes.checkboxWrap}>
                        <label
                          htmlFor='checkbox2'
                          dangerouslySetInnerHTML={{ __html: form.form.сheckbox2.placeholder }}
                        />
                        <Checkbox
                          name='checkbox2'
                          id='checkbox2'
                          checked={values.checkbox2}
                          onChange={(e) => setFieldValue('checkbox2', e.target.checked)}
                        />
                        {touched.checkbox2 && errors.checkbox2 && <p>{errors.checkbox2}</p>}
                      </div>
                    </div>
                  </div>
                  <Button
                    size='large'
                    type='submit'>
                    {form.form.button}
                  </Button>
                </FormikForm>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
