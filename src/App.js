import React from 'react';

import { useSelector } from 'react-redux';

import './App.scss';

const Nav = React.lazy(() => import('./components/Nav/Nav'));
const Posts = React.lazy(() => import('./components/Posts/Posts'));
const Weather = React.lazy(() => import('./components/Weather/Weather'));

function App() {
  const loading = useSelector((state) => state.sources.loading);

  return (
    <div>
      <Nav />
      {loading ? (
        <div className="loading">
          <div className="loading__spinner">LOADING...</div>
        </div>
      ) : (
        <div className="container">
          <Posts />
          {/* <Weather /> */}
        </div>
      )}
    </div>
  );
}

export default App;
