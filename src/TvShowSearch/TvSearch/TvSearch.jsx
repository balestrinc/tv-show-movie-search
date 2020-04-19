import React, { useState } from "react";
import PhraseInput from "./PhraseInput/PhraseInput";
import ShowService from "./../../services/TvShowService";
import MatchingTvShows from "./MatchingTvShows/MatchingTvShows";
import SearchFailure from "./SearchFailure/SearchFailure";

export default ({ TvShowService = ShowService() }) => {
  const [phase, setPhase] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [hasFailedToSearch, setHasFailedToSearch] = useState(false);
  const [tvShows, setTvShows] = useState([]);

  const onPhraseChange = (newValue) => setPhase(newValue);

  const onSearchClick = () => {
    setIsloading(true);
    TvShowService.fetchTvShows(phase)
      .then(setTvShows)
      .catch(() => {
        setHasFailedToSearch(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  return (
    <React.Fragment>
      <h1>Search Tv Shows and Movies</h1>
      <PhraseInput phase={phase} onPhraseChange={onPhraseChange} onSearchClick={onSearchClick} />
      <MatchingTvShows tvShows={tvShows} />
      {hasFailedToSearch && (<SearchFailure />)}
    </React.Fragment>
  );
};
