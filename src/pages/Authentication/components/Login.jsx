import React, { useState } from "react";

import { useDispatch } from 'react-redux';

import { Col, Button, Card, InputGroup, CardTitle, CardBody } from "reactstrap";

import { loginUser } from '../../../redux/actions';

export function Login ({setLoginFormVisible}) {  

  const dispatch = useDispatch();

  const [isSignInEmpty, setIsSignInEmpty] = useState(false);

  const [signInForm, setSignInForm] = useState({
    email:'',
    password:'',
    });

  const handleSignInChange = (e) => {
    const {name, value} = e.target;

    setSignInForm((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const onSignIn = () => {
    const { email, password } = signInForm;

    if(!email || !password){
      setIsSignInEmpty(true);
    }else{
      dispatch(loginUser({ email, password }));
    }  
  };

  return (
    <Col md="6" lg="5" xl="4">
      <Card id="chat3" style={{ borderRadius: "15px" }}>
        <CardTitle className="border-bottom">
          <div className="d-flex justify-content-center m-3">
            <h5>Sign in</h5>
          </div>
        </CardTitle>
        <CardBody>
          <InputGroup className="rounded mb-3">
            <input
              className="form-control rounded ms-3"
              placeholder="Enter email..."
              type="email"
              name="email"
              style={{ backgroundColor: "#f5f6f7" }}
              onClick={() =>{
                if(isSignInEmpty)
                    setIsSignInEmpty(false);
              }}
              onChange={handleSignInChange}
            />
            <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
              <span className="ms-1 text-muted" href="/">
                <i className="ri-mail-line"></i>
              </span>
            </div>
          </InputGroup>
          <InputGroup className="rounded mb-3">
            <input
              className="form-control rounded ms-3"
              placeholder="Enter password..."
              type="password"
              name="password"
              style={{ backgroundColor: "#f5f6f7" }}
              onClick={() =>{
                if(isSignInEmpty)
                    setIsSignInEmpty(false);
              }}
              onChange={handleSignInChange}
            />
            <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
              <span className="ms-1 text-muted" href="/">
                <i className="ri-lock-password-line"></i>
              </span>
            </div>
          </InputGroup>
          <div className="d-flex justify-content-center mt-4">
            <Button color="primary" onClick={() => onSignIn()} >Sign in</Button>
          </div>
          <div 
            className="d-flex justify-content-center mt-4" 
            style={{cursor: 'pointer'}}
            onClick={() => setLoginFormVisible(false)}
          >
            <span>Don't have account? Register</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
