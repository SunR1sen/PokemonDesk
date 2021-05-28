import React from 'react';
import cn from 'classnames';
import useData from '../../hook/getData';
import { Endpoints } from '../../config';
import { PokemonRequest } from '../../interfaces/pokemons';

import s from './Pokemon.module.scss';
import commonS from '../../common/CommonPokemonStyles.module.scss';
import { selectLabelBg } from '../../utils/selectCommonStyles';
import { numberWithSpaces } from '../../utils/helper';

export type PokemonProps = {
  id: number | string;
};

type DataType = {
  data?: PokemonRequest | null;
  isLoading: boolean;
  isError: boolean;
};

const Pokemon = ({ id }: PokemonProps) => {
  const { data: pokemon, isLoading, isError }: DataType = useData(Endpoints.GetPokemonById, {}, [], { id });

  if (isError) {
    return <div>!!!SOMETHING GONE WRONG!!!</div>;
  }

  if (!isLoading) {
    return (
        <div className={s.root}>
          <div className={s.leftSide}>
            <img className={s.image} src={pokemon?.img} alt="pokemon_image" />
            <div className={s.labelsPosition}>
              <div className={commonS.labelWrap}>
                {pokemon?.types.map((type) => (
                    <span key={type} className={cn(commonS.label, selectLabelBg(type))}>
              {type}
            </span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.rightSide}>
            <div className={s.titleWrap}>
              <div className={s.pokemonName}>{pokemon?.name}</div>
              <div className={s.generation}>Generation 1</div>
              <div className={s.level}>578</div>
            </div>
            <div className={s.abilities}>
              <div>Abilities</div>
              <div>
                <span className={s.ability}>{pokemon?.abilities[0]}</span>
                &nbsp;-&nbsp;
                <span className={s.ability}>{pokemon?.abilities[1]}</span>
              </div>
            </div>
            <div className={s.characterInfo}>
              <div className={s.infoItem}>
                <div>Healthy Points</div>
                <div className={s.infoNumbers}>{numberWithSpaces(1000000)}</div>
                <div className={s.progressBar}>
                  <div className={cn(s.progress, s.healthBar)} />
                </div>
              </div>
              <div className={s.infoItem}>
                <div>Healthy Points</div>
                <div className={s.infoNumbers}>{numberWithSpaces(1000000)}</div>
                <div className={s.progressBar}>
                  <div className={cn(s.progress, s.expBar)} />
                </div>
              </div>
            </div>
            <div className={s.stats}>
              <div className={s.statItem}>
                <div className={s.statValue}>{pokemon?.stats.defense}</div>
                <div className={s.statType}>Defense</div>
              </div>

              <div className={s.statItem}>
                <div className={s.statValue}>{pokemon?.stats.attack}</div>
                <div className={s.statType}>Attack</div>
              </div>

              <div className={s.statItem}>
                <div className={s.statValue}>{pokemon?.stats['special-attack']}</div>
                <div className={s.statType}>Sp Attack</div>
              </div>

              <div className={s.statItem}>
                <div className={s.statValue}>{pokemon?.stats['special-defense']}</div>
                <div className={s.statType}>Sp Defense</div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  return null;
};

export default Pokemon;
