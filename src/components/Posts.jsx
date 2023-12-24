import React, { useState } from "react";
import posts from "../datas/posts-data.json";

function Posts() {
  // Initialize likes state with default values from the posts array
  const [likes, setLikes] = useState(posts.map((post) => post.likes));

  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      console.log(index)
      newLikes[index] += 1;
      return newLikes;
    });
  };

  const handleDislike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];

      if (newLikes[index] > 0) {
        newLikes[index] -= 1;
      }
      return newLikes;
    });
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list"> 
        {posts.map((post, index) => (
          <div className="post-item" key={index}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{likes[index]}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="like-button" onClick={() => 
                handleLike(index)}>
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
