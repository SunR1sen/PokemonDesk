import { combineReducers } from 'redux';
import app from './app';
import pokemons, { IPokemonInitialState } from './pokemons';

export interface IInitialState {
  pokemons: IPokemonInitialState;
}

const createRootReducer = () => combineReducers({ app, pokemons });

export default createRootReducer;