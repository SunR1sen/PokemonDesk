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
    },
  },
};

export enum Endpoints {
  GetPokemons = "getPokemons"
}

export default config;