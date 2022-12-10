import React, { useState } from "react";

import { InputGroup, Card, CardTitle, CardBody } from "reactstrap";

import { useSelector, useDispatch } from 'react-redux';


import "./styles.css";

import {
  addContactProcess,
} from '../../redux/actions';

export function AddContactModal ({setModalHandler, userId}) {

  const dispatch = useDispatch();

  const {
    contactAdded
  } = useSelector((state) => state.user);

  const [emailInput, setEmailInput] = useState('');

  function checkIfEmail(str) {
    // Regular expression to check if string is email
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  
    return regexExp.test(str);
  }

  const handleInput = (event) => {
    let value = event.target.value.toLowerCase();
    setEmailInput(value);
  }

  const addContact = async() => {
    if(emailInput && checkIfEmail(emailInput))
      dispatch(addContactProcess({id: userId, email: emailInput}))
    setEmailInput('');
  }

  return (
    <div className="modal__wrapper">
      <div className="single__modal" style={{top: "40%"}}>
        <div className="close__modal me-2">
          <span className="fake-link" onClick={() => setModalHandler(false)}>
            <i className="ri-close-line"></i>
          </span>
        </div>
        <Card id="chat3">
            <CardTitle>
              <h5 className="text-center">Add Contact</h5>
            </CardTitle>
            <CardBody>
              <InputGroup className="rounded mb-3">
                  <input
                    className="form-control rounded ms-3"
                    placeholder="Enter email"
                    value={emailInput}
                    onChange={(e) => handleInput(e)}
                    style={{ backgroundColor: "#f5f6f7" }}
                  />
                  <div className="social__links d-flex gap-3 ms-2 align-items-center ">
                  <span className="fake-link" onClick={() => addContact(true)}>
                      <i className="ri-user-add-line"></i>
                    </span>
                  </div>
                </InputGroup>
                {contactAdded === false && 
                  <p className='m-0 mb-3 text-center' style={{color: 'red'}}>User does not exists</p>
                }
                {contactAdded === true && 
                  <p className='m-0 mb-3 text-center' style={{color: 'green'}}>This user is already in your contacts</p>
                }
                {(contactAdded && contactAdded._id) &&
                  <p className='m-0 mb-3 text-center' style={{color: 'green'}}>User added to your contacts list</p>
                }
            </CardBody>
          </Card>
      </div>
    </div>
  );
};
