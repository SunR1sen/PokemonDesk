import { Dispatch } from 'redux';
import req from '../utils/request';
import { Endpoints } from '../config';
import { ITypesRequest } from '../interfaces/pokemons';
import { IStateRequest } from '../interfaces';
import { IInitialState } from './index';
import {PokemonsListRequest} from "../pages/Pokedex";

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

export enum PokemonsListActionTypes {
  FETCH_POKEMONS_LIST = 'FETCH_POKEMONS_LIST',
  FETCH_POKEMONS_LIST_RESOLVE = 'FETCH_POKEMONS_LIST_RESOLVE',
  FETCH_POKEMONS_LIST_REJECT = 'FETCH_POKEMONS_LIST_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

interface PokemonsListAction {
  type: PokemonsListActionTypes;
  payload?: PokemonsListRequest;
}

type ActionTypes = TypesAction | PokemonsListAction;

export interface IPokemonInitialState {
  pokemons: IStateRequest<PokemonsListRequest>;
  types: IStateRequest<string[]>;
}

const initialState: IPokemonInitialState = {
  pokemons: {
    isLoading: false,
    data: null,
    error: null,
  },
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };

    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };

    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };

    case PokemonsListActionTypes.FETCH_POKEMONS_LIST:
      return {
        ...state,
        pokemons: {
          isLoading: true,
          data: null,
          error: null,
        },
      };

    case PokemonsListActionTypes.FETCH_POKEMONS_LIST_RESOLVE:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };

    case PokemonsListActionTypes.FETCH_POKEMONS_LIST_REJECT:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>(Endpoints.GetTypes);
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export const getPokemonsListAction = (query?: any) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsListActionTypes.FETCH_POKEMONS_LIST });
    try {
      const response = await req<PokemonsListRequest>(Endpoints.GetPokemons, query);
      dispatch({ type: PokemonsListActionTypes.FETCH_POKEMONS_LIST_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonsListActionTypes.FETCH_POKEMONS_LIST_REJECT, payload: error });
    }
  };
};

export const getPokemonsList = (state: IInitialState) => state.pokemons.pokemons.data;
export const getPokemonsListLoading = (state: IInitialState) => state.pokemons.pokemons.isLoading;
export const getPokemonsListError = (state: IInitialState) => state.pokemons.pokemons.error;


export default pokemons;
