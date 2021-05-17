import React from 'react';
import s from './Home.module.scss';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading, { HeadingTypes } from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type={HeadingTypes.h1}>
            <b>Find</b> all your favorite <b>Pokemons</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => console.log('Click Button!')}>See pokemons</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
