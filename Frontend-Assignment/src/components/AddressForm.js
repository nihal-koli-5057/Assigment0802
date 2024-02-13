import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addressRequest } from "../redux/actions/action";

const AddressForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.user);

  const initialValues = {
    userId: user?.id || "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  };

  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log("values is coming here", values)
    dispatch(addressRequest(values));
    setSubmitting(false);
  };

  return (
    <div style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={styles.formContainer}>
              <div style={styles.formGroup}>
                <label htmlFor="street">Street</label>
                <Field type="text" name="streetAddress" style={styles.input} />
                <ErrorMessage
                  name="street"
                  component="div"
                  style={styles.errorMessage}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="city">City</label>
                <Field type="text" name="city" style={styles.input} />
                <ErrorMessage
                  name="city"
                  component="div"
                  style={styles.errorMessage}
                />
              </div>
            </div>
            <div style={styles.formContainer}>
              <div style={styles.formGroup}>
                <label htmlFor="state">State</label>
                <Field type="text" name="state" style={styles.input} />
                <ErrorMessage
                  name="state"
                  component="div"
                  style={styles.errorMessage}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="postalCode">Postal Code</label>
                <Field type="text" name="postalCode" style={styles.input} />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  style={styles.errorMessage}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="country">Country</label>
                <Field type="text" name="country" style={styles.input} />
                <ErrorMessage
                  name="country"
                  component="div"
                  style={styles.errorMessage}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={styles.submitButton}
            >
              {isSubmitting ? "Adding..." : "Add Address"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "60px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  formGroup: {
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  errorMessage: {
    color: "red",
    fontSize: "14px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContet: "evenly",
    gap: "30px",
    margin: "10px",
  },
};
