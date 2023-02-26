import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import ListProduct from "./ListProduct";
import FormProduct from './FormProduct';

function App() {
  const [pro, setPro] = useState([]);

  const cargaPro = () => {
    axios.get("https://aut2-despliegue-de-una-api-production.up.railway.app/api/list").then(({ data }) => setPro(data));
  };

  useEffect(() => {
    cargaPro();
    const interval = setInterval(() => cargaPro(), 1 * 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Container>
      <Row>
        <Col >
          <ListProduct productos={pro} />
          <FormProduct/>
        </Col>
       
      </Row>
    </Container>
  </>
  );
}

export default App;