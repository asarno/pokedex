import React from 'react';
import PokemonDetails from './PokemonDetails';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {
    List,
    Container,
} from "./styledComponents";
import Loading from './Loading';

const GET_POKEMON = gql`
  query getPokemon($id: String!) {
    pokemon(id: $id) {
        id
        number
        evolutions {
            id
            name
            image
            number
        }     
    }
  }`;

const Pokemon = (props: any) => {

    const { data, loading } = useQuery(GET_POKEMON, {
        variables: { id: props.match.params.id },
    });

    if (loading) {
        return <Loading tyle="pokemon" />
    }

    const { evolutions, id, number } = data.pokemon;

    let evolutionPhases: any[] = evolutions || [];
    evolutionPhases.push({id, number});

    const sortedOrder = evolutionPhases.sort((a:any, b: any) => {
        const number1 = parseInt(a.number);
        const number2 = parseInt(b.number);
        return number1 - number2;
    })

    return (
        <Container>
            <List>
                {sortedOrder.map(pokemon => <PokemonDetails key={pokemon.id} id={pokemon.id} />)}
            </List>
        </Container>
    );
}

export default Pokemon;
