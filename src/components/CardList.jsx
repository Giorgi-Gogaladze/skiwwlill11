import React from "react";
import EachCard from "./Card";
import image1984 from "../assets/1984.jpeg";
import imageFrankenstein from "../assets/frankenstein.jpeg";
import imageHeadlessHorseman from "../assets/hedless.jpeg";
import imageMusketeers from "../assets/threeMusketeers.jpeg";

const data = [
  {
    id: 1,
    bookName: "1984",
    description:
      '"1984" is a dystopian novel depicting a totalitarian society under constant surveillance and control.',
    image: image1984,
    character: "Winston Smith"
  },
  {
    id: 2,
    bookName: "Frankenstein",
    description:
      '"Frankenstein" is a novel about a scientist who creates a monstrous creature and the consequences of his experiment.',
    image: imageFrankenstein,
    character: "Dr. Frankenstein"
  },
  {
    id: 3,
    bookName: "The Headless Horseman",
    description:
      '"The Headless Horseman" is a ghostly figure from Washington Irving\'s tale, haunting Sleepy Hollow and known for chasing Ichabod Crane.',
    image: imageHeadlessHorseman,
    character: "Headless Horseman"
  },
  {
    id: 4,
    bookName: "The Three Musketeers",
    description:
      '"The Three Musketeers" is a classic novel by Alexandre Dumas, featuring adventure, honor, and intrigue among three loyal and daring French musketeers in the 17th century.',
    image: imageMusketeers,
    character: "D'Artagnan"
  }
];

const CardList = () => {
  function action(bookName, character) {
    console.log(`The book is "${bookName}" and the main character is ${character}`);
  }

  return (
    <div className="card-list">
      {data.map((card) => (
        <EachCard key={card.id} bookName={card.bookName} image={card.image}
        description={card.description} character={card.character} action={action}
        />
      ))}
    </div>
  );
};

export default CardList;
