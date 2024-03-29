import { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { Send } from 'lucide-react'
import MessageInConversation from './MessageInConversation'
import ProfilePicture from '../ProfilePicture'
import './conversation.css'

export default function Conversation({ user, closeConversation, sendMessage, sendMessageToLorelei, closeMessaging, seeMessagesFrom }) {

  const [newMessageContent, setNewMessageContent] = useState('');

  function send(content, user) {
    if (user.username == 'ysee' && user.messages.length == 1) {
      sendMessageToLorelei(content);
    } else {
      sendMessage(content, user)
    }
  }

  const endMessages = useRef(null);

  function scrollToBottom() {
    endMessages.current?.scrollIntoView({
      block: 'end'
    })
  }

  useEffect(() => {
    scrollToBottom();
    seeMessagesFrom(user);
  }, [user.messages])

  useEffect(() => {
    document.getElementById('input-for-message')?.focus()
  }, [document.getElementById('input-for-message')])

  return(
    <>
      <header className='conversation__header'>
        <button className="icon-button" onClick={closeConversation}><ArrowLeft /></button>
        <div className="user">
          <ProfilePicture isLinked={true} size={48} isUpscalingWhileHovering={false} user={user} />
          <div className="user-status">
            <h2 className="user-name title-medium">{user.name}</h2>
            {user.active ? <div className='user-active label-small'>en ligne</div> : null}
          </div>
        </div>
        <button className="icon-button" onClick={closeMessaging}><X /></button>
      </header>
      <main className="conversation__content">
        <div className="conversation__data">
          <div className="first-message-date label-small">16 février</div>
          <div className="conversation__messages">
            {
              user.messages.map((message, index) =>
                <MessageInConversation message={message} user={user} key={index} />
              )
            }
          </div>
          {
            user.messages[user.messages.length - 1].type == 'emitted'
            && user.messages[user.messages.length - 1].seen
            && !user.typing ?
            <div className="seen caption">Vu</div> :
            null
          }
          {user.typing ? <div className="typing body-medium">{user.name} est en train d'écrire...</div> : null}
          <div ref={endMessages} id='ref-div'></div>
        </div>
        <div className="conversation__input">
          <form className="message-input" onSubmit={e => e.preventDefault()}>
            <input
              id='input-for-message'
              type="text"
              placeholder='Message'
              value={newMessageContent}
              onChange={(e) => setNewMessageContent(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (newMessageContent.length) {
                    send(newMessageContent, user);
                    setNewMessageContent('');
                  }
                }
              }}
            />
            <button
              className='icon-button'
              type='button'
              onClick={() =>{
                if (newMessageContent.length) {
                  send(newMessageContent, user);
                  setNewMessageContent('');
                }
              }}
            ><Send /></button>
          </form>
        </div>
      </main>
    </>
  )
}