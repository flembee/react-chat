import React, { useState } from "react";

import { Container } from "reactstrap";

import { Login, Register } from './components'

export function Authentication () {  

  const [loginFormVisible, setLoginFormVisible] = useState(true);

  return (
    <Container 
      className="d-flex justify-content-center" 
      style={{marginTop: "6rem", marginBottom: "8rem"}}
    >
      {
        loginFormVisible ? <Login setLoginFormVisible={setLoginFormVisible} />
                          :<Register setLoginFormVisible={setLoginFormVisible} />
      }
    </Container>
  );
};
