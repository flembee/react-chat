import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";

import logo from "../../assets/images/logo.png";

import "./header.css";

export function Header () {
  const headerRef = useRef(null);
  
  useEffect(() => {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("header__shrink");
        } else {
          headerRef.current.classList.remove("header__shrink");
        }
      });
      return () => {
        window.removeEventListener("scroll");
      };
  }, []);

  return (
    <Container>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="navigation">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav__right d-flex align-items-center gap-5" style={{paddingLeft: "2rem"}}>
                <div className="single__seller-card d-flex align-items-center gap-3">
                  <button className="btn d-flex gap-2 align-items-center"
                          onClick={() => window.open('https://github.com/flembee/react-chat/blob/main/README.md', '_blank')}>
                    <span>
                      <i className="ri-github-line"></i>
                    </span>
                    <span style={{color:" #000", textDecoration: "none", fontSize: "0.8rem"}}>Documentation</span>
                  </button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </Container>
  );
};
