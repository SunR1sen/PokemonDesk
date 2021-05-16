import React from 'react';
import s from './Home.module.scss';
import Header from "../../components/Header";

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
        </div>
    );
};

export default HomePage;