import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import WithLogo from "../WithLogo";
import "./OTP.css";
class OTP extends Component {
  render() {
    const mobileRegExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    return (
      <WithLogo>
        <Formik
          initialValues={{
            otp_value: ""
          }}
          validationSchema={yup.object().shape({
            otp_value: yup
              .string()
              .min(4, "Please enter valid otp")
              .max(4, "Please enter valid otp")
              .matches(mobileRegExp, "please check the number format ")
              .required("Please enter your otp")
          })}
          render={({}) => (
            <Form>
              <div className="Authentication__otp__wrapper">
                <div className="Authentication__otp__container">
                  <div className="Authentication__otp__title">OTP</div>
                  <div className="Authentication__otp__input__field__block">
                    <div className="input-field col s6 Authentication__otp__input__field">
                      <Field
                        id="otp_value"
                        type="text"
                        name="otp_value"
                        className="validate"
                      />
                      <label for="otp_value">OTP</label>
                    </div>
                    <ErrorMessage
                      name="otp_value"
                      className="Authentication__otp__error__msg"
                      component="div"
                    />
                  </div>
                  <div className="Authentication__otp__instrution__line">
                    Please enter your otp
                  </div>
                  <div className="Authentication__otp__btn__block">
                    <button className="Authentication__otp__btn" type="submit">
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

export default OTP;
