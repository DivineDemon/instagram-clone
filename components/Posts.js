import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "mushood_7",
    userImg:
      "https://lh3.googleusercontent.com/ogw/ADea4I51tAioLLXaORYgQAYasUYcPAt2i1OJcluPIn-SwdI=s32-c-mo",
    img: "https://i.imgur.com/c6dqdeQ.png",
    caption: "Death!",
  },
  {
    id: "2",
    username: "mushood_7",
    userImg:
      "https://lh3.googleusercontent.com/ogw/ADea4I51tAioLLXaORYgQAYasUYcPAt2i1OJcluPIn-SwdI=s32-c-mo",
    img: "https://i.imgur.com/e5FYFXN.png",
    caption: "The Emperor!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
