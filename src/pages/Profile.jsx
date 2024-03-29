import { useParams } from "react-router-dom"
import Page404 from "./Page404"
import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"
import ProfilePicture from "../components/ProfilePicture"
import './profile.css'
import { useState } from "react"

export default function Profile({ defaultUsers }) {

  const username = useParams().username

  const user = defaultUsers.filter((user) => user.username == username)[0]

  if (user == undefined) {
    return (
      <Page404 />
    )
  }

  const [currentCarouselPicture, setCurrentCarouselPicture] = useState(0);

  function previous() {
    if (currentCarouselPicture == 0) {
      setCurrentCarouselPicture(user.pictures.length - 1)
    } else {
      setCurrentCarouselPicture(currentCarouselPicture - 1)
    }
  }

  function next() {
    setCurrentCarouselPicture((currentCarouselPicture + 1) % (user.pictures.length))
  }
  
  return(
    <>
    <header className="account-header">
      <ProfilePicture isLinked={false} size={120} isUpscalingWhileHovering={false} user={user} />
      <h1 className="username title title-large">{user.name}</h1>
      <button className="btn-secondary">Envoyer un message</button>
    </header>
    <main className="account-content">
      <article className={"carousel picture" + currentCarouselPicture}>
        {user.pictures.map((pic, index) => <img src={pic} alt={'Photo de ' + user.name} key={index} />)}
        {
          user.pictures.length > 0 ?
          <>
          <button className="icon-button previous" onClick={previous}><ArrowLeft /></button>
          <button className="icon-button next" onClick={next}><ArrowRight /></button>
          </> :
          null
        }
      </article>
      <article className="more-about">
        <h2 className="about-title title title-small">Dites-m'en plus sur vous...</h2>
        <p className="about-text body body-medium">{user.about ? user.about : user.name + " n'a rien renseigné dans cette section."}</p>
      </article>
    </main>
      
    
    </>
  )
}