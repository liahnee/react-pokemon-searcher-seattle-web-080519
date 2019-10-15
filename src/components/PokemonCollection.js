import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'



class PokemonCollection extends React.Component {


  makeCards = () => {
    const pokemons = this.props.pokemons
    return pokemons.map(pokemon => {
      return <PokemonCard key={pokemon.id} name={pokemon.name} sprites={pokemon.sprites} stats={pokemon.stats}/>
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.makeCards()}
      </Card.Group>

    )
  }
}

export default PokemonCollection
