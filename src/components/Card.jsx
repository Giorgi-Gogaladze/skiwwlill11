import React from "react";

const Card = ({ bookName, description, image, character, action }) => {
  return (
    <div className="card">
      <h1 className="card-title">{bookName}</h1>
      <div className="img-box">
        <img src={image} alt={bookName} />
        <p>{description}</p>
      </div>
      <button onClick={() => action(bookName, character)} className="btn">
        Button
      </button>
    </div>
  );
};

export default Card;

