import React from "react";
import Items from "../items.json";
import "./ads.css";

function Ads() {
  return (
    <div className="ads">
      <div className="container">
        <div className="ads__inner">
          {Items.map((post) => {
            return (
              <div key={Date.now} className="post">
                <img className="post-img animate" src={post.path} alt="Post Img" />
                <div className="post__inner">
                  <p className="post-title">{post.title}</p>
                  <p className="post-price">Narx: {post.price} so'm</p>
                  <p className="post-delivery">Yetkazib berish: 15 000 so’m</p>
                  <button className="post-add">Savatga qo’shish</button>
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
