import { useState } from "react";

const postLists = [
  {
    id: 1,
    title: "Paper Clips",
    content:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    likes: 3,
  },
  {
    id: 2,
    title: "Born to Kill",
    content:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    likes: 46,
  },
  {
    id: 3,
    title: "Ten Shrews, The (Kymmenen riivinrautaa)",
    content:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    likes: 50,
  },
  {
    id: 4,
    title: "Ciel est Ã  vous, Le (Woman Who Dared, The)",
    content: "Maecenas ut massa quis augue luctus tincidunt.",
    likes: 3,
  },
  {
    id: 5,
    title: "Tigger Movie, The",
    content: "Aenean sit amet justo.",
    likes: 66,
  },
  {
    id: 6,
    title: "Cat People",
    content:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    likes: 70,
  },
  {
    id: 7,
    title: "Brooklyn Castle",
    content:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    likes: 46,
  },
  {
    id: 8,
    title: "Snow Angels",
    content:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    likes: 1,
  },
  {
    id: 9,
    title: "Rose Tattoo, The",
    content: "Curabitur in libero ut massa volutpat convallis.",
    likes: 20,
  },
  {
    id: 10,
    title: "It's A Wonderful World",
    content:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    likes: 6,
  },
];

function Posts() {
  const [post, setPost] = useState(postLists);
  const likeClick = (listIndex) => {
    const newPost = [...post];
    newPost[listIndex].likes = newPost[listIndex].likes + 1;
    setPost(newPost);
  };
  const dislikeClick = (listIndex) => {
    const newPost = [...post];
    if (newPost[listIndex].likes > 0) {
      newPost[listIndex].likes = newPost[listIndex].likes - 1;
      setPost(newPost);
    }
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {post.map((post, index) => {
          return (
            <div key={index} class="post-item">
              <div class="post-header">
                <h2>{post.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{post.likes}</span>
                </div>
              </div>
              <p class="post-content">{post.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    likeClick(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    dislikeClick(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
