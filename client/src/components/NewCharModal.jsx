import React, { Component } from 'react'
import { Ancestries, Backgrounds, Classes } from '../../../test/testData.js';

class NewCharModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      ancestries: Ancestries,
      backgrounds: Backgrounds,
      classes: Classes,
      levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      chosenName: '',
      chosenAnc: '',
      chosenBac: '',
      chosenCla: '',
      chosenLvl: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleUserNameChange = (event) => {
    this.setState({ chosenName: event.target.value });
  }

  handleChange = (event) => {
    const newState = { [event.target.id]: event.target.value }
    this.setState(newState);
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
          className="character-create-button"
        > Create Character </button>}

        {this.state.openModal
          ?
          <div
            open={this.state.openModal}
            onClose={this.onCloseModal}>

            <div className="character-modal-background">
              <div className="character-modal">
                <h2>Create A Character</h2>

                <div className="filter-refiner">
                  <div>Enter Your Name</div>
                  <form>
                    <input placeholder="Name" onChange={this.handleUserNameChange} />
                  </form>
                </div>

                <div className="filter-refiner">
                  <div> Choose a Class </div>
                  <select className="dropdown-filter" onChange={this.handleChange} id="chosenCla">
                    <option> Select Class </option>
                    {this.state.classes.map((item) =>
                      <option key={item} value={item} >{item}</option>)}
                  </select>
                </div>

                <div className="filter-refiner">
                  <div> Choose a Ancestry </div>
                  <select className="dropdown-filter" onChange={this.handleChange} id="chosenAnc">
                    <option> Select Ancestry</option>
                    {this.state.ancestries.map((item) =>
                      <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>

                <div className="filter-refiner">
                  <div> Choose a Background </div>
                  <select className="dropdown-filter" onChange={this.handleChange} id="chosenBac">
                    <option> Select Background </option>
                    {this.state.backgrounds.map((item) =>
                      <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>

                <div className="filter-refiner">
                  <div> Choose a Level </div>
                  <select className="dropdown-filter" onChange={this.handleChange} id="chosenLvl">
                    <option> Select Level </option>
                    {this.state.levels.map((item) =>
                      <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>

                <button
                  onClick={() => {
                    this.onCloseModal;
                    this.props.addCharacter(this.state);
                  }}
                  className="char-preview-button"
                >
                  Create
                </button>

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

export default NewCharModal;
