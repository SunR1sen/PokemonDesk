import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import pokemonsMock from './pokemonsMock';
import Footer from '../../components/Footer';
import Heading, { HeadingTypes } from '../../components/Heading';

const Pokedex: React.FC = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);

  return (
    <div className={s.root}>
      <Heading className={s.title} type={HeadingTypes.h2}>
        {totalPokemons} <b>Pokemons</b> to you for choosing your favorite!
      </Heading>
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
      <Footer className={s.footer} />
    </div>
  );
};

export default Pokedex;
