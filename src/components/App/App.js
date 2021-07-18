import React, { Component } from 'react';
import { fetchMovieData } from '../../apiCalls/apiCalls';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';
import MovieDetails from '../MovieDetails/MovieDetails';
import Errors from '../Errors/Errors';
import './App.css';
import { cleanAllMoviesData } from '../../apiCalls/utils';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: ''
    };
  }

  componentDidMount() {
    fetchMovieData('movies')
      .then(data => cleanAllMoviesData(data))
      .then(filteredMovies => this.setState({ movies: filteredMovies }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <main>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route
            exact
            path='/movies/:movieId'
            render={({ match }) => {
              return (
                <MovieDetails selectedId={parseInt(match.params.movieId)} />
              );
            }}
          />
          <Route
            exact
            path='/'
            render={() => {
              const { error, movies } = this.state;
              const loaded = !error.length && !!movies.length;
              const loading = !error.length && !movies.length;
              return (
                <>
                  {!!error.length && <Errors error={error} />}
                  {loading && (
                    <h1 className='error-message'>Movies loading...</h1>
                  )}
                  {loaded && <Movies movies={movies} />}
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
