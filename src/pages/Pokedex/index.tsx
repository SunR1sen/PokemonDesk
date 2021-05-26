import React from 'react';
import PokemonCard, { IPokemon } from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading, { HeadingTypes } from '../../components/Heading';
import { Endpoints } from '../../config';
import useData from '../../hook/useData';

export type DataType = {
  total: number;
  limit: number;
  offset: number;
  pokemons: Array<IPokemon>;
};

type UseDataTypes = {
  data?: DataType | null;
  isLoading: boolean;
  isError: boolean;
};

const Pokedex: React.FC = () => {
  const { data, isLoading, isError }: UseDataTypes = useData(Endpoints.GetPokemons);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (isError) {
    return <div>!!!SOMETHING GONE WRONG!!!</div>;
  }

  return (
    <div className={s.root}>
      <Heading className={s.title} type={HeadingTypes.h2}>
        {data?.total} <b>Pokemons</b> to you for choosing your favorite!
      </Heading>
      <Layout className={s.cardsWrap}>
        {data?.pokemons.map((poke: IPokemon) => (
          <PokemonCard name={poke.name} stats={poke.stats} types={poke.types} img={poke.img} key={poke.id} />
        ))}
      </Layout>
      <Footer className={s.footer} />
    </div>
  );
};

export default Pokedex;
