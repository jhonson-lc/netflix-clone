import Home from 'pages/Home';
import Series from 'pages/Series';
import Peliculas from 'pages/Peliculas';
import Novedades from 'pages/Novedades';
import SearchMovie from 'pages/SearchMovie';
import { Route, Switch } from 'wouter';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/series" component={Series} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/novedadespopulares" component={Novedades} />
        <Route path="/:fetchUrl/:id" component={SearchMovie} />
      </Switch>
    </div>
  );
}

export default App;

