import { ChangeEvent, useState } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Container, Form, InputGroup, Table } from "react-bootstrap";

import { chart, toArabic, toRoman } from "utils/convertor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [fromNumber, setFromNumber] = useState<number>();
  const [toNumber, setToNumber] = useState<string | number>();

  const handleChangeArabicNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      setFromNumber(Number(value));
      setToNumber(toRoman(Number(value)));
    }
  };

  const handleChangeRomanicNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setToNumber(value);
    setFromNumber(Number(toArabic(value)));
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container className="App">
        <h1>Convert Arabic to Roman Numerals</h1>
        <InputGroup className="my-5">
          <Form.Control
            placeholder="123"
            value={fromNumber}
            onChange={handleChangeArabicNumber}
          />
          <Form.Control
            placeholder="CXXIII"
            value={toNumber}
            onChange={handleChangeRomanicNumber}
          />
        </InputGroup>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Arabic</th>
              <th>Roman</th>
            </tr>
          </thead>
          <tbody>
            {chart.map((data, idx) => (
              <tr>
                <td>{data[1]}</td>
                <td>{data[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </ThemeProvider>
  );
}

export default App;
