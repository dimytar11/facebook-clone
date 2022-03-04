import React from "react";
export const IFrame = (props) => {
  return (
      <iframe
        width="100%"
        height="250"
        src={props.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>  
  );
};
