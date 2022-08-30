import React from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import SearchFilter from './SearchFilter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      characterSearch: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const stateCopy = this.state;
    const url = '/api/v1/characters';

    axios.get(url)
      .then((response) => {
        stateCopy.characters = response.data;
        this.setState(stateCopy);
      })
      .catch((err) => console.log("Error getting data... ", err))
  }

  addCharacter = (newCharObj) => {
    const { chosenName, chosenCla, chosenAnc, chosenLvl } = newCharObj;
    console.log(chosenName, chosenCla, chosenAnc, chosenLvl);
    const url = '/api/v1/characters';
    axios.post(url, { chosenName, chosenCla, chosenAnc, chosenLvl })
      .then((response) => {
        console.log("Posted! ", response);
        this.getData();
      })
      .catch((err) => console.log("Error Posting! ", err))
      ;
  }

  handleSearchSubmit(event, characterName) {
    event.preventDefault();
    var newState = [];
    for (let i = 0; i < this.state.characters.length; i++) {
      if (this.state.characters[i].name.toLowerCase().includes(characterName)) {
        newState.push(this.state.characters[i]);
      }
    }
    this.setState({ characterSearch: newState });
  }

  render() {
    return (
      <div>

        <SearchFilter
          addCharacter={this.addCharacter}
          handleSearchSubmit={this.handleSearchSubmit.bind(this)}

        />

        <Gallery
          characters={this.state.characterSearch.length > 0 ? this.state.characterSearch : this.state.characters}

        />

      </div>
    )
  }
}

export default App;
