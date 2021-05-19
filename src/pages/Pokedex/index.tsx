import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import pokemonsMock from './pokemonsMock';
import Footer from '../../components/Footer';

const Pokedex = () => {
  return (
    <>
      <Header />
      <Layout className={s.cardsWrap}>
        {pokemonsMock.map((poke) => (
          <PokemonCard
            name={poke.name}
            attack={poke.stats.attack}
            defense={poke.stats.defense}
            types={poke.types}
            imageSrc={poke.img}
          />
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export default Pokedex;
