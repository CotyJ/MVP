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
      setPerception: null,
      setDC: 0,
      setFort: 0,
      setRef: 0,
      setWill: 0,
      setStr: 10,
      setDex: 10,
      setCon: 10,
      setInt: 10,
      setWis: 10,
      setCha: 10,
      setArcana: 10,
      setCrafting: 10,
      setNature: 10,
      setReligion: 10,
      setOccultism: 10,
      setSociety: 10,
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
      <div>

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
              <div className="character-modal-2">
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



                <div className="filter-refiner">
                  <div> Perception: {this.state.setPerception} </div>
                  <input type="range" id="setPerception" min="0" max="20" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Class DC: {this.state.setDC} </div>
                  <input type="range" id="setDC" defaultValue="0" min="10" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>



                <div className="filter-refiner">
                  <div> Fortitude: {this.state.setFort} </div>
                  <input type="range" id="setFort" defaultValue="0" min="0" max="20" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Reflex: {this.state.setRef} </div>
                  <input type="range" id="setRef" defaultValue="0" min="0" max="20" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Will: {this.state.setWill} </div>
                  <input type="range" id="setWill" defaultValue="0" min="0" max="20" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>



                <div className="filter-refiner">
                  <div> Strength: {this.state.setStr} </div>
                  <input type="range" id="setStr" defaultValue="10" min="10" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>


                <div className="filter-refiner">
                  <div> Dexterity: {this.state.setDex} </div>
                  <input type="range" id="setDex" defaultValue="10" min="10" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Constitution: {this.state.setCon} </div>
                  <input type="range" id="setCon" defaultValue="10" min="10" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Intelligence: {this.state.setInt} </div>
                  <input type="range" id="setInt" defaultValue="10" min="10" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Wisdom: {this.state.setWis} </div>
                  <input type="range" id="setWis" defaultValue="10" min="10" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Charisma: {this.state.setCha} </div>
                  <input type="range" id="setCha" defaultValue="10" min="10" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>



                <div className="filter-refiner">
                  <div> Arcana: {this.state.setArcana} </div>
                  <input type="range" id="setArcana" defaultValue="10" min="0" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Crafting {this.state.setCrafting} </div>
                  <input type="range" id="setCrafting" defaultValue="10" min="0" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Nature: {this.state.setNature} </div>
                  <input type="range" id="setNature" defaultValue="10" min="0" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Religion: {this.state.setReligion} </div>
                  <input type="range" id="setReligion" defaultValue="10" min="0" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Occultism: {this.state.setOccultism} </div>
                  <input type="range" id="setOccultism" defaultValue="10" min="0" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
                </div>

                <div className="filter-refiner">
                  <div> Society: {this.state.setSociety} </div>
                  <input type="range" id="setSociety" defaultValue="10" min="0" max="30" className="dropdown-filter" onChange={this.handleChange}>
                  </input>
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

        <button className="character-create-button"> Upload Character </button>

      </div>
    )
  }
}

export default NewCharModal;