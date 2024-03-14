import { Trash2 } from "lucide-react"
import ProfilePicture from '../ProfilePicture'
import './inbox-message.css'

export default function InboxMessage({ user, openConversation, deleteConversation }) {

  const lastMessage = user.messages[user.messages.length - 1]
  
  const isMessageNew = !lastMessage.seen && lastMessage.type == 'received'
  const classeName = isMessageNew ? ' inbox-message--new' : ''
  
  const fullMessage =
    lastMessage.type == 'emitted' ?
    'Vous : ' + lastMessage.content :
    lastMessage.content
  
  const truncatedMessage =
    fullMessage.length > 40 ?
    fullMessage.split('').slice(0, 40).join('') + '...' :
    fullMessage;

  function displayTime(time) {
    if (time == 0) {
      return "À l'instant"
    }
    if (time < 1) {
      const minTime = (time * 60).toString()
      return minTime + 'min'
    }
    else if (time < 24) {
      const hourTime = Math.round(time).toString();
      return hourTime + 'h'
    }
    else if (time < 168) {
      const dayTime = Math.round(time / 24).toString();
      return dayTime + 'j'
    }
    else if (time < (4 * 168)) {
      const weekTime = Math.round(time / 168).toString();
      if (weekTime == 1) {
        return weekTime + ' semaine'
      } else {
        return weekTime + ' semaines'
      }
    }
  }
  
  return(
    <div className={"inbox-message" + classeName} onClick={() => openConversation(user.username)}>
      <div className="inbox-message__infos">
        <div className="profile-picture-click-handler" onClick={(e) => e.stopPropagation()}>
          <ProfilePicture isLinked={true} size={56} isUpscalingWhileHovering={true} user={user} />
        </div>
        <div className="inbox-message__text">
          <div className="inbox-message__user">
            <h3 className="inbox-message__user-name title title-small">{user.name}</h3>
            {user.active ? <div className="inbox-message__user-active"></div> : null}
          </div>
          <div className="inbox-message__message">
            <div className="inbox-message__message-content body body-medium">{user.typing ? "Est en train d'écrire..." : truncatedMessage}</div>
            <div className="inbox-message__message-time body body-medium">{displayTime(lastMessage.time)}</div>
          </div>
        </div>
      </div>
      <button
        className="icon-button"
        onClick={(e) => {
          e.stopPropagation();
          deleteConversation(user);
        }}
      >
        <Trash2 />
      </button>
    </div>
  )
}