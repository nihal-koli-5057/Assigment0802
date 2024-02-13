import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerRequest } from '../redux/actions/action';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";


const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        dispatch(registerRequest(values));
        navigate('/login')
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Registration Form</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    dateOfBirth: '',
                    gender: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required('First Name is required'),
                    lastName: Yup.string().required('Last Name is required'),
                    email: Yup.string().email('Invalid email').required('Email is required'),
                    // phoneNumber: Yup.string().matches(
                    //     /^\+(?:[0-9] ?){6,14}[0-9]$/,
                    //     'Invalid phone number'
                    // ).required('Phone Number is required'),
                    dateOfBirth: Yup.date().required('Date of Birth is required').max(new Date(), 'Date of Birth must be in the past').min(new Date('1900-01-01'), 'You must be at least 18 years old'),
                    gender: Yup.string().required('Gender is required'),
                    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
                })}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form style={styles.form}>
                        <div style={styles.formGroup}>
                            <label htmlFor="firstName" style={styles.label}>First Name</label>
                            <Field type="text" name="firstName" className="form-control" style={styles.formControl} />
                            <ErrorMessage name="firstName" component="div" className="error-message" style={styles.errorMessage} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="lastName" style={styles.label}>Last Name</label>
                            <Field type="text" name="lastName" className="form-control" style={styles.formControl} />
                            <ErrorMessage name="lastName" component="div" className="error-message" style={styles.errorMessage} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="email" style={styles.label}>Email</label>
                            <Field type="email" name="email" className="form-control" style={styles.formControl} />
                            <ErrorMessage name="email" component="div" className="error-message" style={styles.errorMessage} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="phoneNumber" style={styles.label}>Phone Number</label>
                            <Field type="tel" name="phoneNumber" className="form-control" style={styles.formControl} pattern="[0-9]*"
                                maxLength="10" />
                            <ErrorMessage name="phoneNumber" component="div" className="error-message" style={styles.errorMessage} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="dateOfBirth" style={styles.label}>Date of Birth</label>
                            <Field type="date" name="dateOfBirth" className="form-control" style={styles.formControl} />
                            <ErrorMessage name="dateOfBirth" component="div" className="error-message" style={styles.errorMessage} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="gender" style={styles.label}>Gender</label>
                            <Field as="select" name="gender" className="form-control" style={styles.formControl}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="error-message" style={styles.errorMessage} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="password" style={styles.label}>Password</label>
                            <Field type="password" name="password" className="form-control" style={styles.formControl} />
                            <ErrorMessage name="password" component="div" className="error-message" style={styles.errorMessage} />
                        </div>

                        <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={styles.button}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationForm;

const styles = {
    container: {
        width: '400px',
        margin: 'auto',
        padding: '40px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    formGroup: {
        marginBottom: '20px'
    },
    label: {
        display: 'block',
        marginBottom: '5px'
    },
    formControl: {
        width: '100%',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    errorMessage: {
        color: 'red',
        marginTop: '5px'
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer'
    }
};
