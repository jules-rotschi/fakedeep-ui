import './home.css'
import banner from '/src/assets/claire-home-picture.jpg';

function Comment({ author, age, content }) {
  return(
    <div className="comment">
      <p className="comment__content headline headline-small">{'“' + content + '”'}</p>
      <div className="comment-author body body-medium">{author + ', ' + age + ' ans'}</div>
    </div>
  )
}

export default function Home() {
  const comments = [
    {
      author: 'Karine',
      age: 27,
      content: 'Claire sait parfaitement écouter, cette expérience était exceptionnelle.'
    },
    {
      author: 'Loreleï',
      age: 41,
      content: 'Jamais je n’ai eu à ce point le sentiment d’être comprise, merci !'
    },
    {
      author: 'Houria',
      age: 68,
      content: 'Je crois que ma séance avec Claire m’a sauvée.'
    },
  ]

  return(
    <>
      <div className="banner">
        <img src={banner} alt="Photo de Claire" />
      </div>
      <article className="comment-card">
        <h1 className="comment-card__heading headline headline-medium">Dévoilez-vous à moi...</h1>
        <div className="comment-card__comments">
          {comments.map((comment, index) =>
            <Comment author={comment.author} age={comment.age} content={comment.content} key={index} />
          )}
        </div>
      </article>
    </>
  )
}