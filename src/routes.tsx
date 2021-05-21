import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Pokedex from "./pages/Pokedex";

interface IGeneralMenuItem {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenuItem[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

interface IAccMenu {
  [key: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenuItem) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
