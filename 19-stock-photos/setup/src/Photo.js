import React from "react";

const Photo = ({
  user: {
    name,
    profile_image: { small: avatar },
  },
  urls: { regular: image },
  likes,
}) => {
  return (
    <article className='photo'>
      <img src={image} alt={name} />
      <div className='photo-info'>
        <div className=''>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <img src={avatar} alt={name} className='user-img' />
      </div>
    </article>
  );
};

export default Photo;
