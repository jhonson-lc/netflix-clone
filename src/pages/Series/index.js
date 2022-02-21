import NavigationBar from 'layouts/NavigationBar';
import Header from 'layouts/Header';
import Main from 'layouts/Main';

import React from 'react';

function Series() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Main page={'series'} />
    </div>
  );
}

export default Series;
