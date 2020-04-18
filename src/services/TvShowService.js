import axios from "axios";
import DefaultImage from "./DefaultImage";

const mapToShowItem = (item) => {
  const show = item.show;
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
    showType: show.type,
    genres: show.genres
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
