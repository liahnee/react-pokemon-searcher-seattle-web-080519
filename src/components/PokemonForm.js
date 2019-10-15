import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

   handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const hp = e.target.hp.value;
    const frontUrl = e.target.frontUrl.value;
    const backUrl = e.target.backUrl.value;
    await this.setState({
      name, hp, frontUrl, backUrl
    })
    this.updateAPI()
  }

  updateAPI = () => {
    const name = this.state.name;
    const stats = [];
    stats.push({'value':this.state.hp, 'name':'hp'});
    const sprites = {'front': '', 'back': ''};
    sprites['front'] = this.state.frontUrl
    sprites['back'] = this.state.backUrl

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name, stats, sprites })
    })
    .then(resp => resp.json)
    .then(data => this.props.updateS(data))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
