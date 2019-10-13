import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import WithLogo from "../WithLogo";

import "./Login.css";
class Login extends Component {
  render() {
    const mobileRegExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    return (
      <WithLogo>
        <Formik
          initialValues={{
            mobno: "",
            password: ""
          }}
          validationSchema={yup.object().shape({
            mobno: yup
              .string()
              .min(10, "Please enter valid mobile number")
              .max(10, "Please enter valid mobile number")
              .matches(mobileRegExp, "please check the number format ")
              .required("Please enter your mobile number"),

            password: yup
              .string()
              .min(8, "Please enter minimum 8 digit")
              .required("Password fiels is required")
          })}
          render={({}) => (
            <Form>
              <div className="Authentication__Login__wrapper">
                <div className="Authentication__Login__container">
                  <div className="Authentication__Login__title">
                    Login in AgroApp
                  </div>
                  <div className="Authentication__Login__input__field__block">
                    <div className="input-field col s6 Authentication__Login__input__field">
                      <Field
                        id="mobno"
                        type="text"
                        name="mobno"
                        className="validate"
                      />
                      <label for="mobno">Mobile Number</label>
                    </div>
                    <ErrorMessage
                      name="mobno"
                      className="Authentication__Login__error__msg"
                      component="div"
                    />
                  </div>
                  <div className="Authentication__Login__input__field__block">
                    <div className="input-field col s6 Authentication__Login__input__field">
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        className="validate"
                      />
                      <label for="password">Password</label>
                    </div>
                    <ErrorMessage
                      name="password"
                      className="Authentication__Login__error__msg"
                      component="div"
                    />
                  </div>

                  <div className="Authentication__Login__btn__block">
                    <button
                      className="Authentication__Login__btn"
                      type="submit"
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                  <div className="Authentication__Login__link">
                    Not Register? Register here
                  </div>
                </div>
              </div>
            </Form>
          )}
        />
      </WithLogo>
    );
  }
}
export default Login;
