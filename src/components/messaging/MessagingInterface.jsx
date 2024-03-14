import { useState } from 'react'
import Inbox from './Inbox'
import Conversation from './Conversation'
import './messaging-interface.css'

export default function MessagingInterface({ users, closeMessaging, isClosing, deleteConversation, sendMessage, sendMessageToLorelei, seeMessagesFrom }) {

  const className = isClosing ? ' closing' : '';

  const [openedConversation, setOpenedConversation] = useState(null);

  const user =
    openedConversation ?
    users.filter((user) => user.username == openedConversation)[0] :
    null

  function openConversation(username) {
    setOpenedConversation(username);
  }

  return(
    <div className={'messaging' + className}>
      {
        openedConversation ?
        <Conversation
          user={user}
          closeConversation={() => setOpenedConversation(null)}
          sendMessage={sendMessage}
          sendMessageToLorelei={sendMessageToLorelei}
          closeMessaging={closeMessaging}
          seeMessagesFrom={seeMessagesFrom}
        /> :
        <Inbox
          users={users}
          deleteConversation={deleteConversation}
          openConversation={openConversation}
          closeMessaging={closeMessaging}
        />
      }
    </div>
  )
}