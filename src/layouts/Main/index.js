import React from 'react';
import { home, series } from 'services/settings';
import Category from 'components/Category';

import './Main.css';

function Main({ page }) {
  if (page === 'home') {
    return (
      <div className="HomeCategories">
        <Category isLarge={true} title="ORIGINALS" fetchUrl={home.fetchOriginals} />
        <Category title="Trending Now" fetchUrl={home.fetchTrending} />
        <Category title="Top Rated" fetchUrl={home.fetchTopRated} />
        <Category title="Action Movies" fetchUrl={home.fetchActionMovies} />
        <Category title="Comedy Movies" fetchUrl={home.fetchComedyMovies} />
        <Category title="Horror Movies" fetchUrl={home.fetchHorrorMovies} />
        <Category title="Romance Movies" fetchUrl={home.fetchRomanceMovies} />
        <Category title="Documentaries" fetchUrl={home.fetchDocumentaries} />
      </div>
    );
  } else {
    return (
      <div className="HomeCategories">
        <Category isLarge={true} title="ON THE AIR" fetchUrl={series.fetchLatest} />
        <Category title="Top Rated" fetchUrl={series.fetchTopRated} />
        <Category title="Popular" fetchUrl={series.fetchPopular} />
      </div>
    );
  }
}

export default Main;
