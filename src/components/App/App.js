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
    fetchMovies('movies')
      .then(data => this.setState({ movies: data.movies }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
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
              const { error, movies } = this.state;
              const loaded = !error.length && !!movies.length;
              const loading = !error.length && !movies.length;
              return (
                <>
                  {!!error.length && <Errors error={error} />}
                  {loading && <h1 className='loading'>Movies loading...</h1>}
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
