import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import WithLogo from "../WithLogo";
import "./ForgotPassword.css";

class ForgotPassword extends Component {
  render() {
    return (
      <WithLogo>
        <Formik
          initialValues={{
            mobno: ""
          }}
          render={({}) => (
            <Form>
              <div className="Authentication__forgot__password__wrapper">
                <div className="Authentication__forgot__password__container">
                  <div className="Authentication__forgot__password__title">
                    Forgot Password
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
