import React, { Component } from 'react'

class CharacterModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    }
  }

  onClickButton = event => {
    event.preventDefault()
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    return (
      <div >

        {<button
          onClick={this.onClickButton}
          className="character-view-button"
        > View </button>}

        {this.state.openModal
          ?
          <div
            open={this.state.openModal}
            onClose={this.onCloseModal}
          >

            <div className="character-modal-background">
              <div className="character-modal">
                {/* <h2>{this.props.character.name}</h2> */}
                <h1>{`${this.props.character.name}, Level ${this.props.character.level} ${this.props.character.ancestry} ${this.props.character.class} (${this.props.character.background})`}</h1>

                <h2>{ `Perception: ${this.props.character.perception}` }</h2>

                <h3>Saving Throws</h3>
                <div>{ `Fortitude: ${this.props.character.fortitude}` }</div>
                <div>{ `Reflex: ${this.props.character.reflex}` }</div>
                <div>{ `Will: ${this.props.character.will}` }</div>

                <h3>Ability Scores</h3>
                <div>{ `Strength: ${this.props.character.strength}` }</div>
                <div>{ `Dexterity: ${this.props.character.dexterity}` }</div>
                <div>{ `Constitution: ${this.props.character.constitution}` }</div>
                <div>{ `Intelligence: ${this.props.character.intelligence}` }</div>
                <div>{ `Wisdom: ${this.props.character.wisdom}` }</div>
                <div>{ `Charisma: ${this.props.character.charisma}` }</div>

                <h3>Recall Knowledge Skills</h3>
                <div>{`Arcana: ${this.props.character.arcana}`}</div>
                <div>{`Crafting: ${this.props.character.crafting}`}</div>
                <div>{`Nature: ${this.props.character.nature}`}</div>
                <div>{`Religion: ${this.props.character.religion}`}</div>
                <div>{`Occultism: ${this.props.character.occultism}`}</div>
                <div>{`Society: ${this.props.character.society}`}</div>

                {/* <div> Skills Coming Soon! </div>
                <div> Feats Coming Soon! </div>
                <div> Equipment Coming Soon! </div>
                <div> Spells Coming Soon! </div> */}

                <button
                  onClick={this.onCloseModal}
                  onClose={() => this.onCloseModal}
                  className="char-preview-button"
                > Close</button>
              </div>
            </div>

          </div>
          : ''
        }
      </div>
    )
  }
}

export default CharacterModal;
