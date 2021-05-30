import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { Endpoints } from '../config';

describe('getUrlWithParamsConfig', () => {
  test("Должна принимать 2 аргумента 'getPokemon' и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query", () => {
    const url = getUrlWithParamsConfig(Endpoints.GetPokemons, {});

    expect(url).toEqual({
        method: 'GET',
        uri: {
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {}
        },
        body: {}
    })
  });

    test("Должна принимать 2 аргумента 'getPokemon' и пустой объект, на выходе получить объект с полями pathname, protocol, host и query c полем name равным Pikachu", () => {
        const url = getUrlWithParamsConfig(Endpoints.GetPokemons, { name: 'Pikachu'});

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: { name: 'Pikachu' }
            },
            body: {}
        })
    });

    test("Должна принимать 2 аргумента 'getPokemon' и { id: 25 }, на выходе получить объект с полями pathname, protocol, host и пустым query", () => {
      const url = getUrlWithParamsConfig(Endpoints.GetPokemon, { id: 25 });

      expect(url).toEqual({
          method: 'GET',
          uri: {
              protocol: 'http',
              host: 'zar.hosthot.ru',
              pathname: '/api/v1/pokemon/25',
              query: {}
          },
          body: {}
      });
    });
});