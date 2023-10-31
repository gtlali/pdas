import "bulma/css/bulma.css";
import React from "react";

export default function ProfileCard({
  title,
  socialMediahandle,
  myimage,
  description,
}) {
  //const title = props.title
  //const socialMediahandle = props.socialMediahandle
  // const { title, socialMediahandle } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={myimage} alt='pda logo' />
        </figure>
      </div>

      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-6'>ProfileCard ...</p>
          <p className='title is-4'>{title}</p>
          <p className='subtitle is-6'>{socialMediahandle}</p>
        </div>
        <div className='content'>{description}</div>
      </div>
    </div>
  );
}
