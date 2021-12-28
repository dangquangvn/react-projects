import React from "react";

const Follower = ({ login: name, avatar_url: image, html_url: link }) => {
  return (
    <article className='card'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <a href={link} className='btn'>
        view profile
      </a>
    </article>
  );
};

export default Follower;
