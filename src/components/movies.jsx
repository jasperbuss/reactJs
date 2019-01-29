import { getMovies } from "../services/fakeMovieService";
import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import Paging from "./pagination";
import ListGroup from "./listGroup";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import "./movies.css";
import MoviesTable from "./moviesTable";
import _ from "lodash";

export default class Movies extends Component {
  //centralized state
  state = {
    movies: [],
    pageSize: 3,
    currentPage: 1,
    genres: [],
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    console.log("didmount");

    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };
  // for changing the page
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    //to remain on page 1 as genre only gots 1 page
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  //called everytime the state changes
  render() {
    //  console.log("render");

    let { length: count } = this.state.movies;

    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) {
      return <p>There are no videos </p>;
    }

    const { totalCount, data: movies } = this.getPagedData();

    console.log(this.getPagedData().data);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col" id="col">
          <p> Showing {totalCount} movies </p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />

          <Paging
            totalItems={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
