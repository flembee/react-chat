import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Container } from "reactstrap";

import { MobileChat, WebChat } from "./components";

import {
  getContactsProcess,
  getChannelProcess,
  getMessageProcess
} from '../../redux/actions';

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

export function Chat() {

    const dispatch = useDispatch();

    const userId = "635980d3aa69be4f60e32866";

    const {
      singleChannel,
    } = useSelector((state) => state.channels);

    const {
      messages,
    } = useSelector((state) => state.messages);

    const {
      userContacts,
    } = useSelector((state) => state.user);

    useEffect(() => {
      let isMounted = true;

      if (isMounted)
        dispatch(getContactsProcess({id: userId}));

      return () => {
          isMounted = false;
      };
    }, [dispatch]);

    useEffect(() => {
      let isMounted = true;

      if (isMounted)
        dispatch(getChannelProcess({id: userId}));

      return () => {
          isMounted = false;
      };
    }, [dispatch]);

    useEffect(() => {
      let isMounted = true;

      if (isMounted && singleChannel._id)
        dispatch(getMessageProcess({id: singleChannel._id}))

      return () => {
          isMounted = false;
      };
    }, [dispatch, singleChannel]);

    useEffect(() => {
      let isMounted = true;

      if (isMounted && singleChannel._id)
        dispatch(getMessageProcess({id: singleChannel._id}))

      return () => {
          isMounted = false;
      };
    }, [dispatch, singleChannel]);

    return (
      <Container style={{marginTop: "6rem", marginBottom: "8rem"}}>
        {singleChannel && singleChannel.length && <WebChat props={{userId, userContacts, singleChannel, contacts, messages}} />}
        {/* {singleChannel && singleChannel.length && <MobileChat props={{userId, userContacts, singleChannel, contacts, messages}} />} */}
      </Container>
    );
}
