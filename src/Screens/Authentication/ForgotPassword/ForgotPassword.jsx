import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import WithLogo from "../WithLogo";
import "./ForgotPassword.css";

class ForgotPassword extends Component {
  render() {
    const mobileRegExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    return (
      <WithLogo>
        <Formik
          initialValues={{
            mobno: ""
          }}
          validationSchema={yup.object().shape({
            mobno: yup
              .string()
              .min(10, "Please enter valid mobile number")
              .max(10, "Please enter valid mobile number")
              .matches(mobileRegExp, "please check the number format ")
              .required("Please enter your mobile number")
          })}
          render={({}) => (
            <Form>
              <div className="Authentication__forgot__password__wrapper">
                <div className="Authentication__forgot__password__container">
                  <div className="Authentication__forgot__password__title">
                    Forgot Password ?
                  </div>
                  <div className="Authentication__forgot__password__input__field__block">
                    <div className="input-field col s6 Authentication__forgot__password__input__field">
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
                      className="Authentication__forgot__password__error__msg"
                      component="div"
                    />
                  </div>
                  <div className="Authentication__forgot__password__instrution__line">
                    We will send you an OTP on your number
                  </div>
                  <div className="Authentication__forgot__password__btn__block">
                    <button
                      className="Authentication__forgot__password__btn"
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

export default ForgotPassword;
