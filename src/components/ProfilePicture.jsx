import { Link } from "react-router-dom";
import './profile-picture.css';

export default function ProfilePicture({ isLinked, size, isUpscalingWhileHovering, user }) {
  
  const upscaleModifier = isUpscalingWhileHovering ? ' profile-picture-container--upscale' : '';

  if (isLinked) {
    return(
      <Link to={'/' + user.username}>
        <div className={"profile-picture-container profile-picture-container--" + size + upscaleModifier}>
          <img
            src={user.profilePicture}
            alt={'Photo de profil de ' + user.name}
            className="profile-picture"
          ></img>
        </div>
      </Link>
    )
  } else {
    return(
      <div className={"profile-picture-container profile-picture-container--" + size + upscaleModifier}>
        <img
          src={user.profilePicture}
          alt={'Photo de profil de ' + user.name}
          className="profile-picture"
        ></img>
      </div>
    )
  }
}