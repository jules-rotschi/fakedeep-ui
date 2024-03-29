import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './app.css'

export default function App({ defaultUsers }) {

  const [users, setUsers] = useState(defaultUsers)

  function deleteConversation(user) {
    const USERS = [...users];
    const userIndex = USERS.indexOf(user);
    USERS.splice(userIndex, 1);
    setUsers(USERS);
  }

  function newMessage(type, content, user) {
    const newMessage = {
      type: type,
      content: content,
      time: 0,
      seen: false
    }
    const USERS = [...users];
    const userIndex = USERS.indexOf(user);
    const OLD_USER = USERS[userIndex];
    const OLD_USER_MESSAGES = OLD_USER.messages;
    const allMessages = [...OLD_USER_MESSAGES, newMessage];
    const actualUser = {...OLD_USER, messages: allMessages};
    USERS.splice(userIndex, 1, actualUser);
    setUsers(USERS);
  }

  function sendMessage(content, user) {
    newMessage('emitted', content, user)
  }

  function receiveMessage(content, user) {
    newMessage('received', content, user)
  }

  function messagesAreSeen(type, user) {
    const USERS = [...users];
    const userIndex = USERS.indexOf(user);
    const OLD_USER = USERS[userIndex];
    const OLD_USER_MESSAGES = OLD_USER.messages;
    const OLD_USER_MESSAGES_WITH_INDEX = OLD_USER_MESSAGES.map((message, index) => {return {message: message, index: index}})
    const OLD_MESSAGES_FROM_USER = OLD_USER_MESSAGES_WITH_INDEX.filter((element) => element.message.type == type);
    const newMessagesFromUser = OLD_MESSAGES_FROM_USER.map(
      (element) => {
        const message = element.message;
        const index = element.index;
        return {message: {...message, seen: true}, index: index}
      }
    )
    const newUserMessages = OLD_USER_MESSAGES;
    newMessagesFromUser.map((element) => {newUserMessages.splice(element.index, 1, element.message)})
    const actualUser = {...OLD_USER, messages: newUserMessages};
    USERS.splice(userIndex, 1, actualUser);
    setUsers(USERS);
  }

  function seeMessagesFrom(user) {
    messagesAreSeen('received', user)
  }

  function userSeesMessages(user) {
    messagesAreSeen('emitted', user)
  }

  function setUserIsTyping(user, isTyping) {
    const USERS = [...users];
    const userIndex = USERS.indexOf(user);
    const OLD_USER = USERS[userIndex];
    const userTyping = {...OLD_USER, typing: isTyping};
    USERS.splice(userIndex, 1, userTyping);
    setUsers(USERS);
  }

  const lorelei = users.find((user) => user.username == 'ysee');

  const [messagingLorelei, setMessagingLorelei] = useState(0)

  function sendMessageToLorelei(content) {
    sendMessage(content, lorelei);
    setMessagingLorelei(1)
  }

  switch (messagingLorelei) {
    case 1:
      setTimeout(() => {
        userSeesMessages(lorelei);
        setMessagingLorelei(2)
      }, 1000);
      break;

    case 2:
      setTimeout(() => {
        setUserIsTyping(lorelei, true);
        setMessagingLorelei(3)
      }, 1892);
      break;

    case 3:
      setTimeout(() => {
        setUserIsTyping(lorelei, false);
        setMessagingLorelei(4);
      }, 6025);
      break;

    case 4:
      receiveMessage('Oh ! Quand puis-je en faire une svp ?', lorelei);
      setMessagingLorelei(0);
  }

  return(
    <>
      <Navbar
        users={users}
        deleteConversation={deleteConversation}
        sendMessage={sendMessage}
        sendMessageToLorelei={sendMessageToLorelei}
        seeMessagesFrom={seeMessagesFrom}
      />
      <main className='wrapper'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}