import React from 'react';
import { navigate } from 'hookrouter';
import s from './Home.module.scss';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading, { HeadingTypes } from '../../components/Heading';
import { LinkEnum } from '../../routes';
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading className={s.title} type={HeadingTypes.h1}>
            <b>Find</b> all your favorite <b>Pokemons</b>
          </Heading>
          <Heading type={HeadingTypes.h3} className={s.subtitle}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <Parallax />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
