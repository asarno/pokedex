import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CARD_COLORS } from './types';
import ReactCardFlip from 'react-card-flip';
import Loading from './Loading';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {
    Name,
    Image,
    Stats,
    Line,
    Types,
    Type,
    Title,
    Button,
} from "./styledComponents";

const GET_POKEMON = gql`
  query getPokemon($id: String!) {
    pokemon(id: $id) {
        id
        number
        name
        maxCP
        maxHP
        image
        types
        resistant
        weaknesses
    }
  }`;

const Card: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px; 
    border: 3px solid;
    border-color: ${(props: any) => `${props.color}`};
    border-radius: 8px;
    text-decoration: none;
    width: 300px;
    height: 480px;
    margin: 20px;
    background-color: #fff;
    border-radius: 8px;
    z-index: 40;
    overflow: hidden;
`;

const PokemonDetails = (props: any) => {

    const { data, loading } = useQuery(GET_POKEMON, {
        variables: { id: props.id },
    });

    const [isFlipped, setIsFlipped] = useState(false);


    if (loading) {
        return <Loading type="pokemon" />
    }

    const {
        image,
        maxCP,
        maxHP,
        name,
        number,
        types,
        weaknesses,
        resistant,
    } = data.pokemon;

    const color = CARD_COLORS[types[0]];

    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <Name style={{ textAlign: "center", fontSize: 25 }} color={color}>{"# " + number + " " + name}</Name>

            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Card
                    key="front"
                    color={color}
                >
                    <Image style={{ height: 150 }} src={image} />

                    <Line />

                    <Title color={color}>Health</Title>

                    <Stats>
                        <span style={{ textAlign: "left", width: "100%" }}>Max HP: {maxHP}</span>
                        <span style={{ textAlign: "left", width: "100%" }}>Max CP: {maxCP}</span>
                    </Stats>

                    <Line />

                    <Title color={color}>Types</Title>

                    <Types>
                        <Type color={color}>{types[0]}</Type>
                        {types[1] && <Type color={CARD_COLORS[types[1]]} >{types[1]}</Type>}
                    </Types>

                    <Button color={color} onClick={() => setIsFlipped(true)}>MORE STATS</Button>
                </Card>

                <Card
                    key="back"
                    color={color}
                >
                    <Image style={{ height: 75 }} src={image} />

                    <Line />

                    <Title color={color}>Resistant</Title>

                    <Types>
                        {resistant.map((r: string, key: number) => <Type key={key} color={CARD_COLORS[r]}>{r}</Type>)}
                    </Types>

                    <Line />

                    <Title color={color}>Weaknesses</Title>

                    <Types>
                        {weaknesses.map((weakness: string, key: number) => <Type key={key} color={CARD_COLORS[weakness]}>{weakness}</Type>)}
                    </Types>

                    <Button color={color} onClick={() => setIsFlipped(false)}>GO BACK</Button>
                </Card>
            </ReactCardFlip>
        </div>

    );
}

export default PokemonDetails;
