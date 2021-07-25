import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Fallback from './components/Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() =>
  import(
    './components/Navigation/Navigation' /* webpackChunkName: "navigation" */
  ),
);
const HomePage = lazy(() =>
  import('./components/views/HomePage' /* webpackChunkName: "home-page" */),
);
const NotFoundView = lazy(() =>
  import(
    './components/views/NotFoundPage' /* webpackChunkName: "not-found-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./components/views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

export default function App() {
  return (
    <div id="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<Fallback />}>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <HomePage />
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
      </Suspense>
    </div>
  );
}
