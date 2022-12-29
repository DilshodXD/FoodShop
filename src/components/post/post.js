import "./post.css";
import Item from "../item/item";


const Ads = ({ items, onDelete, incr, decr }) => {
  return (
    <div className="posts">
      <div className="container">
        <div className="posts__inner">
          {items.map((post) =>
            <Item key={post.id} {...post} onDelete={() => onDelete(post.id)} incr={() => incr(post.id)} decr={() => decr(post.id)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Ads;