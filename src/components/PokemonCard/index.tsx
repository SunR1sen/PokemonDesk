import React from 'react';
import cn from 'classnames';
import { A } from 'hookrouter';
import Heading, { HeadingTypes } from '../Heading';

import s from './PokemonCard.module.scss';
import { LinkEnum } from '../../routes';
import { PokemonRequest } from '../../interfaces/pokemons';

enum PokemonElements {
  grass = 'grass',
  poison = 'poison',
  fire = 'fire',
  flying = 'flying',
  water = 'water',
  bug = 'bug',
}

const PokemonCard: React.FC<PokemonRequest> = ({ stats, name, types, img: imageSrc, id }) => {
  const selectImageBg = (type: string) => {
    switch (type) {
      case PokemonElements.grass:
      case PokemonElements.poison:
      case PokemonElements.bug:
        return s.grassBg;

      case PokemonElements.fire:
        return s.fireBg;

      case PokemonElements.water:
      case PokemonElements.flying:
        return s.waterBg;
    }
  };

  const selectLabelBg = (type: string) => {
    switch (type) {
      case PokemonElements.grass:
      case PokemonElements.bug:
        return s.grass;

      case PokemonElements.fire:
        return s.fire;

      case PokemonElements.water:
      case PokemonElements.flying:
        return s.water;

      case PokemonElements.poison:
        return s.poison;
    }
  };

  return (
    <A href={`${LinkEnum.POKEDEX}/${id}`}>
      <div className={s.root}>
        <div className={s.infoWrap}>
          <Heading type={HeadingTypes.Paragraph} className={s.titleName}>
            {name}
          </Heading>
          <div className={s.statWrap}>
            <div className={s.statItem}>
              <div className={s.statValue}>{stats.attack}</div>
              Attack
            </div>
            <div className={s.statItem}>
              <div className={s.statValue}>{stats.defense}</div>
              Defense
            </div>
          </div>
          <div className={s.labelWrap}>
            {types.map((type) => (
              <span key={type} className={cn(s.label, selectLabelBg(type))}>
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className={cn(s.pictureWrap, selectImageBg(types[0]))}>
          <img src={imageSrc} alt={name} />
        </div>
      </div>
    </A>
  );
};

export default PokemonCard;
