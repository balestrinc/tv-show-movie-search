import React from "react";

import "./PhraseInput.css";

class PhraseInput extends React.Component {
  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    const { phrase, onPhraseChange, onSearchClick } = this.props;
    return (
      <div>
        <input
          className="phraseInput"
          ref={(input) => { this.inputRef = input; }}
          placeholder="To search shows, type its name…"
          value={phrase}
          onChange={event => onPhraseChange(event.target.value)}
          id="phraseInput"
        />
        <button
          className="buttonSearch"
          onClick={() => onSearchClick()}
          id="buttonSearch">
          Search
        </button>
      </div>
    );
  }
}

export default PhraseInput;
