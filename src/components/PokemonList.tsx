import React from 'react';

import { CARD_COLORS, PokemonProps } from './types';

import {
    Container,
    List,
    PokemonCard,
    Image,
    Stats,
    Line,
    Types,
    Type,
    Title,
} from "./styledComponents";

const PokemonList = (props: any) => {
    const pokemons: PokemonProps[] = props.pokemons;

    return (
        <Container>
            <List>
                {pokemons.map((pokemon: PokemonProps) => {

                    const primaryType: string = pokemon.types[0];
                    const secondaryType: string = pokemon.types[1];

                    const color = CARD_COLORS[primaryType];

                    return (
                        <PokemonCard
                            key={pokemon.name}
                            color={color}
                            to={pokemon.id}
                        >
                            <Image src={pokemon.image} />

                            <Line />

                            <Title color={color}>Health</Title>

                            <Stats>
                                <span style={{ textAlign: "left", width: "100%" }}>Max HP: {pokemon.maxHP}</span>
                                <span style={{ textAlign: "left", width: "100%" }}>Max CP: {pokemon.maxCP}</span>
                            </Stats>

                            <Line />

                            <Title color={color}>Types</Title>

                            <Types>
                                <Type color={color}>{primaryType}</Type>
                                {secondaryType && <Type color={CARD_COLORS[secondaryType]}>{secondaryType}</Type>}
                            </Types>
                        </PokemonCard>
                    );

                })}
            </List>
        </Container>
    );

}

export default PokemonList;