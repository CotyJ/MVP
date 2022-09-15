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
      <div>

        <button onClick={this.onClickButton} className="character-view-button">
          View
        </button>

        {this.state.openModal
          ?
          <div
            open={this.state.openModal}
            onClose={this.onCloseModal}
          >

            <div className="character-modal-background">
              <div className="character-modal">

                <h1 className="character-description-modal">
                  {`${this.props.character.name}, Level ${this.props.character.level} ${this.props.character.ancestry} ${this.props.character.class} (${this.props.character.background})`}
                </h1>

                <div className="modal-grid-container">

                  {/* Perception and Class DC Grid */}
                  <div className="grid-list">
                    <h2 className="attribute-text">Perception:</h2>
                    <h2 className="attribute-number-1">{this.props.character.perception}</h2>
                    <h2 className="attribute-text">Class DC:</h2>
                    <h2 className="attribute-number-1">{this.props.character.classdc}</h2>
                  </div>

                  {/* Saving Throws Grid */}
                  <div className="grid-list">
                    <div className="attribute-text"> Fortitude: </div>
                    <div className="attribute-number-2"> {this.props.character.fortitude} </div>
                    <div className="attribute-text"> Reflex: </div>
                    <div className="attribute-number-2"> {this.props.character.reflex} </div>
                    <div className="attribute-text"> Will: </div>
                    <div className="attribute-number-2"> {this.props.character.will} </div>
                  </div>


                  {/* Abilities Grid */}
                  <div className="grid-list">

                    <div className="attribute-text"> Strength: </div>
                    <div className="attribute-number-2"> {this.props.character.strength} </div>
                    <div className="attribute-text"> Dexterity: </div>
                    <div className="attribute-number-2"> {this.props.character.dexterity} </div>
                    <div className="attribute-text"> Constitution: </div>
                    <div className="attribute-number-2"> {this.props.character.constitution} </div>
                    <div className="attribute-text"> Intelligence: </div>
                    <div className="attribute-number-2"> {this.props.character.intelligence} </div>
                    <div className="attribute-text"> Wisdom: </div>
                    <div className="attribute-number-2"> {this.props.character.wisdom} </div>
                    <div className="attribute-text"> Charisma: </div>
                    <div className="attribute-number-2"> {this.props.character.charisma} </div>

                  </div>


                  {/* Skills Grid */}
                  <div className="grid-list">
                    <div className="attribute-text">Arcana:</div>
                    <div className="attribute-number-2">{this.props.character.arcana}</div>
                    <div className="attribute-text">Crafting:</div>
                    <div className="attribute-number-2">{this.props.character.crafting}</div>
                    <div className="attribute-text">Nature:</div>
                    <div className="attribute-number-2">{this.props.character.nature}</div>
                    <div className="attribute-text">Religion:</div>
                    <div className="attribute-number-2">{this.props.character.religion}</div>
                    <div className="attribute-text">Occultism:</div>
                    <div className="attribute-number-2">{this.props.character.occultism}</div>
                    <div className="attribute-text">Society:</div>
                    <div className="attribute-number-2">{this.props.character.society}</div>
                  </div>

                </div>

                {/* Old version */}
                {/*
                <h2>{`Perception: ${this.props.character.perception}`}</h2>
                <h2>{`Class DC: ${this.props.character.classdc}`}</h2>

                <h3>Saving Throws</h3>
                <div>{`Fortitude: ${this.props.character.fortitude}`}</div>
                <div>{`Reflex: ${this.props.character.reflex}`}</div>
                <div>{`Will: ${this.props.character.will}`}</div>

                <h3>Ability Scores</h3>
                <div>{`Strength: ${this.props.character.strength}`}</div>
                <div>{`Dexterity: ${this.props.character.dexterity}`}</div>
                <div>{`Constitution: ${this.props.character.constitution}`}</div>
                <div>{`Intelligence: ${this.props.character.intelligence}`}</div>
                <div>{`Wisdom: ${this.props.character.wisdom}`}</div>
                <div>{`Charisma: ${this.props.character.charisma}`}</div>

                <h3>Recall Knowledge Skills</h3>
                <div>{`Arcana: ${this.props.character.arcana}`}</div>
                <div>{`Crafting: ${this.props.character.crafting}`}</div>
                <div>{`Nature: ${this.props.character.nature}`}</div>
                <div>{`Religion: ${this.props.character.religion}`}</div>
                <div>{`Occultism: ${this.props.character.occultism}`}</div>
                <div>{`Society: ${this.props.character.society}`}</div>
                */}

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
