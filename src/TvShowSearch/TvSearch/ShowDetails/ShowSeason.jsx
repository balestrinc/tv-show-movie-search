import React from "react";

export default ({ season }) => {
    if (!season) return (null);

    return (
        <dl>
            <dt key={season}>{"Season " + season.season}</dt>
            {season.episodes.map((episode) => {
                return (<dd key={episode.id}>{`${episode.number}. ${episode.name}`}</dd>);
            })}
        </dl>
    );
}