import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomeView from './components/views/HomePage';
import NotFoundView from './components/views/NotFoundPage';
import MoviesPage from './components/views/MoviesPage';
import MovieDetailsPage from './components/views/MovieDetailsPage/MovieDetailsPage';

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </div>
    );
  }
}
