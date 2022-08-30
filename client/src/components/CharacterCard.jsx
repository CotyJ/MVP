import React from 'react';
import CharacterModal from './CharacterModal.jsx';

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="character-card">
        <div>
          <h2 className="character-name-on-card">
            {this.props.singleChar.name}
          </h2>

          <div>
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
        <footer><CharacterModal character={this.props.singleChar} /></footer>
      </div>
    )
  }
}

export default CharacterCard;
