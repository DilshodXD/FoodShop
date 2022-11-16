import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Items from "../items.json";
import "./ads.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Ads = (props) => {


  // function search(){
  //   const item = Items[0].title.toLocaleLowerCase();
  //   const itemDona = item.split("");

  //   const name = "aralash".toLocaleLowerCase()
  //   const nameDona = name.split("");

  //   for (let e = 0; e < item.length; e++) {
  //     if (nameDona[e] == itemDona[e]) {
  //       console.log(item);
  //     }      
  //   }

  // }

  // search()

  return (
    <div className="ads">
      <div className="container">
        <div className="ads__inner">
          <p>{props.name}</p>

          {Items.map((post) => {
            return (
              <div key={Date.now} className="post">
                <div>
                  <LazyLoadImage effect="blur" src={post.path} className="post-img animate" alt="Post Img" />
                </div>
                <div className="post__inner">
                  <p className="post-title">{post.title}</p>
                  <p className="post-price">Narx: {post.price} so'm</p>
                  <p className="post-delivery">Yetkazib berish: 15 000 so’m</p>
                  <button className="post-add">Buyurtma berish</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ads;







