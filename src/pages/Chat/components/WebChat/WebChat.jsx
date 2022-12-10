import React, { useState } from "react";

import { Container, Row, Col, List, Card, CardTitle, CardBody, CardHeader } from "reactstrap";

import dayjs from 'dayjs';

import ScrollArea from 'react-scrollbar';

import { CreateChatModal, AddContactModal } from "../../../../components";

import "./styles.css";

export function WebChat({props}) {

    const { userId, userContacts, singleChannel, channelData, setChannelData, contacts, messages } = props;

    const [createChatModalHandler, setCreateChatModalHandler] = useState(false);

    const [addContactModalHandler, setAddContactModalHandler] = useState(false);

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
                    </a>
                  </li>
                )}
              </List>
            </ScrollArea>
          </CardBody>
        </Card>
      </ Col>
    );

    const MessagesCanva = () => (
      <Col md="6" lg="7" xl="8">
        <Card id="chat3" style={{ borderRadius: "15px" }}>
          <CardHeader className="border-bottom">
            <div className="d-flex justify-content-between m-2">
              <div className="d-flex flex-row ms-3">
                <div>
                  <img
                    src={contacts[0].avatar}
                    alt="avatar"
                    className="d-flex align-self-center me-3"
                    width="50"
                  />
                  <span className="badge bg-warning badge-dot"></span>
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">{contacts[0].name}</p>
                </div>
              </div>
              <div className="pt-1 me-3">
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
            <ScrollArea style={{ position: "relative", height: "400px" }}>
              {messages.length && messages.map((data, key) =>
                (data.userId._id !== userId) 
                ? <div className="d-flex flex-row justify-content-start" key={key}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <div>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        {data.message}
                      </p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                        {dayjs(data.createdAt).hour()} | {dayjs(data.createdAt).month()} {dayjs(data.createdAt).day()}
                      </p>
                    </div>
                  </div>
                :
                  <div className="d-flex flex-row justify-content-end" key={key}>
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        {data.message}
                      </p>
                      <p className="small me-3 mb-3 rounded-3 text-muted">
                        {dayjs(data.createdAt).hour()} | {dayjs(data.createdAt).month()} {dayjs(data.createdAt).day()}
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                  </div>
              )}
            </ScrollArea>
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
        {createChatModalHandler && <CreateChatModal setModalHandler={setCreateChatModalHandler} userContacts={userContacts} />}
        {addContactModalHandler && <AddContactModal setModalHandler={setAddContactModalHandler} userId={userId} />}
        <Row>
          <ChannelsCanva />
          <MessagesCanva />
        </Row>
      </>
    );
}
