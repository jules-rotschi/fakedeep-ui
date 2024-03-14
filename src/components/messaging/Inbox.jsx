import InboxMessage from './InboxMessage'
import { MessageSquareMore } from 'lucide-react'
import { X } from 'lucide-react'
import './inbox.css'

export default function Inbox({ users, openConversation, deleteConversation, closeMessaging }) {

  function byTime(a, b) {
    if (a.messages[a.messages.length - 1].time < b.messages[b.messages.length - 1].time) {
      return -1
    }

    if (a.messages[a.messages.length - 1].time > b.messages[b.messages.length - 1].time) {
      return 1
    }
  }
  
  const sortedUsers = users.sort(byTime)

  const messagesLength = users.reduce((a, user) => user.messages.length + a, 0)

  return(
    <>
      <header className='inbox__header'>
        <div className="inbox__title">
          <h2 className="inbox__title-text title-medium">Boîte de réception</h2>
          {/* <MessageSquareMore className='inbox__title-icon' size={32} strokeWidth={2.5}/> */}
        </div>
        <button className="icon-button" onClick={closeMessaging}><X /></button>
      </header>
      <main className="inbox__content">
        {messagesLength ?
        sortedUsers.map((user, index) =>
          <InboxMessage
            user={user}
            deleteConversation={deleteConversation}
            openConversation={openConversation}
            key={index}
          />
        ) :
        <p className='error-message body-medium'>Aucun message à afficher.</p>}
        
      </main>
    </>
  )
 
}