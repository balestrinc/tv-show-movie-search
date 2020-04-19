import axios from "axios";
import mapToShowItem from "./converters/mapToShowItem";
import mapToShowCreator from "./converters/mapToShowCreator";
import mapToDetailedShow from "./converters/mapToDetailedShow";


export default ({ httpClient } = { httpClient: axios }) => {
  const service = {
    fetchTvShows: phrase =>
      httpClient
        .get(
          `http://api.tvmaze.com/search/shows?q=${phrase}`
        )
        .then(res => res.data.map(item => mapToShowItem(item.show))),
    
    fetchTvShowDetails: (showId) => {
      return Promise.all([service.fetchShow(showId), service.fetShowCreator(showId)])
      .then((result) => {
        return {...result[0], createdBy: result[1]};
      });
    },

    fetchShow: (showId) =>
      httpClient
        .get(
          `https://api.tvmaze.com/shows/${showId}?embed[]=episodes&embed[]=cast`
        )
        .then(res => mapToDetailedShow(res.data)),
        
    fetShowCreator: (showId) =>
      httpClient
        .get(
          `https://api.tvmaze.com/shows/${showId}/crew`
        )
        .then(res => mapToShowCreator(res.data)),
  }
  return service;
}
