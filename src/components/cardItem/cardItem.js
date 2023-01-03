function CardItem(props) {
  return (  
    <div className="post">
        <div>
          <img src={props.path} className="post-img animate" alt="Post Img" />
        </div>
        <div className="post__inner">
          <p className="post-title">{props.title}</p>
          <p className="post-price">Narx: {props.price * props.number} so'm</p>
          <div className="post-number">
            <button onClick={props.decr} className="post-btn"><i className="fa-solid fa-minus"></i></button>
            <p className="post-number-key">{props.number} porsa</p>
            <button onClick={props.incr} className="post-btn"><i className="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>
  );
}

export default CardItem;