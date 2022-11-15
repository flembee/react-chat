import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Container } from "reactstrap";

import en from '../../locales/en/messages.json';
import es from '../../locales/es/messages.json';

import {
  getLanguage,
  changeLanguage,
} from '../../redux/actions';

import logo from "../../assets/images/logo.png";

import "./header.css";

export function Header () {
  const dispatch = useDispatch();

  const {
    language,
  } = useSelector((state) => state.language);

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

  useEffect(() => {
      let isMounted = true;

      if (isMounted) dispatch(getLanguage());

      return () => {
          isMounted = false;
      };
  }, [dispatch]);

  const onChangeLanguage = async () => {
    const lng = language === "English" ? {language: "Español", messages: es} : {language: "English", messages: en}
    dispatch(changeLanguage(lng));
  }

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
                          onClick={() => onChangeLanguage()}>
                    <span>
                      <i className="ri-global-line"></i>
                    </span>
                    <span style={{color:" #000", textDecoration: "none", fontSize: "0.8rem"}}>{language}</span>
                  </button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </Container>
  );
};
