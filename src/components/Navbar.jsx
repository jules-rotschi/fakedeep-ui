import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquareMore } from 'lucide-react'
import { User } from 'lucide-react'
import MessagingInterface from './messaging/MessagingInterface'
import './navbar.css'

function MessageButton({ newMessage, handleClick }) {

  const newMessageClassName = newMessage ? ' icon-button--new' : '';

  return(
    <button className={'icon-button' + newMessageClassName} onClick={handleClick}>
      <MessageSquareMore />
      {newMessage ? <div className='new-message-indicator'></div> : null}
    </button>
  )
}

export default function Navbar({ users, deleteConversation, sendMessage, sendMessageToLorelei, seeMessagesFrom }) {

  const [isMessagingOpen, setIsMessagingOpen] = useState(false)
  const [isMessagingClosing, setIsMessagingClosing] = useState(false)

  function closeMessaging() {
    setIsMessagingClosing(true)
    setTimeout(() => setIsMessagingOpen(false), 300)
  }

  function openMessaging() {
    setIsMessagingOpen(true);
    setIsMessagingClosing(false)
  }

  function messageButtonClick() {
    isMessagingOpen ? closeMessaging() : openMessaging()
  }

  const isNewMessage = users.reduce(
    (a, user) => {
      return ((user.messages[user.messages.length - 1].type == 'received'
        && !user.messages[user.messages.length - 1].seen) || a)
    },
    false
  );

  return(
    <>
      <nav className='navbar'>
        <div className="navbar__identity">
          <Link to='/' className='display display-small'>Claire Voyance</Link>
        </div>
        <menu className="navbar__menu">
          <li className="navbar__menu__item label label-small"><Link to="/">Accueil</Link></li>
          <li className="navbar__menu__item label label-small"><Link to="/404">Prendre rendez-vous</Link></li>
          <li className="navbar__menu__item label label-small"><Link to="/404">À propos</Link></li>
        </menu>
        <div className="navbar__buttons">
          <MessageButton handleClick={messageButtonClick} newMessage={isNewMessage}/>
          <button className='icon-button'><User /></button>
        </div>
      </nav>
      {
        isMessagingOpen ?
        <MessagingInterface
          users={users}
          closeMessaging={closeMessaging}
          isClosing={isMessagingClosing}
          deleteConversation={deleteConversation}
          sendMessage={sendMessage}
          sendMessageToLorelei={sendMessageToLorelei}
          seeMessagesFrom={seeMessagesFrom}
        /> :
        null
      }
    </>
  )
}