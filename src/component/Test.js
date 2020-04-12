import React, { useState, useEffect } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import { items, navStyleItems } from "./Data";

export const Test = () => {
  const [checked, setChecked] = useState();
  const [color, setColor] = useState();
  const [navStyle, setNavStyle] = useState({});

  useEffect(() => {
    setChecked("Primary");
    setColor("#0275d8");
    setNavStyle({ value: "Dark", colors: "#343A40" });
  }, []);

  const dot = {
    height: "13px",
    width: "13px",
    borderRadius: "50%",
    marginLeft: "auto",
    textAlign: "center",
    marginTop: "6px",
  };

  let handleChange = (color, e) => {
    setChecked(e.target.value);
    setColor(color);
  };

  let handleNavChange = (color, e) => {
    setNavStyle({ value: e.target.value, colors: color });
  };

  const handleReset = () => {
    setChecked("Primary");
    setColor("0275d8");
    setNavStyle({ value: "Dark", colors: "#343A40" });
  };

  function renderItems1(list) {
    return list.map(function (item, index) {
      return (
        <Form.Row key={index}>
          <Col>
            <Form.Check
              id={item.id}
              as="input"
              custom
              type="radio"
              label={item.text}
              value={item.text}
              onChange={(e) => handleChange(item.color, e)}
              checked={checked === item.text}
            />
          </Col>
          <Col>
            <div style={{ ...dot, ...{ backgroundColor: item.color } }}></div>
          </Col>
        </Form.Row>
      );
    });
  }

  function renderNavItems(list) {
    return list.map(function (item, index) {
      return (
        <Form.Row key={index}>
          <Col>
            <Form.Check
              id={item.id}
              as="input"
              custom
              type="radio"
              label={item.text}
              value={item.text}
              onChange={(e) => handleNavChange(item.color, e)}
              checked={navStyle.value === item.text}
            />
          </Col>
        </Form.Row>
      );
    });
  }

  return (
    <React.Fragment>
      <Card
        style={{
          width: "15em",
          height: "30em",
          float: "right",
          marginTop: "50px",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "17px",
            }}
          >
            Configurator
          </Card.Title>

          <Card.Subtitle
            style={{ fontSize: "13px", marginBottom: "8px", float: "left" }}
          >
            Nav Color
          </Card.Subtitle>

          <Form>
            <Form.Group
              controlId="navColorsChange"
              style={{ float: "left", width: "100%", textAlign: "left" }}
            >
              {renderItems1(items)}
            </Form.Group>
          </Form>

          <Card.Subtitle
            style={{ fontSize: "14px", marginBottom: "8px", float: "left" }}
          >
            Nav Style
          </Card.Subtitle>

          <Form>
            <Form.Group
              controlId="navStyleChange"
              style={{ float: "left", width: "100%", textAlign: "left" }}
            >
              {renderNavItems(navStyleItems)}
            </Form.Group>
          </Form>
          <Button
            variant="outline-dark"
            block
            type="reset"
            onClick={handleReset}
          >
            Reset Options
          </Button>
        </Card.Body>
      </Card>
      <div
        style={{
          border: "1px solid black",
          margin: "10px",
          borderRadius: "50%",
          height: "100px",
          width: "100px",
          backgroundColor: color,
          position: "absolute",
          left: "70%",
          bottom: "45%",
        }}
      ></div>
      <div
        style={{
          border: "1px solid grey",
          margin: "10px",
          borderRadius: "50%",
          height: "100px",
          width: "100px",
          backgroundColor: navStyle.colors,
          position: "absolute",
          left: "70%",
          bottom: "25%",
        }}
      ></div>
    </React.Fragment>
  );
};

export default Test;
