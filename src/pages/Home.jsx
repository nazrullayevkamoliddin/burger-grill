import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import News from "../pages/News.jsx";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";

const featureData = [
  {
    title: "Oson Buyurtma Berish",
    imgUrl: featureImg03,
    desc: "",
  },
  {
    title: "Tezkor Yetkazib Berish",
    imgUrl: featureImg01,
    desc: "",
  },

  {
    title: "Super kechki ovqat",
    imgUrl: featureImg02,
    desc: "",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "XotDog");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "XOTDOG") {
      const filteredProducts = products.filter(
        (item) => item.category === "XotDog"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "LAVASH") {
      const filteredProducts = products.filter(
        (item) => item.category === "Lavash"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "DONAR") {
      const filteredProducts = products.filter(
        (item) => item.category === "Donar"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "DRINK") {
      const filteredProducts = products.filter(
        (item) => item.category === "drink"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "DESSERT") {
      const filteredProducts = products.filter(
        (item) => item.category === "dessert"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="pt-0">
        <News />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3"> Buyurtma Berishning oson usuli </h5>
                <h1 className="mb-4 hero__title">
                  <span>Ochmisiz?</span> Faqat kuting <br /> taom
                  <span> sizning eshigingizda</span>
                </h1>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <a
                    className="order__btn d-flex align-items-center justify-content-between"
                    href="https://t.me/burgergrill9999"
                  >
                    Buyurtma <i class="ri-arrow-right-s-line"></i>
                  </a>

                  <a className="all__foods-btn">
                    <Link to="/foods"> Barcha ovqatlar </Link>
                  </a>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Yetkazib berish bepul
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% xafsiz to'lov
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">
                {" "}
                Biz qanday xizmat qilamiz{" "}
              </h5>
              <h2 className="feature__title"> Siz uyda o'tiring </h2>
              <h2 className="feature__title">
                Biz <span> g'amho'rlik qilamiz </span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis? */}
              </p>
              <p className="feature__text">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "} */}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2> Mashhur taomlar </h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center flex-wrap justify-content-center ">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Hammasi
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  {/* <img src={foodCategoryImg01} alt="" /> */}
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "XOTDOG" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("XOTDOG")}
                >
                  {/* <img src={foodCategoryImg03} alt="" /> */}
                  Xot-Dog
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "LAVASH" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("LAVASH")}
                >
                  {/* <img src={foodCategoryImg02} alt="" /> */}
                  Lavash
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DONAR" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DONAR")}
                >
                  {/* <img src={foodCategoryImg03} alt="" /> */}
                  Donar
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DRINK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DRINK")}
                >
                  {/* <img src={foodCategoryImg03} alt="" /> */}
                  Ichimliklar
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DESSERT" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DESSERT")}
                >
                  {/* <img src={foodCategoryImg03} alt="" /> */}
                  Shirinliklar
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <iframe
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4775022186022!2d72.75502882100692!3d40.72951738805994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bd03b471cd3683%3A0x8deee6a490ede57!2sBurger%20Grill!5e0!3m2!1sru!2s!4v1662372500505!5m2!1sru!2s"
                width="600"
                height="450"
              ></iframe>
            </Col>
            <br />
            <br />
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Nega aynan<span> Bizni tanlash kerak? </span>
                </h2>
                <p className="tasty__treat-desc">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti! */}
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Yangi va mazali
                      taomlar{" "}
                    </p>
                    <p className="choose__us-desc">
                      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus. */}
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Sifatli
                      qo'llab-quvvatlash{" "}
                    </p>
                    <p className="choose__us-desc">
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum. */}
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Istalgan joydan
                      buyurtma bering{" "}
                    </p>
                    <p className="choose__us-desc">
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum. */}
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2> Boshqa Taomlar </h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
