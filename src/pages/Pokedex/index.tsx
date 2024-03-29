import React, { useState } from 'react';
import { A } from 'hookrouter';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading, { HeadingTypes } from '../../components/Heading';
import { Endpoints } from '../../config';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { PokemonRequest } from '../../interfaces/pokemons';
import { LinkEnum } from '../../routes';

export type DataType = {
  total: number;
  limit: number;
  offset: number;
  pokemons: Array<PokemonRequest>;
};

type UseDataTypes = {
  data?: DataType | null;
  isLoading: boolean;
  isError: boolean;
};

const Pokedex: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({
    limit: 9,
  });
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError }: UseDataTypes = useData(Endpoints.GetPokemons, query, [debouncedValue]);

  if (isError) {
    return <div>!!!SOMETHING GONE WRONG!!!</div>;
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  // TODO: сделать нормальный лоадер
  return (
    <div className={s.root}>
      <Heading className={s.title} type={HeadingTypes.h2}>
        {!isLoading && data?.total} <b>Pokemons</b> to you for choosing your favorite!
      </Heading>
      <input
        placeholder="Начните вводить имя покемона..."
        className={s.searchInput}
        value={searchValue}
        onChange={handleSearchInput}
      />

      <Layout className={s.cardsWrap}>
        {data?.pokemons.map((pokemon) => (
          <A className={s.link} href={`${LinkEnum.POKEDEX}/${pokemon.id}`}>
            <PokemonCard {...pokemon} key={pokemon.id} />
          </A>
        ))}
      </Layout>
      <Footer className={s.footer} />
    </div>
  );
};

export default Pokedex;
