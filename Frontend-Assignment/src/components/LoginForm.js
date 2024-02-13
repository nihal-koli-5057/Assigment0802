import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/actions/action';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLogin = useSelector((state) => state.auth.user)
  const isUserLogins = useSelector((state) => state)
  console.log("isUserLogin~~~>>>",isUserLogins);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(loginRequest(values));
    setSubmitting(false);
  };

  useEffect(() => {
    if(isUserLogin) {
      navigate('/home')
    }
  }, [isUserLogin])

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div style={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" style={styles.input} />
              <ErrorMessage name="email" component="div" style={styles.errorMessage} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" style={styles.input} />
              <ErrorMessage name="password" component="div" style={styles.errorMessage} />
            </div>
            <button type="submit" disabled={isSubmitting} style={isSubmitting ? styles.submitButtonDisabled : styles.submitButton}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '14px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submitButtonDisabled: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#ccc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'not-allowed',
  },
};
