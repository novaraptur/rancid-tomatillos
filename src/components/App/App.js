import React, { Component } from 'react';
import './App.css';
import { cleanAPIData } from '../../apiCalls/util';
import Header from '../HeaderAndNav/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import MovieDetails from '../MovieDetails/MovieDetails'
import { fetchMovies, fetchMovie } from '../../apiCalls/apiCalls';
import Errors from '../Errors/Errors';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: ''
    };
  }

  clearSelectedMovie = () => {
    this.setState({ selectedMovie: null });
  };

  navigate = () => {
    if (!this.state.selectedMovie) {
      console.log('Scroll down to movie cards');
    } else {
      this.clearSelectedMovie();
    }
  };

  componentDidMount() {
    fetchMovies('movies')
      .then(data => this.setState({ movies: data.movies }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { error } = this.state;
    return (
      <main>
        <Header navigate={this.navigate} />
        <Switch>

        <Route
          path="/:movieId"
          render={({ match }) => {
            return <MovieDetails selectedId={match.params.movieId} />
          }}
        />

          <Route
            exact
            path='/'
            render={() => {
              const hasData = !error.length && !!this.state.movies.length;
              const noDataYet = !error.length && !this.state.movies.length;
              return (
                <>
                  {!!error.length && <Errors error={error} />}

                  {noDataYet && <h1 className='loading'>Movies loading...</h1>}

                  {hasData && (
                    <Movies
                      movies={this.state.movies}
                      selectedMovie={this.state.selectedMovie}
                      updateSelectedMovie={this.updateSelectedMovie}
                    />
                  )}
                </>
              );
            }}
          />

          <Route
            render={() => {
              return (
                <Errors error={'Page not found, do you want to go home?'} />
              );
            }}
          />
        </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
