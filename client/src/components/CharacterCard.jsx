import React from 'react';
import CharacterModal from './CharacterModal.jsx';

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    }
  }

  onClickButton = event => {
    event.preventDefault();
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false });
  }

  render() {
    return (
      <div className="character-card">
        <div onClick={this.onClickButton}>
          <h2 className="character-name-on-card">
            {this.props.singleChar.name}
          </h2>

          <div className="character-description">
            <div>{`Lvl. ${this.props.singleChar.level}`}</div>
            <div>{`Ancestry: ${this.props.singleChar.ancestry}`}</div>
            <div>{`Class:  ${this.props.singleChar.class}`}</div>
            {this.props.singleChar.picture
              ?
              <a href={this.props.singleChar.picture} >
                <img src={this.props.singleChar.picture} style={{ width: "30px" }} />
              </a>
              : ''}

          </div>
        </div>

        {/* <footer><CharacterModal character={this.props.singleChar} /></footer> */}
        {this.state.openModal
          ?
          <div
            open={this.state.openModal}
            onClose={this.onCloseModal}
          >
            <div className="character-modal-background">
              <div className="character-modal">

                <h1 className="character-description-modal">
                  {`${this.props.singleChar.name}, Level ${this.props.singleChar.level} ${this.props.singleChar.ancestry} ${this.props.singleChar.class} (${this.props.singleChar.background})`}
                </h1>

                <div className="modal-grid-container">

                  {/* Perception and Class DC Grid */}
                  <div className="grid-list">
                    <h2 className="attribute-text">Perception:</h2>
                    <h2 className="attribute-number-1">{this.props.singleChar.perception}</h2>
                    <h2 className="attribute-text">Class DC:</h2>
                    <h2 className="attribute-number-1">{this.props.singleChar.classdc}</h2>
                  </div>

                  {/* Saving Throws Grid */}
                  <div className="grid-list">
                    <div className="attribute-text"> Fortitude: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.fortitude} </div>
                    <div className="attribute-text"> Reflex: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.reflex} </div>
                    <div className="attribute-text"> Will: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.will} </div>
                  </div>

                  {/* Abilities Grid */}
                  <div className="grid-list">
                    <div className="attribute-text"> Strength: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.strength} </div>
                    <div className="attribute-text"> Dexterity: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.dexterity} </div>
                    <div className="attribute-text"> Constitution: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.constitution} </div>
                    <div className="attribute-text"> Intelligence: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.intelligence} </div>
                    <div className="attribute-text"> Wisdom: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.wisdom} </div>
                    <div className="attribute-text"> Charisma: </div>
                    <div className="attribute-number-2"> {this.props.singleChar.charisma} </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid-list">
                    <div className="attribute-text">Arcana:</div>
                    <div className="attribute-number-2">{this.props.singleChar.arcana}</div>
                    <div className="attribute-text">Crafting:</div>
                    <div className="attribute-number-2">{this.props.singleChar.crafting}</div>
                    <div className="attribute-text">Nature:</div>
                    <div className="attribute-number-2">{this.props.singleChar.nature}</div>
                    <div className="attribute-text">Religion:</div>
                    <div className="attribute-number-2">{this.props.singleChar.religion}</div>
                    <div className="attribute-text">Occultism:</div>
                    <div className="attribute-number-2">{this.props.singleChar.occultism}</div>
                    <div className="attribute-text">Society:</div>
                    <div className="attribute-number-2">{this.props.singleChar.society}</div>
                  </div>
                </div>

                <button
                  onClick={this.onCloseModal}
                  // onClose={() => this.onCloseModal}
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

export default CharacterCard;
