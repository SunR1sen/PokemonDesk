const config = {
  client: {
    server: {
      protocol: 'https',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/:id',
        },
      },
    },
  },
};

export enum Endpoints {
  GetPokemons = 'getPokemons',
  GetPokemon = 'getPokemon',
}

export default config;