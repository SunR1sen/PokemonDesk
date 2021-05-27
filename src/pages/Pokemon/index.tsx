import React, { useEffect } from 'react';
import useData from '../../hook/getData';
import { Endpoints } from '../../config';
import {PokemonRequest} from "../../interfaces/pokemons";

export type PokemonProps = {
  id: number | string;
};

type DataType = {
  data?: PokemonRequest | null;
  isLoading: boolean;
  isError: boolean;
}

const Pokemon = ({ id }: PokemonProps) => {
  const { data, isLoading, isError }: DataType = useData(Endpoints.GetPokemonById, {}, [], { id });

  if (isError) {
    return <div>!!!SOMETHING GONE WRONG!!!</div>;
  }


  return (
    <div>
      This is pokemon id equals to {id} name: {data?.name}
    </div>
  );
};

export default Pokemon;
