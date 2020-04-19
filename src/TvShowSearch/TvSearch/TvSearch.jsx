import React, { useState } from "react";
import PhraseInput from "./PhraseInput/PhraseInput";
import ShowService from "./../../services/TvShowService";
import MatchingTvShows from "./MatchingTvShows/MatchingTvShows";
import SearchFailure from "./SearchFailure/SearchFailure";
import Loading from "./Loading/Loading";
import ShowDetails from "./ShowDetails/ShowDetails";

export default ({ TvShowService = ShowService() }) => {
  const [phase, setPhase] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [hasFailedToSearch, setHasFailedToSearch] = useState(false);
  const [tvShows, setTvShows] = useState([]);
  const [selectedTvShowId, setSelectedTvShowId] = useState(null);
  const [show, setShow] = useState(null);

  const onPhraseChange = (newValue) => setPhase(newValue);

  const onSearchClick = () => {
    setIsloading(true);
    setHasFailedToSearch(false)
    TvShowService.fetchTvShows(phase)
      .then(setTvShows)
      .catch(() => {
        setTvShows([]);
        setHasFailedToSearch(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const onMatchingTvShowClick = (selectedShow) => {
    setSelectedTvShowId(selectedShow.id);
    setShow(selectedShow);
    TvShowService.fetchTvShowDetails(selectedShow.id).then(setShow);
  };

  return (
    <React.Fragment>
      <h1>Search Tv Shows and Movies</h1>
      <PhraseInput phase={phase} onPhraseChange={onPhraseChange} onSearchClick={onSearchClick} />
      {isLoading && (<Loading />)}
      <MatchingTvShows tvShows={tvShows} onMatchingTvShowClick={onMatchingTvShowClick} selectedTvShowId={selectedTvShowId} />
      {hasFailedToSearch && (<SearchFailure />)}
      <ShowDetails show={show}/>
    </React.Fragment>
  );
};
