import React from 'react';
import s from './Home.module.scss';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemons</b>
          </h1>
            <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
            <Button onClick={() => console.log("Click Button!")}>See pokemons</Button>
        </div>
        <div>We will seen parallax here soon</div>
      </Layout>
    </div>
  );
};

export default HomePage;