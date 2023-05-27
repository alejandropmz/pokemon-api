import React from "react";

export const NotFoundLoadingPokemon = ({ img, text }) => {
  return (
    <article
      className={text === "Loading pokemon..." ? "card loading__card" : "card"}
    >
      <img className="card__img" src={img} alt="pokemons-sprite" />
      <h3 className="card__name">{text}</h3>
    </article>
  );
};
