import React from 'react';
import cn from "classnames";
import Heading, { HeadingTypes } from '../Heading';

import s from './PokemonCard.module.scss';

interface PokemonProp {
  name: string;
  attack: number;
  defense: number;
  types: Array<string>;
  imageSrc: string;
}

enum PokemonElements {
  grass = "grass",
  poison = "poison",
  fire = "fire",
  flying = "flying",
  water = "water",
  bug = "bug"
}

const PokemonCard: React.FC<PokemonProp> = ({ attack, defense, name, types, imageSrc }) => {
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
        return s.waterBg
    }
  }

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type={HeadingTypes.Paragraph} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s.label, s[type as keyof typeof s])}>{type}</span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, selectImageBg(types[0]))}>
        <img
          src={imageSrc}
          alt={name}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
