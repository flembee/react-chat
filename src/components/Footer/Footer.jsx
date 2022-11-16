import React from "react";

import { Container, Row, Col } from "reactstrap";
import "./styles.css";

export function Footer () {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="12" className="mt-4 align-items-center">
            <div className="social__links d-flex gap-3 justify-content-center">
              <span>
                <a href="https://github.com/flembee" target="blank">
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a href="https://instagram.com/flembee.tech" target="blank">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/company/flembee" target="blank">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com/flembee_tech" target="blank">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>
          <Col lg="12" className="mt-3 text-center">
            <p className="copyright">
              {" "}
              Copyrights 2022, Developed by Flembee. All Rights Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};