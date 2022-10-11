/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const ReactForm = () => (
  <Styles>
    <h1>Employee</h1>
    <a
      href="https://final-form.org/react"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read Docs
    </a>
    <Form
      onSubmit={onSubmit}
      initialValues={{ technology: "Front-End", employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div>
            <label>Education</label>
            <Field name="Education" component="select">
              <option />
              <option value="High School">High School</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
            </Field>
          </div>
          {/* <div>
            <label>Toppings</label>
            <Field name="toppings" component="select" multiple>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </Field>
          </div> */}
          <div>
            <label>Expertise</label>
            <div>
              <label>
                <Field
                  name="Expertise"
                  component="input"
                  type="checkbox"
                  value="HTML"
                />{" "}
                HTML
              </label>
              <label>
                <Field
                  name="Expertise"
                  component="input"
                  type="checkbox"
                  value="CSS"
                />{" "}
                CSS
              </label>
              <label>
                <Field
                  name="Expertise"
                  component="input"
                  type="checkbox"
                  value="Javascript"
                />{" "}
                Javascript
              </label>
              <label>
                <Field
                  name="Expertise"
                  component="input"
                  type="checkbox"
                  value="NodeJS"
                />{" "}
                NodeJS
              </label>
              <label>
                <Field
                  name="Expertise"
                  component="input"
                  type="checkbox"
                  value="ReactJS"
                />{" "}
                ReactJS
              </label>
            </div>
          </div>
          <div>
            <label>Prefered Technology</label>
            <div>
              <label>
                <Field
                  name="technology"
                  component="input"
                  type="radio"
                  value="Front End"
                />{" "}
                Front End
              </label>
              <label>
                <Field
                  name="technology"
                  component="input"
                  type="radio"
                  value="Back End"
                />{" "}
                Back End
              </label>
              <label>
                <Field
                  name="technology"
                  component="input"
                  type="radio"
                  value="fullstack"
                />{" "}
                fullstack
              </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>
);
export default ReactForm
// render(<App />, document.getElementById("root"));
