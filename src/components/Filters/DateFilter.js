import { Field, Form, Formik } from "formik";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function DateFilter() {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen style={{minWidth:"188px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tarih</Accordion.Header>
        <Accordion.Body>
          <Formik
            initialValues={{
              picked: "",
            }}

            onSubmit={(values)=>{
                alert(JSON.stringify(values,null,2));
            }}
          >
            {({ values }) => (
              <Form>
                
                <div role="group" aria-labelledby="my-radio-group">
                  <div >
                    <label>
                      <Field type="radio" name="picked" value="" />
                      Tümü
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        name="picked"
                        value={new Date()
                          .toJSON()
                          .slice(0, 10)
                          .replace(/-/g, "-")
                          .toString()}
                      />
                      Bugünün ilanları
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
