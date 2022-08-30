import React from 'react';
import { Ancestries, Backgrounds, Classes, Feats, Skills } from '../../../test/testData.js';
import NewCharModal from './NewCharModal.jsx';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ancestries: Ancestries,
      backgrounds: Backgrounds,
      classes: Classes,
      feats: Feats,
      skills: Skills,
      ancFilter: '',
      bacFilter: '',
      claFilter: '',
      entry: '',
      characterSearch: [],
    }
    this.handleUserEntryChange = this.handleUserEntryChange.bind(this);
  }

  handleDropdownChange(event) {
    console.log("ID ", event.target.id);
    console.log("Value ", event.target.value);
  }

  handleUserEntryChange(event) {
    this.setState({ entry: event.target.value });
  }


  render() {
    return (
      <div id="SearchFilter">

        <div className="filter-refiner">
          <div> Search By Name </div>
          <form onSubmit={ (event) => {this.props.handleSearchSubmit(event, this.state.entry)}}>
            <input
              placeholder="Name"
              className="search-bar"
              onChange={this.handleUserEntryChange}
              value={this.state.entry}
            ></input>
            <button className="search-button"> Search </button>
          </form>
        </div>

        <div className="filter-refiner">
          <div> Filter by Class </div>
          <select
            className="dropdown-filter"
            onChange={this.handleDropdownChange}
            id="claFilter">
            <option> Select Class </option>
            {this.state.classes.map((item) =>
              <option key={item} value={item}  >{item}</option>)}
          </select>
        </div>

        <div className="filter-refiner">
          <div> Filter by Ancestry </div>
          <select className="dropdown-filter">
            <option> Select Ancestry</option>
            {this.state.ancestries.map((item) =>
              <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="filter-refiner">
          <div> Filter by Background </div>
          <select className="dropdown-filter">
            <option> Select Background </option>
            {this.state.backgrounds.map((item) =>
              <option key={item} value={item}>{item}</option>)}
          </select>
        </div>


        <div className="filter-refiner">
          <div> Filter by Skills </div>
          <select className="dropdown-filter">
            <option> Select Skills </option>
            {this.state.skills.map((item) =>
              <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="filter-refiner">
          <div> Filter by Feats </div>
          <select className="dropdown-filter">
            <option> Select Feats </option>
            {this.state.feats.map((item) =>
              <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <br />

        <footer ><NewCharModal addCharacter={this.props.addCharacter}/></footer>

      </div>
    )
  }
}

export default SearchFilter;
