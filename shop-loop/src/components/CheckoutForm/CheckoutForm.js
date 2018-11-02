import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './CheckoutForm.module.css';

const customerDefaults = {
  email: '',
  title: '',
  firstName: '',
  lastName: '',
  street: '',
  postalCode: '',
  city: '',
  mobile: ''
};

const CheckoutForm = (props) => {
  const { onSubmit } = props;

  return (
    <Formik
      initialValues={customerDefaults}
      onSubmit={onSubmit}>
      {({ isSubmiting }) => (
        <Form>
          <div className={styles.field}>
            <Field name="title" component="select">
              <option value="">Pick Title</option>
              <option value="ms">Ms</option>
              <option value="mr">Mr</option>
            </Field>
          </div>
          <div className={styles.field}>
            <Field type="text" name="firstName" placeholder="First Name"/>
          </div>
          <div className={styles.field}>
            <Field type="text" name="lastName" placeholder="Last Name"/>
          </div>
          <div className={styles.field}>
            <Field type="text" name="email" placeholder="E-mail"/>
          </div>
          <div className={styles.field}>
            <Field type="text" name="street" placeholder="Street"/>
          </div>
          <div className={styles.field}>
            <Field type="text" name="postalCode" placeholder="Postal code"/>
          </div>
          <div className={styles.field}>
            <Field type="text" name="city" placeholder="City"/>
          </div>
          <div className={styles.field}>
            <Field type="tel" name="mobile" placeholder="Mobile"/>
          </div>
          <button type="submit" disable={isSubmiting}>
            Create order
          </button>
        </Form>
      )}
    </Formik>
  );
};

CheckoutForm.defaultProps = {
  onSubmit: () => {}
};

export default CheckoutForm;

