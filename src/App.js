import Home from 'pages/Home';
import Series from 'pages/Series';
import { Route, Switch } from 'wouter';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/series" component={Series} />
      </Switch>
    </div>
  );
}

export default App;
