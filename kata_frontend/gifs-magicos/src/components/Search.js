import { Component } from "react";

class Search extends Component {
  render() {
    const PLACEHOLDER = "Buscar en todos los gifs";
    const SEARCH_TEXT = "Buscar";
    return (
      <div className="search-container">
        <input type="text" placeholder={PLACEHOLDER} className="search-input" />
        <button className="search-button">{SEARCH_TEXT}</button>
      </div>
    );
  }
}

export default Search;
