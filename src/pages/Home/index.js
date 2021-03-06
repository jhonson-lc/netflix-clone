import NavigationBar from 'layouts/NavigationBar';
import Header from 'layouts/Header';
import Main from 'layouts/Main';

import React from 'react';

function Home() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Main page={'home'} />
    </div>
  );
}

export default Home;
