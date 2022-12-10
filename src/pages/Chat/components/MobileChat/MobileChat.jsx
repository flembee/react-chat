import React, { useState } from "react";

import { Button, Container, Row, Col, List, Card, CardTitle, CardBody, CardHeader } from "reactstrap";

import dayjs from 'dayjs';

import ScrollArea from 'react-scrollbar';

import { CreateChatModal, AddContactModal } from "../../../../components";

import { SwitchTransition, CSSTransition } from "react-transition-group";


import "./styles.css";

export function MobileChat({props}) {

    const { userId, userContacts, singleChannel, channelData, setChannelData, contacts, messages } = props;

    const [openChat, setOpenChat] = useState(true);

    const [createChatModalHandler, setCreateChatModalHandler] = useState(false);

    const [addContactModalHandler, setAddContactModalHandler] = useState(false);

    const [channelSelected, setChannelSelected] = useState(singleChannel[0]);

    const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
      result = singleChannel.filter(channel => channel.users.name.toLowerCase().includes(value));

      setChannelData(result);
    }

    const ChannelsCanva = () => (
      <Col md="6" lg="5" xl="4">
        <Card id="chat3" style={{ borderRadius: "15px" }}>
          <CardTitle className="border-bottom">
            <div className="d-flex justify-content-between m-3">
              <input
                className="form-control rounded"
                placeholder="Search"
                type="search"
                onChange={(e) => handleSearch(e)}
                style={{ backgroundColor: "#f5f6f7" }}
              />
              <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                <span className="fake-link" onClick={() => setCreateChatModalHandler(true)}>
                  <i className="ri-chat-new-line"></i>
                </span>
              </div>
              <div className="social__links d-flex gap-3 me-1 align-items-center ">
                <span className="fake-link" onClick={() => setAddContactModalHandler(true)}>
                  <i className="ri-user-add-line"></i>
                </span>
              </div>
            </div>
          </CardTitle>
          <CardBody>
            <ScrollArea style={{ position: "relative", height: "400px" }}>
              <List type="unstyled" className="mb-0 me-3">
                {channelData && channelData.map((data, key) =>
                  <li className="p-2 border-bottom" key={key} style={{cursor: "pointer"}}
                    onClick={() =>{
                      setOpenChat(!openChat);
                      setChannelSelected(singleChannel[key])
                    }}
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
                          <p className="fw-bold mb-0">{data.users.name}</p>
                          <p className="small text-muted">
                            {data.message}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">
                          {data.time}
                        </p>
                        { (data.unreadMessages > 0) && 
                          <span className="badge bg-danger rounded-pill float-end">
                            {data.unreadMessages}
                          </span>
                        }
                      </div>
                  </li>
                )}
              </List>
            </ScrollArea>
          </CardBody>
        </Card>
      </ Col>
    );

    const MessagesCanva = () => (
      <Col md="8" lg="6" xl="4">
        <Card id="chat1" style={{ borderRadius: "15px" }}>
          <CardHeader>
            <div className="d-flex justify-content-between m-2">
              <div className="d-flex flex-row">
                <div className="social__links d-flex gap-3 align-items-center me-3">
                  <span className="fake-link" onClick={() => setOpenChat(!openChat)}>
                    <i className="ri-arrow-left-line" style={{fontSize: 20}}></i>
                  </span>
                </div>
                <div>
                  <img
                    src={contacts[0].avatar}
                    alt="avatar"
                    className="d-flex align-self-center me-3"
                    width="45"
                  />
                  <span className="badge bg-warning badge-dot"></span>
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">{channelSelected.users.name}</p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted">
                  {contacts[0].time}
                </p>
                { (contacts[0].unreadMessages > 0) && 
                  <span className="badge bg-danger rounded-pill float-end">
                    {contacts[0].unreadMessages}
                  </span>
                }
              </div>
            </div>
          </CardHeader>

          <CardBody>
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "40px", height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(57, 192, 237,.2)",
                }}
              >
                <p className="small mb-0">
                  Hello and thank you for visiting MDBootstrap. Please click
                  the video below.
                </p>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-end mb-4">
              <div
                className="p-3 me-3 border"
                style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
              >
                <p className="small mb-0">
                  Thank you, I really like your product.
                </p>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="avatar 1"
                style={{ width: "40px", height: "100%" }}
              />
            </div>

            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "40px", height: "100%" }}
              />
              <div className="ms-3" style={{ borderRadius: "15px" }}>
                <div className="bg-image">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                    style={{ borderRadius: "15px" }}
                    alt="video"
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "40px", height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(57, 192, 237,.2)",
                }}
              >
                <p className="small mb-0">...</p>
              </div>
            </div>

            <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <a href="https://instagram.com/flembee.tech" target="blank">
                  <i className="ri-attachment-line"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/company/flembee" target="blank">
                  <i className="ri-emotion-happy-line"></i>
                </a>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg ms-3"
              id="exampleFormControlInput2"
              placeholder="Type message"
              style={{backgroundColor: 'mistyrose'}}
            />
            <div className="social__links d-flex gap-3 ms-3 align-items-center ">
              <span>
                <a href="https://twitter.com/flembee_tech" target="blank">
                  <i className="ri-send-plane-line"></i>
                </a>
              </span>
            </div>
          </div>
          </CardBody>
        </Card>
      </Col>
    );

  return (
    <>
      {createChatModalHandler && <CreateChatModal setModalHandler={setCreateChatModalHandler} userContacts={userContacts} messages={messages} />}
      {addContactModalHandler && <AddContactModal setModalHandler={setAddContactModalHandler} userId={userId} />}
      <Row className="d-flex justify-content-center">
      <SwitchTransition mode="out-in">
          <CSSTransition
            key={openChat}
            classNames={openChat ? "fade" : "chuti"}
            timeout={300}
          >
            { openChat
              ? <ChannelsCanva />
              : <MessagesCanva />
            }
          </CSSTransition>
        </SwitchTransition>
      </Row>
    </>
  );
}
