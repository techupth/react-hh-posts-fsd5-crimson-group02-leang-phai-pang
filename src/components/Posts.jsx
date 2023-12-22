import { useState } from "react";
import postData from "../data/Post";

function Posts() {
  const [listPost, setListPost] = useState([...postData]);

  const handleAddLike = (e, index) => {
    e.preventDefault();
    const newListPost = [...listPost];
    newListPost[index].likes += 1;
    setListPost(newListPost);
  };

  const handleDisLike = (e, index) => {
    e.preventDefault();
    const newListPost = [...listPost];
    newListPost[index].likes -= 1;
    if (newListPost[index].likes < 0) {
      newListPost[index].likes = 0;
    }
    setListPost(newListPost);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      {listPost.map((item, index) => (
        <div class="post-list" key={index}>
          <div class="post-item">
            <div class="post-header">
              <h2>
                {item.title} #{item.id}
              </h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{item.likes}</span>
              </div>
            </div>
            <p class="post-content">{item.content}</p>
            <div class="post-actions">
              <button
                class="like-button"
                onClick={(e) => handleAddLike(e, index)}
              >
                Like
              </button>
              <button
                class="dislike-button"
                onClick={(e) => handleDisLike(e, index)}
              >
                Dislike
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
