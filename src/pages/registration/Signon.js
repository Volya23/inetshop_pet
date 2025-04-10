import React from "react";
import Meta from "../../components/Meta";
import {Formik, Form, Field} from 'formik';
import { Link } from "react-router-dom";

const Signon = (props) => {
  
  const initialValues = {
    name: '',
    email: '',
    password: ''
}

const onSubmit = (values, actions) => {
    props.registerUserRequest(values);
}
  return (
    <>
    <Meta title={"Реєстрація"} />

    <div className="signon-wrapper py-5 home-wrapper-2">
      <div className="row justify-content-center">
        <div className="col-12">
            <div className="auth-card">
              <div className="position-absolute top-50 start-50 translate-middle">
                <h3 className="text-center mb-4 ">Реєстрація</h3>
                      <Formik initialValues={initialValues} onSubmit={onSubmit}>
                          {() => (
                              <Form className="d-flex flex-column align-items-center gap-15">
                                  <Field
                                  name="name"
                                  placeholder="Введіть імʼя"
                                  className="form-control text-center"
                                  />
                                  <Field
                                  className="form-control text-center"
                                  name="email"
                                  placeholder="Введіть пошту"
                                  />
                                  <Field
                                  className="form-control text-center"
                                  name="password"
                                  type="password"
                                  placeholder="Введіть пароль"
                                  />
                                  <div className="mt-2">
                                    <Link to="/forgot-password" className="text-black text-decoration-underline">Забули пароль?</Link>
                                  </div>
                                  <button className="button-dark mt-3 border-0" type="submit">Зареєструватись</button>
                              </Form>
                          )}
                      </Formik>
                  </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signon;