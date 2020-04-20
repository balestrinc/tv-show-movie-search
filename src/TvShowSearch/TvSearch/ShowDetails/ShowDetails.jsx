import React from "react";
import "./ShowDetails.css";

export default ({ show }) => {
  if (!show) {
    return (null);
  }

  const cast = show.cast ? show.cast : [];

  return (
    <div className="showDetails" id="showDetails">
      <img
        src={show.images.original}
        alt={`${show.title} poster`}
        className="showImage"
      />
      <div className="showDetailsContent">
      <h2>{show.title}</h2>
      <dl>
        <dt>Duration:</dt>
        <dd>{show.duration}</dd>
        <dt>Schedule:</dt>
        <dd>{`${show.schedule.days.join(",")} at ${show.schedule.time}`}</dd>
        <dt>Status:</dt>
        <dd>{show.status}</dd>
        <dt>Type:</dt>
        <dd>{show.showType}</dd>
        <dt>Genres:</dt>
        {show.genres.map((genreName) => (<dd key={genreName}>{genreName}</dd>))}
        <dd>{show.genres}</dd>
        <dt>Created By:</dt>
        <dd>{show.createdBy}</dd>
        <dt>Cast:</dt>
        {cast.map((name) => (<dd key={name}>{name}</dd>))}
      </dl>
      </div>
    </div>
  );
};
