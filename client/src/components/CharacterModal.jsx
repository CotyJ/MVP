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
                <h2>{this.props.character.name}</h2>
                <div>{`Level ${this.props.character.level}`}</div>
                <div>{`Ancestry: ${this.props.character.ancestry}`}</div>
                <div>{`Class: ${this.props.character.class}`}</div>
                <br />
                <div> Skills Coming Soon! </div>
                <div> Feats Coming Soon! </div>
                <div> Equipment Coming Soon! </div>
                <div> Spells Coming Soon! </div>
                <br />
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
