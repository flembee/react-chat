import React, { useState } from "react";

import { List, InputGroup, Card, CardTitle, CardBody } from "reactstrap";

import ScrollArea from 'react-scrollbar';

import "./styles.css";

export function CreateChatModal ({setModalHandler, userContacts}) {

  const [contactsData, setContactsData] = useState(userContacts);

  const contacts =[
    {
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      name: "Marie Horwitz",
      time: "Just now",
      message: "Hello, Are you there?",
      unreadMessages: 0,
    },
    {
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      name: "Alexa Chung",
      time: "5 mins ago",
      message: "Hello, Are you there?",
      unreadMessages: 2,
    },
    {
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
        name: "Danny McChain",
        time: "Yesterday",
        message: "Hello, Are you there?",
        unreadMessages: 1,
      },
      {
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp",
        name: "Ashley Olsen",
        time: "Yesterday",
        message: "Hello, Are you there?",
        unreadMessages: 0,
      },
      {
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp",
        name: "Kate Moss",
        time: "Yesterday",
        message: "Hello, Are you there?",
        unreadMessages: 0,
      },
      {
        avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
        name: "Ben Smith",
        time: "Yesterday",
        message: "Hello, Are you there?",
        unreadMessages: 0,
      },
  ]

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = userContacts.filter(user => user.name.toLowerCase().includes(value));

    setContactsData(result);
  }

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <div className="close__modal me-2">
          <span className="fake-link" onClick={() => setModalHandler(false)}>
            <i className="ri-close-line"></i>
          </span>
        </div>
        <Card id="chat3">
          <CardTitle className="border-bottom">
            <h5 className="text-center">New Chat</h5>
            <InputGroup className="rounded mb-3">
              <input
                className="form-control rounded ms-3"
                placeholder="Search"
                type="search"
                onChange={(e) => handleSearch(e)}
                style={{ backgroundColor: "#f5f6f7" }}
              />
              <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                <span className="ms-1 text-muted" href="/">
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </InputGroup>
          </CardTitle>
          <CardBody>
            <ScrollArea
              style={{ position: "relative", height: "400px" }}
            >
              <List type="unstyled" className="mb-0 me-3">
                {contactsData && contactsData.map((data, key) =>
                  <li className="p-2 border-bottom" key={key}>
                    <a
                      href="#!" style={{textDecoration: "none"}}
                      className="d-flex justify-content-between"
                    >
                      <div className="d-flex flex-row">
                        <div>
                          <img
                            src={contacts[key].avatar}
                            alt="avatar"
                            className="d-flex align-self-center me-3"
                            width="50"
                          />
                          <span className="badge bg-warning badge-dot"></span>
                        </div>
                        <div className="pt-1">
                          <p className="fw-bold mb-0">{data.name}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                )}
              </List>
            </ScrollArea>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
