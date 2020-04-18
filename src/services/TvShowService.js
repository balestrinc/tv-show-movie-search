import axios from "axios";
import DefaultImage from "./DefaultImage";

const mapToShowItem = (item) => {
  const show = item.show;
  const cast = show.network ? show.network.name : show.webChannel.name;
  return {
    id: show.id,
    title: show.name,
    images: {
      medium: show.image && show.image.medium ? show.image.medium : DefaultImage,
      original: show.image && show.image.original ? show.image.original : DefaultImage,
    },
    duration: show.runtime,
    schedule: show.schedule,
    status: show.status,
    showType: '',
    genres: show.genres,
    createdBy: '',
    cast: cast
  }
}

export default ({ httpClient } = { httpClient: axios }) => {
  return {
    fetchTvShows: phrase =>
      httpClient
        .get(
          `http://api.tvmaze.com/search/shows?q=${phrase}`
        )
        .then(res => res.data.map(mapToShowItem))
  }
}
