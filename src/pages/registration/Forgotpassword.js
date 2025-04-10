import React from "react";
import Meta from "../../components/Meta";
import {Formik, Form, Field} from 'formik';
import { Link } from "react-router-dom";

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
                <p className="text-center mt-2 mb-3">Введіть адресу електронної пошти, яку ви вказали під час реєстрації. Ми надішлемо листа з інформацією для відновлення паролю.</p>
                      <Formik initialValues={initialValues} onSubmit={onSubmit}>
                          {() => (
                             <Form className="d-flex flex-column align-items-center gap-15">
                                  <Field
                                  className="form-control text-center"
                                  name="email"
                                  placeholder="Введіть пошту"
                                  />
                                  <button className="button-dark mt-3 border-0" type="submit">Відновити пароль</button>
                                  <Link to="/signon" className="text-black text-decoration-underline">Відміна</Link>
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