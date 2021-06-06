import React, { useEffect, useState } from 'react';
import { A } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';
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
import { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemons';

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
  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
  const dispatch = useDispatch();

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getTypesAction());
  }, [dispatch]);

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
      <div>Типы покемонов:</div>
      {
        isTypesLoading ? <div>Грузится</div> : <select>{types?.map(item => <option>{item}</option>)}</select>
      }

      <Layout className={s.cardsWrap}>
        {data?.pokemons.map((pokemon) => (
          <A key={pokemon.id} className={s.link} href={`${LinkEnum.POKEDEX}/${pokemon.id}`}>
            <PokemonCard {...pokemon} />
          </A>
        ))}
      </Layout>
      <Footer className={s.footer} />
    </div>
  );
};

export default Pokedex;
