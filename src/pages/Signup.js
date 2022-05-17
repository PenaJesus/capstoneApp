import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"

export default function Signup() {

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Please enter Username"),
    password: Yup.string().min(4).max(20).required("Please enter Password")
  });

const onSubmit = (data) => {
  axios.post("https://jp-blog-app.herokuapp.com/auth", data).then(()=> {
    console.log(data);
  })
}


  return <div>
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(ex. John123...)"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="(ex. Your Password...)"
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
  </div>;
}
