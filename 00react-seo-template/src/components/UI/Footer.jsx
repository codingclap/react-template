import { NavLink } from 'react-router-dom';
import '../../assets/js/jquery.min.js';  
import '../../assets/js/script.min.js';
import '../../assets/js/bootstrap.bundle.min.js';


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
                                             <svg width="90" height="31" viewBox="0 0 90 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M0.68 30V0.799999H10.08C11.8933 0.799999 13.4667 1.16 14.8 1.88C16.1333 2.57333 17.16 3.56 17.88 4.84C18.6267 6.12 19 7.64 19 9.4C19 11.1333 18.6267 12.6533 17.88 13.96C17.16 15.24 16.1333 16.24 14.8 16.96C13.4667 17.6533 11.8933 18 10.08 18H4.28V30H0.68ZM4.28 14.76H10.08C11.6533 14.76 12.9067 14.28 13.84 13.32C14.8 12.3333 15.28 11.0267 15.28 9.4C15.28 7.74667 14.8 6.44 13.84 5.48C12.9067 4.52 11.6533 4.04 10.08 4.04H4.28V14.76ZM32.9844 30.4C31.2244 30.4 29.7044 30.0667 28.4244 29.4C27.171 28.7333 26.1977 27.7733 25.5044 26.52C24.8377 25.24 24.5044 23.7333 24.5044 22V8.8C24.5044 7.04 24.8377 5.53333 25.5044 4.28C26.1977 3.02667 27.171 2.06666 28.4244 1.4C29.7044 0.733333 31.2244 0.4 32.9844 0.4C34.7444 0.4 36.251 0.733333 37.5044 1.4C38.7844 2.06666 39.7577 3.02667 40.4244 4.28C41.1177 5.53333 41.4644 7.02667 41.4644 8.76V22C41.4644 23.7333 41.1177 25.24 40.4244 26.52C39.7577 27.7733 38.7844 28.7333 37.5044 29.4C36.251 30.0667 34.7444 30.4 32.9844 30.4ZM32.9844 27.16C34.5577 27.16 35.7577 26.72 36.5844 25.84C37.4377 24.9333 37.8644 23.6533 37.8644 22V8.8C37.8644 7.14667 37.4377 5.88 36.5844 5C35.7577 4.09333 34.5577 3.64 32.9844 3.64C31.4377 3.64 30.2377 4.09333 29.3844 5C28.531 5.88 28.1044 7.14667 28.1044 8.8V22C28.1044 23.6533 28.531 24.9333 29.3844 25.84C30.2377 26.72 31.4377 27.16 32.9844 27.16ZM57.1288 30.4C55.2088 30.4 53.5554 30.08 52.1688 29.44C50.8088 28.8 49.7554 27.88 49.0088 26.68C48.2621 25.48 47.8754 24.0533 47.8488 22.4H51.4488C51.4488 23.8667 51.9421 25.0267 52.9288 25.88C53.9421 26.7333 55.3421 27.16 57.1288 27.16C58.8088 27.16 60.1154 26.7467 61.0488 25.92C62.0088 25.0933 62.4888 23.9467 62.4888 22.48C62.4888 21.3067 62.1688 20.28 61.5288 19.4C60.9154 18.52 60.0221 17.9067 58.8488 17.56L54.8888 16.32C52.8888 15.7067 51.3421 14.68 50.2487 13.24C49.1821 11.8 48.6488 10.1067 48.6488 8.16C48.6488 6.58667 48.9954 5.22667 49.6888 4.08C50.4088 2.90667 51.4088 2 52.6888 1.36C53.9688 0.693332 55.4754 0.359998 57.2088 0.359998C59.7688 0.359998 61.8221 1.08 63.3688 2.52C64.9154 3.93333 65.7021 5.82667 65.7288 8.2H62.1288C62.1288 6.76 61.6888 5.64 60.8088 4.84C59.9554 4.01333 58.7421 3.6 57.1688 3.6C55.6221 3.6 54.4088 3.97333 53.5288 4.72C52.6754 5.46667 52.2488 6.50667 52.2488 7.84C52.2488 9.04 52.5688 10.08 53.2088 10.96C53.8488 11.84 54.7688 12.4667 55.9688 12.84L59.9688 14.12C61.9154 14.7333 63.4221 15.7733 64.4888 17.24C65.5554 18.7067 66.0887 20.4267 66.0887 22.4C66.0887 24 65.7154 25.4 64.9688 26.6C64.2221 27.8 63.1688 28.7333 61.8088 29.4C60.4754 30.0667 58.9154 30.4 57.1288 30.4ZM72.6731 30V0.799999H76.2731V13.28H85.6331V0.799999H89.2331V30H85.6331V16.56H76.2731V30H72.6731Z" fill="black" />
                                        </svg>
                                             </NavLink>
                                        </div>
                                        <p>
                                             Gravida massa volutpat aenean odio. Amet, turpis erat nullam
                                             fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
                                             ac sit suscipit hendrerit.
                                        </p>
                                         
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
                                                  +91 2243 16 52 78
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

