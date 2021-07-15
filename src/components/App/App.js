import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls/apiCalls';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';
import MovieDetails from '../MovieDetails/MovieDetails';
import Errors from '../Errors/Errors';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: ''
    };
  }

  componentDidMount() {
    //may want to add a loading state since we are making a fetch request
    fetchMovies('movies')
      .then(data => this.setState({ movies: data.movies }))
      .catch(err => this.setState({ error: err.message }));
  }

  clearSelectedMovie = () => {
    this.setState({ selectedMovie: null });
  };

  //might make more sense for movies to fetch it's own movies
  //and move all of the logic out of the render into movies
  // app should just be a series of Routes, no logic
  // maybe error boundaries

  render() {
    const { error } = this.state;
    //desctructure movies
    const { movies } = this.state;
    return (
      <main>
        <ScrollToTop />
        <Header navigate={this.navigate} />
        <Switch>
          <Route
            path='/:movieId'
            render={({ match }) => {
              return <MovieDetails selectedId={match.params.movieId} />;
            }}
          />

          <Route
            exact
            path='/'
            render={() => {
              const hasData = !error.length && !!this.state.movies.length;
              const loading = !error.length && !this.state.movies.length;
              return (
                <>
                  {!!error.length && <Errors error={error} />}

                  {loading && <h1 className='loading'>Movies loading...</h1>}

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
