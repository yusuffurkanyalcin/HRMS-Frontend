import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function LocationFilter() {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Şehir</Accordion.Header>
        <Accordion.Body>Selam</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
