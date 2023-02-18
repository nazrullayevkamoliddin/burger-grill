import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Iframe from 'react-iframe'

import "../styles/checkout.css";

const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <CommonSection title="Buyurtma Berish" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4"> Yetkazish manzili </h6>
              <Iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdXJxZ8gbKk2CBd5jU1ix-RJDeeiWvW1OSYck3tXyK0F6cUsw/viewform?embedded=true"
                width="400"
                height="800"
              ></Iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
