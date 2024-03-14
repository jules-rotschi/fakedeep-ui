import './home.css'

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
      author: 'Marc',
      age: 27,
      content: 'Une voyante qui sait écouter et lire les autres.'
    },
    {
      author: 'Fabienne',
      age: 41,
      content: 'Claire trouve toujours les mots justes.'
    },
    {
      author: 'Jacques',
      age: 68,
      content: 'Elle m’a sauvé la vie.'
    },
  ]

  return(
    <>
      <div className="banner"></div>
      <article className="comment-card">
        <h1 className="comment-card__heading headline headline-medium">Ils ont consulté Claire...</h1>
        <div className="comment-card__comments">
          {comments.map((comment, index) =>
            <Comment author={comment.author} age={comment.age} content={comment.content} key={index} />
          )}
        </div>
      </article>
    </>
  )
}