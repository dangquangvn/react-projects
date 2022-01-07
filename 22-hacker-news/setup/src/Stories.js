import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { news, isLoading } = useGlobalContext();
  console.log("🚀TCL: ~ file: Stories.js ~ line 7 ~ Stories ~ news", news);
  if (isLoading) {
    return (
      <div className='spinner-container'>
        <div className='loading'></div>
      </div>
    );
  }
  return (
    <section className='stories'>
      {news &&
        news.map(
          ({
            title,
            points,
            author,
            num_comments: comments,
            objectID: id,
            url,
          }) => (
            <article className='story' key={id}>
              <h4 className='title'>{title || "N/A"}</h4>
              <p className='info'>
                {points} points by {author} | {comments} comments
              </p>
              <div>
                <a className='read-link' target='blank' href={url}>
                  Read more
                </a>
                <button className='remove-btn'>Remove</button>
              </div>
            </article>
          )
        )}
    </section>
  );
};

export default Stories;
