import React from 'react';

export const GifGridItem = ( {id, title, url} ) => {

    
  return (
  <div className="card animate__animated animate__fadeIn">
      <img src={url} id={id} alt={title} />
        <p>{title}</p>
  </div>
  );
};
