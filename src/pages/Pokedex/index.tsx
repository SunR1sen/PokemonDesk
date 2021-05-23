import React from 'react';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import pokemonsMock from './pokemonsMock';
import Footer from '../../components/Footer';

const Pokedex: React.FC = () => {
  return (
    <>
      <Layout className={s.cardsWrap}>
        {pokemonsMock.map((poke) => (
          <PokemonCard
            name={poke.name}
            attack={Number(poke.stats.attack)}
            defense={poke.stats.defense}
            types={poke.types}
            imageSrc={poke.img}
            key={poke.id}
          />
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export default Pokedex;
