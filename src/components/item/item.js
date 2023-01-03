import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './item.css'

const Item = (props) => {
    return (
        <div className="post">
            <div>
                <LazyLoadImage effect="blur" src={props.path} className="post-img animate" alt="Post Img" />
            </div>
            <div className="post__inner">
                <p className="post-title">{props.title}</p>
                <p className="post-price">Narx: {props.price} so'm</p>
                <div className="post-number">
                    <button onClick={props.decr} className="post-btn"><i className="fa-solid fa-minus"></i></button>
                    <p className="post-number-key">{props.number} porsa</p>
                    <button onClick={props.incr} className="post-btn"><i className="fa-solid fa-plus"></i></button>
                </div>
                <button onClick={props.addCard} className={!props.card ? "post-add" : "post-added"}>{!props.card ? "buyurtma berish" : "buyurtma berildi"}</button>
            </div>
        </div>
    );
}

export default Item;