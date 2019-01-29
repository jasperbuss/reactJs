import React from "react";

const movieForm = ({ match, history }) => {
  return (
    <div>
      <h1>movies {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        back to movies
      </button>
    </div>
  );
};

export default movieForm;
