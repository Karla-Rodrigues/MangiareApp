import React from "react";

const Footer = () => {
  return (
    <div className="container-md">
      <div className="row">
        <div className="col">
          <p></p>
          <p>&copy;&nbsp;Copyright Karla Rodrigues</p>
        </div>

        <div className="col">
          <h5>Connect With Us</h5>
          <nav>
            <ul className="min-list social-icons-list group">
              <li>
                <a href="#" className="social-color-facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-color-twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-color-youtube">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" class="social-color-linkedin">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" class="social-color-instagram">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
