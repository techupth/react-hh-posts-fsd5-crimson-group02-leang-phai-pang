// Import necessary modules from React
import React, { useState, useEffect } from "react";
// Import the posts array from the JSON file
import posts from "../../posts-data.json";

// Functional component to display a list of posts with like and dislike buttons
function Posts() {
  // Initialize state for likes using the useState hook
  // The likes state is an array, where each element corresponds to the likes of a post
  const [likes, setLikes] = useState(() => {
    // Check if there are stored likes in localStorage
    const storedLikes = localStorage.getItem("postLikes");
    if (storedLikes) {
      // If likes are found, parse and use them as the initial state
      return JSON.parse(storedLikes);
    } else {
      // Otherwise, use the default likes from the posts array as the initial state
      return posts.map((post) => post.likes);
    }
  });

  // useEffect hook to save likes to localStorage whenever the likes state changes
  useEffect(() => {
    localStorage.setItem("postLikes", JSON.stringify(likes));
  }, [likes]);

  // Handler function for the Like button
  const handleLike = (index) => {
    setLikes((prevLikes) => {
      // Create a new array with the same values as prevLikes
      const newLikes = [...prevLikes];
      // Increase the likes count for the specified post
      newLikes[index] += 1;
      // Return the new array to update the state
      return newLikes;
    });
  };

  // Handler function for the Dislike button
  const handleDislike = (index) => {
    setLikes((prevLikes) => {
      // Create a new array with the same values as prevLikes
      const newLikes = [...prevLikes];
      // If the likes count for the specified post is greater than 0, decrease it
      if (newLikes[index] > 0) {
        newLikes[index] -= 1;
      }
      // Return the new array to update the state
      return newLikes;
    });
  };

  // Render the component
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post, index) => (
          // For each post, render a post item with its title, likes count, content, and like/dislike buttons
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
              <button className="like-button" onClick={() => handleLike(index)}>
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

// Export the component as the default export
export default Posts;
