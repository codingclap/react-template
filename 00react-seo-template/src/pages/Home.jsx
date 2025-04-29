import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {NavLink} from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    new Swiper('.main-swiper', {
     loop:!0,
      slidesPerView: 3,
      spaceBetween: 80,
      
      navigation: {
        nextEl: '.icon-arrow-right',
        prevEl: '.icon-arrow-left',
      },
      breakpoints:{
          300:{slidesPerView:1,spaceBetween:20},
          768:{slidesPerView:2,spaceBetween:20},
           1200:{slidesPerView:3,spaceBetween:80}
          }
          
    });
  }, []);


     return (
          <>
               <section id="billboard" className="bg-light py-5">
                    <div className="container">
                         <div className="row justify-content-center">
                              <h1
                                   className="section-title text-center mt-4 aos-init aos-animate"
                                   data-aos="fade-up"
                              >
                                   New Collections
                              </h1>
                              <div
                                   className="col-md-6 text-center aos-init aos-animate"
                                   data-aos="fade-up"
                                   data-aos-delay={300}
                              >
                                   <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                                        voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi
                                        voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus
                                        harum, quibusdam ex repellat eaque!
                                   </p>
                              </div>
                         </div>
                         <div className="row">
                              <div
                                   className="swiper main-swiper py-4 swiper-initialized swiper-horizontal swiper-backface-hidden aos-init aos-animate"
                                   data-aos="fade-up"
                                   data-aos-delay={600}
                              >
                                   <div
                                        className="swiper-wrapper d-flex border-animation-left"
                                        id="swiper-wrapper-104bd179224a4d9a1"
                                        aria-live="polite"
                                   >
                                        <div
                                             className="swiper-slide swiper-slide-active"
                                             role="group"
                                             aria-label="1 / 6"
                                             style={{ width: "386.667px", marginRight: 80 }}
                                             data-swiper-slide-index={0}
                                        >
                                             <div className="banner-item image-zoom-effect">
                                                  <div className="image-holder">
                                                       <NavLink to="#">
                                                            <img
                                                                 src="/assets/images/banner-image-1.jpg"
                                                                 alt="product"
                                                                 className="img-fluid"
                                                            />
                                                        </NavLink>
                                                  </div>
                                                  <div className="banner-content py-4">
                                                       <h5 className="element-title text-uppercase">
                                                            <NavLink to="index.html" className="item-anchor">
                                                                 Soft leather jackets
                                                             </NavLink>
                                                       </h5>
                                                       <p>
                                                            Scelerisque duis aliquam qui lorem ipsum dolor amet,
                                                            consectetur adipiscing elit.
                                                       </p>
                                                       <div className="btn-left">
                                                            <NavLink
                                                                 to="#"
                                                                 className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                                                            >
                                                                 Discover Now
                                                             </NavLink>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="swiper-slide swiper-slide-next"
                                             role="group"
                                             aria-label="2 / 6"
                                             style={{ width: "386.667px", marginRight: 80 }}
                                             data-swiper-slide-index={1}
                                        >
                                             <div className="banner-item image-zoom-effect">
                                                  <div className="image-holder">
                                                       <NavLink to="#">
                                                            <img
                                                                 src="/assets/images/banner-image-2.jpg"
                                                                 alt="product"
                                                                 className="img-fluid"
                                                            />
                                                        </NavLink>
                                                  </div>
                                                  <div className="banner-content py-4">
                                                       <h5 className="element-title text-uppercase">
                                                            <NavLink to="index.html" className="item-anchor">
                                                                 Soft leather jackets
                                                             </NavLink>
                                                       </h5>
                                                       <p>
                                                            Scelerisque duis aliquam qui lorem ipsum dolor amet,
                                                            consectetur adipiscing elit.
                                                       </p>
                                                       <div className="btn-left">
                                                            <NavLink
                                                                 to="#"
                                                                 className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                                                            >
                                                                 Discover Now
                                                             </NavLink>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="swiper-slide"
                                             role="group"
                                             aria-label="3 / 6"
                                             style={{ width: "386.667px", marginRight: 80 }}
                                             data-swiper-slide-index={2}
                                        >
                                             <div className="banner-item image-zoom-effect">
                                                  <div className="image-holder">
                                                       <NavLink to="#">
                                                            <img
                                                                 src="/assets/images/banner-image-3.jpg"
                                                                 alt="product"
                                                                 className="img-fluid"
                                                            />
                                                        </NavLink>
                                                  </div>
                                                  <div className="banner-content py-4">
                                                       <h5 className="element-title text-uppercase">
                                                            <NavLink to="index.html" className="item-anchor">
                                                                 Soft leather jackets
                                                             </NavLink>
                                                       </h5>
                                                       <p>
                                                            Scelerisque duis aliquam qui lorem ipsum dolor amet,
                                                            consectetur adipiscing elit.
                                                       </p>
                                                       <div className="btn-left">
                                                            <NavLink to="#"
                                                                 className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                                                            >
                                                                 Discover Now
                                                             </NavLink>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="swiper-slide"
                                             role="group"
                                             aria-label="4 / 6"
                                             style={{ width: "386.667px", marginRight: 80 }}
                                             data-swiper-slide-index={3}
                                        >
                                             <div className="banner-item image-zoom-effect">
                                                  <div className="image-holder">
                                                       <NavLink to="#">
                                                            <img
                                                                 src="/assets/images/banner-image-4.jpg"
                                                                 alt="product"
                                                                 className="img-fluid"
                                                            />
                                                        </NavLink>
                                                  </div>
                                                  <div className="banner-content py-4">
                                                       <h5 className="element-title text-uppercase">
                                                            <NavLink to="index.html" className="item-anchor">
                                                                 Soft leather jackets
                                                             </NavLink>
                                                       </h5>
                                                       <p>
                                                            Scelerisque duis aliquam qui lorem ipsum dolor amet,
                                                            consectetur adipiscing elit.
                                                       </p>
                                                       <div className="btn-left">
                                                            <NavLink to="#"
                                                                 className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                                                            >
                                                                 Discover Now
                                                             </NavLink>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="swiper-slide"
                                             role="group"
                                             aria-label="5 / 6"
                                             style={{ width: "386.667px", marginRight: 80 }}
                                             data-swiper-slide-index={4}
                                        >
                                             <div className="banner-item image-zoom-effect">
                                                  <div className="image-holder">
                                                       <NavLink to="#">
                                                            <img
                                                                 src="/assets/images/banner-image-5.jpg"
                                                                 alt="product"
                                                                 className="img-fluid"
                                                            />
                                                        </NavLink>
                                                  </div>
                                                  <div className="banner-content py-4">
                                                       <h5 className="element-title text-uppercase">
                                                            <NavLink to="index.html" className="item-anchor">
                                                                 Out crop sweater
                                                             </NavLink>
                                                       </h5>
                                                       <p>
                                                            Scelerisque duis aliquam qui lorem ipsum dolor amet,
                                                            consectetur adipiscing elit.
                                                       </p>
                                                       <div className="btn-left">
                                                            <NavLink
                                                                 to="#"
                                                                 className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                                                            >
                                                                 Discover Now
                                                             </NavLink>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="swiper-slide"
                                             role="group"
                                             aria-label="6 / 6"
                                             style={{ width: "386.667px", marginRight: 80 }}
                                             data-swiper-slide-index={5}
                                        >
                                             <div className="banner-item image-zoom-effect">
                                                  <div className="image-holder">
                                                       <NavLink to="#">
                                                            <img
                                                                 src="/assets/images/banner-image-6.jpg"
                                                                 alt="product"
                                                                 className="img-fluid"
                                                            />
                                                        </NavLink>
                                                  </div>
                                                  <div className="banner-content py-4">
                                                       <h5 className="element-title text-uppercase">
                                                            <NavLink to="index.html" className="item-anchor">
                                                                 Soft leather jackets
                                                             </NavLink>
                                                       </h5>
                                                       <p>
                                                            Scelerisque duis aliquam qui lorem ipsum dolor amet,
                                                            consectetur adipiscing elit.
                                                       </p>
                                                       <div className="btn-left">
                                                            <NavLink
                                                                 to="#"
                                                                 className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                                                            >
                                                                 Discover Now
                                                             </NavLink>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="swiper-pagination" />
                                   <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                   />
                              </div>
                              <div
                                   className="icon-arrow icon-arrow-left"
                                   tabIndex={0}
                                   role="button"
                                   aria-label="Previous slide"
                                   aria-controls="swiper-wrapper-104bd179224a4d9a1"
                              >
                                   <svg width={50} height={50} viewBox="0 0 24 24">
                                        <use xlinkHref="#arrow-left" />
                                   </svg>
                              </div>
                              <div
                                   className="icon-arrow icon-arrow-right"
                                   tabIndex={0}
                                   role="button"
                                   aria-label="Next slide"
                                   aria-controls="swiper-wrapper-104bd179224a4d9a1"
                              >
                                   <svg width={50} height={50} viewBox="0 0 24 24">
                                        <use xlinkHref="#arrow-right" />
                                   </svg>
                              </div>
                         </div>
                    </div>
               </section>

          </>

     );
};

export default Home;