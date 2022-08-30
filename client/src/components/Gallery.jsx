import React from 'react';
import CharacterCard from './CharacterCard.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }

  render() {
    return (
      <div id="Gallery">
        {this.props.characters.map((character) =>
        <CharacterCard
          key={character.id}
          singleChar={character}
        />
        )}
      </div>
    )
  }
}

export default Gallery;
