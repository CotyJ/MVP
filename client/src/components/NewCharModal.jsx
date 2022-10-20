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
      perceptionValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      setPerception: 0,
      dcValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      setDC: 0,
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
              <div className="new-character-modal">
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



                <div>Add Entries For:</div>
                <ol>
                  <li>Perception</li>
                  <li>Class DC</li>
                  <li>Saving Throws</li>
                  <li>Ability Scores</li>
                  <li>Skills</li>
                </ol>




                <div className="filter-refiner">
                  <div> Perception: </div>
                  <select className="dropdown-filter" onChange={this.handleChange} id="setPerception">
                    <option> Set Perception </option>
                    {this.state.perceptionValues.map((item) =>
                      <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>


                <div className="filter-refiner">
                  <div> Class DC: </div>
                  <select className="dropdown-filter" onChange={this.handleChange} id="setPerception">
                    <option> Set Class DC </option>
                    {this.state.dcValues.map((item) =>
                      <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>

                {/* Saving Throws Grid */}
                {/* <div className="grid-list">
                    <div className="attribute-text"> Fortitude: </div>
                    <div className="attribute-text"> Reflex: </div>
                    <div className="attribute-text"> Will: </div>
                  </div> */}



                {/* Abilities Grid */}
                {/* <div className="grid-list">
                    <div className="attribute-text"> Strength: </div>
                    <div className="attribute-text"> Dexterity: </div>
                    <div className="attribute-text"> Constitution: </div>
                    <div className="attribute-text"> Intelligence: </div>
                    <div className="attribute-text"> Wisdom: </div>
                    <div className="attribute-text"> Charisma: </div>
                  </div> */}

                {/* Skills Grid */}
                {/* <div className="grid-list">
                    <div className="attribute-text">Arcana:</div>
                    <div className="attribute-text">Crafting:</div>
                    <div className="attribute-text">Nature:</div>
                    <div className="attribute-text">Religion:</div>
                    <div className="attribute-text">Occultism:</div>
                    <div className="attribute-text">Society:</div>
                  </div> */}
                {/* </div> */}




                <div></div>


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

        <button className="character-create-button"> Upload Character </button>

      </div>
    )
  }
}

export default NewCharModal;
