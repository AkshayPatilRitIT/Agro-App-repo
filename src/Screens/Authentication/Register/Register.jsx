import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import WithLogo from "../WithLogo";

import "./Register.css";

class Register extends Component {
  render() {
    const mobileRegExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    return (
      <WithLogo>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            mobNo: "",
            password: "",
            cpass: ""
          }}
          validationSchema={yup.object().shape({
            firstName: yup
              .string()
              .max(45, "Firstname not more than 45 words")
              .required("Please enter your first name"),
            lastName: yup
              .string()
              .max(45, "Lastname not more than 45 words")
              .required("Please enter your Last name"),
            mobNo: yup
              .string()
              .min(10, "Please enter valid mobile number")
              .max(10, "Please enter valid mobile number")
              .matches(mobileRegExp, "please check the number format ")
              .required("Please enter your mobile number"),

            password: yup
              .string()
              .min(8, "Please enter minimum 8 digit")
              .required("Password fiels is required"),

            cpass: yup
              .string()
              .min(8, "Please enter minimum 8 digit")
              .required("Password fiels is required")
              .test("passwords-match", "Passwords must match", function(value) {
                return this.parent.passfield === value;
              })
          })}
          render={({}) => (
            <Form>
              <div className="Authentication__register__wrapper">
                <div className="Authentication__register__container">
                  <div className="Authentication__register__block">
                    <div className="Authentication__register__title">
                      Register to AgroApp
                    </div>

                    <div className="Authentication__register__input__field__block">
                      <div className="input-field col s6 Authentication__register__input__field">
                        <Field
                          id="firstName"
                          type="text"
                          name="firstName"
                          className="validate"
                        />
                        <label for="firstName">First Name</label>
                      </div>
                      <ErrorMessage
                        name="firstName"
                        className="Authentication__register__error__msg"
                        component="div"
                      />
                    </div>

                    <div className="Authentication__register__input__field__block">
                      <div className="input-field col s6 Authentication__register__input__field">
                        <Field
                          id="lastName"
                          type="text"
                          name="lastName"
                          className="validate"
                        />
                        <label for="lastName">Last Name</label>
                      </div>
                      <ErrorMessage
                        name="lastName"
                        className="Authentication__register__error__msg"
                        component="div"
                      />
                    </div>

                    <div className="Authentication__register__input__field__block">
                      <div className="input-field col s6 Authentication__register__input__field">
                        <Field
                          id="mobNo"
                          type="text"
                          name="mobNo"
                          className="validate"
                        />
                        <label for="mobNo">Mobile Number</label>
                      </div>
                      <ErrorMessage
                        name="mobNo"
                        className="Authentication__register__error__msg"
                        component="div"
                      />
                    </div>

                    <div className="Authentication__register__input__field__block">
                      <div className="input-field col s6 Authentication__register__input__field">
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
                        className="Authentication__register__error__msg"
                        component="div"
                      />
                    </div>

                    <div className="Authentication__register__input__field__block">
                      <div className="input-field col s6 Authentication__register__input__field">
                        <Field
                          id="cpass"
                          type="password"
                          name="cpass"
                          className="validate"
                        />
                        <label for="cpass">Confirm Password</label>
                      </div>
                      <ErrorMessage
                        name="cpass"
                        className="Authentication__register__error__msg"
                        component="div"
                      />
                    </div>

                    <div className="Authentication__register__btn__block">
                      <button
                        className="Authentication__register__btn"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
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

export default Register;
