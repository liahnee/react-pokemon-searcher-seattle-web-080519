import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  

  handleClick = (e) => {
    const name = this.props.name
    const card = document.querySelectorAll(`.${name}`)

    console.log(card)
    if (card[0].style.display === 'none') {
      card[0].style.display = '';
      card[1].style.display = 'none'
    } else {
      card[0].style.display = 'none';
      card[1].style.display = '';
    }
  }

  findHp = () => {
    return this.props.stats.filter( stat => { stat['name'] === 'hp'} )
  }

  render() {
    const name = this.props.name;
    const sprites = this.props.sprites;
    return (
      <Card> 
        <div id='front' className={name} onClick={(e) => this.handleClick(e)}>
          <div className="image">
            <img src={sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp()}
            </span>
          </div>
        </div>
        <div id='back' className={name} onClick={this.handleClick} style={{display:'none'}}>
          <div className="image">
            <img src={sprites.back} alt="back" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
