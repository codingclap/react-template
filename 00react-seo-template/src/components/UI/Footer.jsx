import { NavLink } from 'react-router-dom';

export const Footer = () => {
     return (
          <>
               <footer className="mt-5" id="footer">
                    <div className="container">
                         <div className="row d-flex flex-wrap justify-content-between py-5">
                              <div className="col-md-3 col-sm-6">
                                   <div className="footer-menu footer-menu-001">
                                        <div className="footer-intro mb-4">
                                             <NavLink to="index.html">
                                                  <img alt="logo" src="images/main-logo.png" />
                                             </NavLink>
                                        </div>
                                        <p>
                                             Gravida massa volutpat aenean odio. Amet, turpis erat nullam
                                             fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
                                             ac sit suscipit hendrerit.
                                        </p>
                                        <div className="social-links">
                                             <ul className="list-unstyled d-flex flex-wrap gap-3">
                                                  <li>
                                                       <NavLink className="text-secondary" to="#">
                                                            <svg height="24" viewBox="0 0 24 24" width="24">
                                                                 <use xlinkHref="#facebook" />
                                                            </svg>
                                                       </NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink className="text-secondary" to="#">
                                                            <svg height="24" viewBox="0 0 24 24" width="24">
                                                                 <use xlinkto="#twitter" />
                                                            </svg>
                                                       </NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink className="text-secondary" to="#">
                                                            <svg height="24" viewBox="0 0 24 24" width="24">
                                                                 <use xlinkto="#youtube" />
                                                            </svg>
                                                       </NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink className="text-secondary" to="#">
                                                            <svg height="24" viewBox="0 0 24 24" width="24">
                                                                 <use xlinkto="#pinterest" />
                                                            </svg>
                                                       </NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink className="text-secondary" to="#">
                                                            <svg height="24" viewBox="0 0 24 24" width="24">
                                                                 <use xlinkHref="#instagram" />
                                                            </svg>
                                                       </NavLink>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                   <div className="footer-menu footer-menu-002">
                                        <h5 className="widget-title text-uppercase mb-4">Quick Links</h5>
                                        <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="index.html">
                                                       Home
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="index.html">
                                                       About
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="blog.html">
                                                       Services
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="styles.html">
                                                       Single item
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="#">
                                                       Contact
                                                  </NavLink>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                   <div className="footer-menu footer-menu-003">
                                        <h5 className="widget-title text-uppercase mb-4">Help & Info</h5>
                                        <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="#">
                                                       Track Your Order
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="#">
                                                       Returns + Exchanges
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="#">
                                                       Shipping + Delivery
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="#">
                                                       Contact Us
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="#">
                                                       Find us easy
                                                  </NavLink>
                                             </li>
                                             <li className="menu-item">
                                                  <NavLink className="item-anchor" to="index.html">
                                                       Faqs
                                                  </NavLink>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                   <div className="footer-menu footer-menu-004 border-animation-left">
                                        <h5 className="widget-title text-uppercase mb-4">Contact Us</h5>
                                        <p>
                                             Do you have any questions or suggestions?{" "}
                                             <NavLink className="item-anchor" to="mailto:contact@yourcompany.com">
                                                  contact@yourcompany.com
                                             </NavLink>
                                        </p>
                                        <p>
                                             Do you need support? Give us a call.{" "}
                                             <NavLink className="item-anchor" to="tel:+43 720 11 52 78">
                                                  +43 720 11 52 78
                                             </NavLink>
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    
               </footer>
          </>
     );
}

