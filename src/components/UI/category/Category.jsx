import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
    path: '/foods',
  },
  {
    display: "Ichimliklar",
    imgUrl: categoryImg02,
    path: '/foods',
  },

  {
    display: "Grill",
    imgUrl: categoryImg03,
    path: '/foods',
  },

  {
    display: "Shirinliklar",
    imgUrl: categoryImg04,
    path: '/foods',
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index} >
            <div className="category__item d-flex align-items-center gap-3" >
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <a href="/"><Link to={item.path}>{item.display}</Link></a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
