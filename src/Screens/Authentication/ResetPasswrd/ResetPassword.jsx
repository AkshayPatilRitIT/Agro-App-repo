import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

import WithLogo from "../WithLogo";

import "./ResetPassword.css";
class ResetPassword extends Component {
  render() {
    const mobileRegExp = /^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9]+)?)$/;
    return (
      <WithLogo>
        <Formik
          initialValues={{
            vrcode: "",
            password: "",
            cpassword: ""
          }}
          validationSchema={yup.object().shape({
            vrcode: yup
              .string()
              .required("please enter otp")
              .min(4, "Please enter valid otp")
              .max(4, "Please enter valid otp")
              .matches(mobileRegExp, "please check the number format "),

            password: yup
              .string()
              .min(8, "Please enter minimum 8 digit")
              .required("Password fiels is required"),

            cpassword: yup
              .string()
              .min(8, "Please enter minimum 8 digit")
              .required("Password fiels is required")
              .test("passwords-match", "Passwords must match", function(value) {
                return this.parent.newPass === value;
              })
          })}
          render={({}) => (
            <Form>
              <div className="Authentication__reset__password__wrapper">
                <div className="Authentication__reset__password__container">
                  <div className="Authentication__reset__password__title">
                    Reset Password
                  </div>
                  <div className="Authentication__reset__password__input__field__block">
                    <div className="input-field col s6 Authentication__reset__password__input__field">
                      <Field
                        id="vrcode"
                        type="text"
                        name="vrcode"
                        className="validate"
                      />
                      <label for="vrcode">Verification code</label>
                    </div>
                    <ErrorMessage
                      name="vrcode"
                      className="Authentication__reset__password__error__msg"
                      component="div"
                    />
                  </div>
                  <div className="Authentication__reset__password__link__block">
                    <Link
                      to="/forgot_password"
                      className="Authentication__reset__password__link"
                    >
                      Resend code?
                    </Link>
                  </div>

                  <div className="Authentication__reset__password__input__field__block">
                    <div className="input-field col s6 Authentication__reset__password__input__field">
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
                      className="Authentication__reset__password__error__msg"
                      component="div"
                    />
                  </div>

                  <div className="Authentication__reset__password__input__field__block">
                    <div className="input-field col s6 Authentication__reset__password__input__field">
                      <Field
                        id="cpassword"
                        type="password"
                        name="cpassword"
                        className="validate"
                      />
                      <label for="cpassword">Confirm Password</label>
                    </div>
                    <ErrorMessage
                      name="cpassword"
                      className="Authentication__reset__password__error__msg"
                      component="div"
                    />
                  </div>

                  <div className="Authentication__reset__password__btn__block">
                    <button
                      className="Authentication__reset__password__btn"
                      type="submit"
                    >
                      Submit
                    </button>
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

export default ResetPassword;
