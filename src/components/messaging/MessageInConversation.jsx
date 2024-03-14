import ProfilePicture from "../ProfilePicture"
import './message-in-conversation.css'

function MessageBubble({ content }) {
  return(
    <div className="message-bubble body-medium">{content}</div>
  )
}

export default function MessageInConversation({ message, user }) {
  return(
    <div className={"message message--" + message.type}>
      {
        message.type == 'received' ?
        <ProfilePicture isLinked={true} size={40} isUpscalingWhileHovering={false} user={user} /> :
        null
      }
      <MessageBubble type={message.type} content={message.content} />
    </div>
  )
}