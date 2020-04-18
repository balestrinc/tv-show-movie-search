import React from "react";
import "./MatchingTvShows.css";
import classNames from "classnames";

export default ({ tvShows, onMatchingTvShowClick, selectedTvShowId }) => {
  if (!tvShows || tvShows.length === 0) {
    return (null);
  }

  return (
    <ul
      className="matchingTvShows"
    >
      {tvShows.map((item) => {
        const selected = selectedTvShowId === item.id;
        return (
          <li
            key={item.id}
            onClick={() => onMatchingTvShowClick(item)}
            id={`matchingTvShow_${item.id}`}
            className={classNames(
              "matchingTvShow",
              {
                "matchingTvShowSelected": selected,
              })}
          >
            <img
              src={item.images.medium}
              alt={`${item.title} poster`}
              className="matchingTvShowImage"
            />
            {item.title}
          </li>
        )
      })}
    </ul>
  );
};
