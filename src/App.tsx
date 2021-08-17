import { Switch, Route } from 'react-router';

import GlobalStyles from './global.styles';

import Homepage from './pages/homepage';

function App() {
  return (
    <>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
