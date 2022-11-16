import React from "react";

import { Container, Row, Col, List, InputGroup, Card, CardTitle, CardBody } from "reactstrap";

import dayjs from 'dayjs';

import ScrollArea from 'react-scrollbar';

import "./styles.css";

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

const messages = [
  {
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32866",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  },
  {
    message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32867",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  },
  {
    message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32866",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  },
  {
    message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32867",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  },
  {
    message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32866",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  },
  {
    message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32867",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  },
  {
    message: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32866",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  },
  {
    message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    channelId: "636db6bba08b1b9439eca578",
    userId: "635980d3aa69be4f60e32867",
    createdAt: "2022-11-11T02:36:49.277+00:00"
  }
]

export function Chat() {
  return (
    <Container style={{marginTop: "6rem", marginBottom: "8rem"}}>
      <Row>
        <Col md="12">
          <Card id="chat3" style={{ borderRadius: "15px" }}>
            <CardTitle className="border-bottom">
              <Row>
                <Col md="6" lg="5" xl="4" className="mb-md-0 my-auto"> 
                    <InputGroup className="rounded mb-3">
                      <input
                        className="form-control rounded ms-3"
                        placeholder="Search"
                        type="search"
                        style={{ backgroundColor: "#f5f6f7" }}
                      />
                      <div className="social__links d-flex gap-3 ms-1 me-3 align-items-center ">
                        <span>
                          <span className="ms-1 text-muted" href="/">
                            <i className="ri-search-line"></i>
                          </span>
                        </span>
                      </div>
                    </InputGroup>
                </Col>
                <Col md="6" lg="7" xl="8">
                  <List type="unstyled" className="mb-0 me-3">
                    <li className="p-2">
                      <a
                        href="#!" style={{textDecoration: "none"}}
                        className="d-flex justify-content-between"
                      >
                        <div className="d-flex flex-row">
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
                        <div className="pt-1">
                          <p className="small text-muted mb-1">
                            {contacts[0].time}
                          </p>
                          { (contacts[0].unreadMessages > 0) && 
                            <span className="badge bg-danger rounded-pill float-end">
                              {contacts[0].unreadMessages}
                            </span>
                          }
                        </div>
                      </a>
                    </li>
                  </List>
                </Col>
              </Row>
            </CardTitle>
            <CardBody>
              <Row>
                <Col md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                  <ScrollArea
                    suppressscrollx="true"
                    style={{ position: "relative", height: "400px" }}
                  >
                    <List type="unstyled" className="mb-0 me-3">
                      {contacts.length && contacts.map((data, key) =>
                        <li className="p-2 border-bottom" key={key}>
                          <a
                            href="#!" style={{textDecoration: "none"}}
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src={data.avatar}
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="50"
                                />
                                <span className="badge bg-warning badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">{data.name}</p>
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
                </Col>
                <Col md="6" lg="7" xl="8">
                  <ScrollArea
                    suppressscrollx="true"
                    style={{ position: "relative", height: "400px" }}
                    className="pt-3 pe-3"
                  >
                    {messages.length && messages.map((data, key) =>
                      (data.userId === '635980d3aa69be4f60e32866') 
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
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
