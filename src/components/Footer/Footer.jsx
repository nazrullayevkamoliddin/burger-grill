import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.png";
// QR codes
import qrtelegram from '../../assets/images/qrtelegram.png'
import qrinsta from '../../assets/images/qrinsta.png'
import qrfacebook from '../../assets/images/qrfacebook.png'

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="foo
    
    ter">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              {/* <h5><b>B</b>urger <b>G</b>ril</h5> */}
              <p>
                Halollik foydadan ustundir!
              </p>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <h5 className="footer__title"> Ish kuni </h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span> Dushanba - Yakshanba </span>
                <p> 24 soat </p>
              </ListGroupItem>

              {/* <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span> Yakshanba </span>
                <p> Damolish Kuni </p>
              </ListGroupItem> */}
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title"> Aloqa </h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Qo`rgontepa`, Andijan, Uzbekistan</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <a href="tel:+998979881010">Phone: (+998) 97 988 1010</a>
                <br />
                <a href="tel:+998950680571">Phone: (+998) 94 568 9999 </a>
               
              </ListGroupItem>

              {/* <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: burgergril9999@gmail.com</span>
              </ListGroupItem> */}
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title"> Qo'shimcha </h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0 taklif">
                <p> Yosh, Chaqqon, Mehnatga layoqatli Yigit-Qizlarni ishga taklif qilamiz! </p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title"> QR-kodlar </h5>
            <ListGroup className="deliver__time-list">
                <div className="qrcodes">
                  <div> 
                    <img src={qrtelegram} className="qrcode" />
                    {/* <h4> Telegram </h4> */}
                  </div>
                  <div> 
                    <img src={qrinsta} className="qrcode" />
                      {/* <h4> Instagram </h4> */}
                  </div>
                  <div> 
                    <img src={qrfacebook} className="qrcode" />
                      {/* <h4> Facebook </h4> */}
                  </div>
                </div>
            </ListGroup>
          </Col>
          {/* <Col lg="3" md="4" sm="6">
            <h5 className="footer__title"> Yangiliklar </h5>
            <p>Bizning Yangiliklarga obuna bo'ling</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col> */}
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text"> <a href="https://t.me/kamoliddin_nazrullayev" target='_blank'> ©-2022, web site made by mr.Kamoliddin </a> , All right reserved. <br/> <br />  Web Site Test Rejimida Ishlamoqda</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Azo bo'ling: </p>
              <span>
                {" "}
                <a href='https://www.instagram.com/burgergrill9999/' target='_blank' >
                  <i class="ri-instagram-line"></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a href="https://t.me/burgergrilluz" target='_blank'>
                  <i class="ri-telegram-line"></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a href="https://www.facebook.com/profile.php?id=100085195012120" target='_blank'>
                  <i class="ri-facebook-line"></i>
                </a>{" "}
              </span>



            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
