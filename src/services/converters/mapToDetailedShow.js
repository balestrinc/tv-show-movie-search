import mapToShowItem from "./mapToShowItem";

export default (show) => {
    let showItem = mapToShowItem(show);
    const cast = show._embedded.cast.map((castEntry) => castEntry.person.name);

    const seasons = [];
    const episodes = show._embedded.episodes;
    episodes.forEach(episode => {
        const isSeasonMapped = seasons.find(item => item.season === episode.season);
        if (!isSeasonMapped) {
            const seasonEpisodes = episodes
            .filter(item => item.season === episode.season)
            .map(episode => {
                return {
                    id: episode.id,
                    name: episode.name,
                    number: episode.number
                }
            })
            seasons.push({ season: episode.season, episodes: seasonEpisodes});
        }
    });


    return { ...showItem, cast, seasons };
}
