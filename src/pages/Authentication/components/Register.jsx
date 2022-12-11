import React, { useState } from "react";

import { useDispatch } from 'react-redux';

import { Col, Button, Card, InputGroup, CardTitle, CardBody } from "reactstrap";

import { registerUser } from '../../../redux/actions';

export function Register ({setLoginFormVisible}) {  

    const dispatch = useDispatch();

   const [isSignUpEmpty, setIsSignUpEmpty] = useState(false);

    const [signUpForm, setSignUpForm] = useState({
        name:'',
        email:'',
        password:'',
        repeatPassword:'',
    });

    const handleSignUpChange = (e) => {
        const {name, value} = e.target;
    
        setSignUpForm((prev) => {
          prev[name] = value;
    
          return prev;
        });
    };
      
    const onSignUp = () => {
        const { name, email, password, repeatPassword } = signUpForm;

        if(!name || !email || !password){
        setIsSignUpEmpty(true);
        }else{

        if(password !== repeatPassword) { 
            console.log("Not equal")
        }
        else{
            dispatch(registerUser({ name, email, password }));
        }
        } 
    };

  return (
    <Col md="6" lg="5" xl="4">
      <Card id="chat3" style={{ borderRadius: "15px" }}>
        <CardTitle className="border-bottom">
          <div className="d-flex justify-content-center m-3">
            <h5>Register</h5>
          </div>
        </CardTitle>
        <CardBody>
            <InputGroup className="rounded mb-3">
                <input
                    className="form-control rounded ms-3"
                    placeholder="Your name..."
                    type="name"
                    name="name"
                    style={{ backgroundColor: "#f5f6f7" }}
                    onClick={() =>{
                        if(isSignUpEmpty)
                            setSignUpForm(false);
                    }}
                    onChange={handleSignUpChange}
                />
                <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                    <span className="ms-1 text-muted" href="/">
                    <i className="ri-user-line"></i>
                    </span>
                </div>
            </InputGroup>
            <InputGroup className="rounded mb-3">
                <input
                    className="form-control rounded ms-3"
                    placeholder="Enter email..."
                    type="email"
                    name="email"
                    style={{ backgroundColor: "#f5f6f7" }}
                    onClick={() =>{
                        if(isSignUpEmpty)
                            setSignUpForm(false);
                    }}
                    onChange={handleSignUpChange}
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
                        if(isSignUpEmpty)
                            setSignUpForm(false);
                    }}
                    onChange={handleSignUpChange}
                />
                <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                    <span className="ms-1 text-muted" href="/">
                    <i className="ri-lock-password-line"></i>
                    </span>
                </div>
            </InputGroup>
            <InputGroup className="rounded mb-3">
            <input
                className="form-control rounded ms-3"
                placeholder="Repeat password..."
                type="password"
                name="repeatPassword"
                style={{ backgroundColor: "#f5f6f7" }}
                onClick={() =>{
                if(isSignUpEmpty)
                    setSignUpForm(false);
                }}
                onChange={handleSignUpChange}
            />
            <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
              <span className="ms-1 text-muted" href="/">
                <i className="ri-lock-password-line"></i>
              </span>
            </div>
          </InputGroup>
            <div className="d-flex justify-content-center mt-4">
                <Button color="primary" onClick={() => onSignUp()} >Sign up</Button>
            </div>
            <div 
                className="d-flex justify-content-center mt-4" 
                style={{cursor: 'pointer'}}
                onClick={() => setLoginFormVisible(true)}
            >
                <span>Have account? Login</span>
            </div>
        </CardBody>
      </Card>
    </Col>
  );
};
