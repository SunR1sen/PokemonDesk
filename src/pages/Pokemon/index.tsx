import React from 'react';

export type PokemonProps = {
  id: number | string;
};

const Pokemon = ({ id }: PokemonProps) => {
  return <div>This is pokemon id equals to {id}</div>;
};

export default Pokemon;