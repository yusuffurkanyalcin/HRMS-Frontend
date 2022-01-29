import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Formik, Field, Form } from "formik";
import styles from "../../styles/locationFilter.module.css";

export default function LocationFilter() {
  return (
    <Accordion
      defaultActiveKey={["0"]}
      alwaysOpen
      style={{ minWidth: "188px" }}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Şehir</Accordion.Header>
        <Accordion.Body>
          <Formik
            initialValues={{
              checked: [],
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values }) => (
              <Form>
                <div
                  role="group"
                  aria-labelledby="checkbox-group"
                  className={styles.chechboxGroupDiv}
                >
                  <div>
                    <label>
                      <Field type="checkbox" name="checked" value="Ankara" />
                      Ankara
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field type="checkbox" name="checked" value="İstanbul" />
                      İstanbul
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field type="checkbox" name="checked" value="İzmir" />
                      İzmir
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field type="checkbox" name="checked" value="Mersin" />
                      Mersin
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field type="checkbox" name="checked" value="Kars" />
                      Kars
                    </label>
                  </div>
                </div>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
