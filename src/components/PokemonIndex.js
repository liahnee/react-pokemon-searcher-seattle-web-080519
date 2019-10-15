import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    }
    this.fetchState();
  }

  fetchState = () => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(json => this.initialState(json))
  }

   initialState = (json) => {
     this.setState({ pokemons: json })
  }  

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm updateS={this.fetchState}/>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </div>
    )
  }
}

export default PokemonPage
