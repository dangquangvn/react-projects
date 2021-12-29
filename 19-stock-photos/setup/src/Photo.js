import React from "react";

//& old props
// {
//   urls: { full: image },
//   alt_description: desc,
//   likes,
//   user: {
//     first_name: firstName,
//     last_name: lastName,
//     profile_image: { large: avatar },
//   },
// }
const Photo = ({ image, desc, name, likes, avatar }) => {
  return (
    <article className='photo'>
      <img src={image} alt={desc} />
      <div className='photo-info'>
        <div className='user-text'>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <img src={avatar} alt={name} className='user-img' />
      </div>
    </article>
  );
};

export default Photo;
