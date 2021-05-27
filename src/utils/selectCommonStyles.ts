import { PokemonElements } from "../interfaces/pokemonElements";
import commonStyles from '../common/CommonPokemonStyles.module.scss';

export const selectLabelBg = (type: string) => {
    switch (type) {
        case PokemonElements.grass:
        case PokemonElements.bug:
            return commonStyles.grassLabel;

        case PokemonElements.fire:
            return commonStyles.fireLabel;

        case PokemonElements.water:
        case PokemonElements.flying:
            return commonStyles.waterLabel;

        case PokemonElements.poison:
            return commonStyles.poisonLabel;
    }
}

export const selectImageBg = (type: string) => {
    switch (type) {
        case PokemonElements.grass:
        case PokemonElements.poison:
        case PokemonElements.bug:
            return commonStyles.grassBg;

        case PokemonElements.fire:
            return commonStyles.fireBg;

        case PokemonElements.water:
        case PokemonElements.flying:
            return commonStyles.waterBg;
    }
};