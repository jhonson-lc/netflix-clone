import React from 'react';
import requests from 'services/settings';
import Category from 'components/Category';

import './Main.css';

function Main() {
  return (
    <div className="HomeCategories">
      <Category
        isLarge={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Category title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Category title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Category title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Category title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Category title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Category title="Romance Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Category title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Main;
