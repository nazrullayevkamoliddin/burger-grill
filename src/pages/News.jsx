import React from 'react';
import banner1 from '../assets/images/banner-news.jpg'
import banner2 from '../assets/images/banner-news-2.jpg'
import '../styles/news.css'
const News = () => {

    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src={banner1}  class="d-block w-100" alt="..." />
                        <div class="carousel-caption  d-md-block">
                            {/* <h1>Sizni Kutmoqda</h1> */}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={banner2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption  d-md-block">
                            {/* <h1>Sizni Kutmoqda</h1> */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default News;