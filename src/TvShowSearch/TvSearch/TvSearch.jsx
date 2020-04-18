import React, { useState } from 'react';
import PhraseInput from "./PhraseInput/PhraseInput";

export default () => {
  const [phase, setPhase] = useState('');

  const onPhraseChange = (newValue) => setPhase(newValue);

  const onSearchClick = () => {
    console.log("Value to search:", phase);
    // todo call API search
  }

  return (
    <React.Fragment>
      <h1>Search Tv Shows and Movies</h1>
      <PhraseInput phase={phase} onPhraseChange={onPhraseChange} onSearchClick={onSearchClick} />
    </React.Fragment>
  );
};
