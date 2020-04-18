import React, { useState } from "react";
import PhraseInput from "./PhraseInput/PhraseInput";
import ShowService from "./../../services/TvShowService";
import MatchingTvShows from "./MatchingTvShows/MatchingTvShows";

export default ({ TvShowService = ShowService() }) => {
  const [phase, setPhase] = useState('');
  const [tvShows, setTvShows] = useState([]);

  const onPhraseChange = (newValue) => setPhase(newValue);

  const onSearchClick = () => {
    TvShowService.fetchTvShows(phase)
      .then(res => {
        setTvShows(res);
      });
  }

  return (
    <React.Fragment>
      <h1>Search Tv Shows and Movies</h1>
      <PhraseInput phase={phase} onPhraseChange={onPhraseChange} onSearchClick={onSearchClick} />
      <MatchingTvShows tvShows={tvShows}/>
    </React.Fragment>
  );
};
