import React from "react";

export const Pokemons = ({ pokemons }) => {
  return (
    <article className="card">
      <img
        className="card__img"
        src={pokemons?.sprites.other["official-artwork"].front_default}
        alt="pokemons-sprite"
      />
      <h3 className="card__name">{pokemons?.name}</h3>
      <h3 className="card__type">Type: {pokemons?.types[0].type.name}</h3>
      <h3 className="card__height">Height: {pokemons?.height}</h3>
      <h3 className="card__weight">Weight: {pokemons?.weight}</h3>
    </article>
  );
};
