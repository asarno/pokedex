import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

// typescript types
import { PokemonProps } from "../utils/types";

// components
import PokemonList from "./PokemonList";
import Pokemon from './Pokemon';
import Loading from './Loading';
import { 
  Container, 
  Header, 
  Input, 
  HeaderImage, 
  Delete
} from "./styledComponents";


// graphql query
const GET_POKEMONS = gql`
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
`;

const App = () => {
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });
  const [value, setValue] = useState("")

  if (loading) {
    return <Loading type="main" />
  }

  const filteredPokemons: PokemonProps[] = data.pokemons.filter((pokemon: PokemonProps) => pokemon.name.toLowerCase().includes(value.toLowerCase()));

  return (
    <Container> 
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header>
          <Link to="/">
            <HeaderImage src={require("../res/pokedex.png")} />
          </Link>
          <div 
            style={{
              position: "absolute",
              right: "5%",
              top: "15%",
            }}
          >
            <Input placeholder="Search..." onChange={(e: any) => setValue(e.target.value)} value={value} />
            {value !== "" && <Delete onClick={() => setValue("")} className="fas fa-times" />}
          </div>
        </Header>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <PokemonList pokemons={filteredPokemons} />}
          />

          <Route
            path="/:id"
            exact
            component={Pokemon}
          />

          <Route render={() => <div>Not Found</div>} />

        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
