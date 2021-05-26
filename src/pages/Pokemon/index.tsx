import React, {useEffect} from 'react';
import useData from "../../hook/getData";
import {Endpoints} from "../../config";

export type PokemonProps = {
  id: number | string;
  name: string;
};

const Pokemon = ({ id, name }: PokemonProps) => {

  const { data, isLoading, isError } = useData(Endpoints.GetPokemon, { id: id })
  console.log(data);

  return <div>This is pokemon id equals to {id} name: {name}</div>;
};

export default Pokemon;