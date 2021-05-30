import React from 'react';
import cn from 'classnames';
import Heading, { HeadingTypes } from '../Heading';

import s from './PokemonCard.module.scss';
import commonS from '../../common/CommonPokemonStyles.module.scss';
import { PokemonRequest } from '../../interfaces/pokemons';
import { selectImageBg, selectLabelBg } from '../../utils/selectCommonStyles';

const PokemonCard: React.FC<PokemonRequest> = ({ stats, name, types, img: imageSrc}) => {
  return (
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
        <div className={commonS.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(commonS.label, selectLabelBg(type))}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, selectImageBg(types[0]))}>
        <img src={imageSrc} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
