import CardItem from '../cardItem/cardItem'

function Card({items}) {
  return (
    <div className="posts">
      <div className="container">
        <div className="posts__inner">
          {items.map((post) =>
            <CardItem key={post.id} {...post} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Card;