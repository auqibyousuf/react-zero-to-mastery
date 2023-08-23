import React from "react";

const ImageComponent = (altText, imgUrl, extraClasses) => {
  return <img className={extraClasses} alt={altText} src={imgUrl} />;
};

export default ImageComponent;
