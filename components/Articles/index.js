import React from "react";
import Card from "../Card";

function Articles({ posts }) {
  return (
    <div className="container">
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <Card post={post} key={post.id} />
        ))}
    </div>
  );
}

export default Articles;
