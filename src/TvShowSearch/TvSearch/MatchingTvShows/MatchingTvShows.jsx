import React from "react";
import "./MatchingTvShows.css";

export default ({ tvShows }) => {
  if (!tvShows || tvShows.length === 0) {
    return (null);
  }

  return (
    <ul
      className="matchingTvShows"
    >
      {tvShows.map((item, index) => {
        return (
          <li
            key={item.id}
            item={item}
            className="matchingTvShow"
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
