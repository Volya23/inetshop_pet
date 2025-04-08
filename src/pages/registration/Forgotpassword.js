import React from "react";
import Meta from "../../components/Meta";
import {Formik, Form, Field} from 'formik';

const Forgotpassword = (props) => {

  const initialValues = {
    password: ''
}

const onSubmit = (values, actions) => {
    props.registerUserRequest(values);
}
  return (
    <>
    <Meta title={"Відновлення паролю"} />

    <div className="signon-wrapper py-5 home-wrapper-2">
      <div className="row justify-content-center">
        <div className="col-12">
            <div className="auth-card">
              <div className="position-absolute top-50 start-50 translate-middle">
                <h3 className="text-center mb-4 ">Відновлення паролю</h3>
                      <Formik initialValues={initialValues} onSubmit={onSubmit}>
                          {() => (
                             <Form className="d-flex flex-column align-items-center gap-15">
                                  <Field
                                  className="form-control text-center"
                                  name="password"
                                  type="password"
                                  placeholder="Введіть пароль"
                                  />
                                  <button className="button-dark mt-3 border-0" type="submit">Відновити пароль</button>
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

export default Forgotpassword