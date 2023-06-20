
function PostCard({ title, body }) {

  return (
    <div className="post-card">
        <h2>{title}</h2>
        <p>{body.length >= 20 ? body.slice(0, 20) : body}</p>
    </div>
  )
}

export default PostCard;