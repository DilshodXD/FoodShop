import "./post.css";
import Item from "../item/item";


const Post = ({ items, onDelete, incr, decr, addCard }) => {
  return (
    <div className="posts">
      <div className="container">
        <div className="posts__inner">
          {items.map((post) =>
            <Item key={post.id} {...post} addCard={() => addCard(post.id)} onDelete={() => onDelete(post.id)} incr={() => incr(post.id)} decr={() => decr(post.id)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;