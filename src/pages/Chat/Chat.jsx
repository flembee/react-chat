import React from "react";
import {
  MDBTypography,
} from "mdb-react-ui-kit";

import { Container, Row, Col, InputGroup, Card, CardBody } from "reactstrap";

import ScrollArea from 'react-scrollbar';

import "./styles.css";

export function Chat() {
  return (
    <Container className="py-5">
      <Row>
        <Col md="12">
          <Card id="chat3" style={{ borderRadius: "15px" }}>
            <CardBody>
              <Row>
                <Col md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                  <div className="p-3">
                    <InputGroup className="rounded mb-3">
                      <input
                        className="form-control rounded"
                        placeholder="Search"
                        type="search"
                      />
                      <span>
                        <a className="ms-1 text-muted" href="https://www.linkedin.com/company/flembee" target="blank">
                          <i className="ri-search-line"></i>
                        </a>
                    </span>
                    </InputGroup>

                    <ScrollArea
                      suppressscrollx="true"
                      style={{ position: "relative", height: "400px" }}
                    >
                      <MDBTypography listUnStyled className="mb-0">
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Marie Horwitz</p>
                                <p className="small text-muted">
                                  Hello, Are you there?
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Just now</p>
                              <span className="badge bg-danger rounded-pill float-end">
                                3
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-warning badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Alexa Chung</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">
                                5 mins ago
                              </p>
                              <span className="badge bg-danger rounded-pill float-end">
                                2
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Danny McChain</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-danger badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Ashley Olsen</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-warning badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Kate Moss</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Ben Smith</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                      </MDBTypography>
                    </ScrollArea>
                  </div>
                </Col>
                <Col md="6" lg="7" xl="8">
                  <ScrollArea
                    suppressscrollx="true"
                    style={{ position: "relative", height: "400px" }}
                    className="pt-3 pe-3"
                  >
                    <div className="d-flex flex-row justify-content-start">
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
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
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
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
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur?
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                  </ScrollArea>
                  <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 3"
                      style={{ width: "40px", height: "100%" }}
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput2"
                      placeholder="Type message"
                    />
                    <span>
                      <a className="ms-1 text-muted" href="https://www.linkedin.com/company/flembee" target="blank">
                        <i className="ri-attachment-line"></i>
                      </a>
                    </span>
                    <span>
                      <a className="ms-3 text-muted" href="https://www.linkedin.com/company/flembee" target="blank">
                        <i className="ri-emotion-happy-line"></i>
                      </a>
                    </span>
                    <span>
                      <a className="ms-3 text-muted" href="https://www.linkedin.com/company/flembee" target="blank">
                        <i className="ri-send-plane-line"></i>
                      </a>
                    </span>
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
