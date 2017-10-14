import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Store from './stores/index.js';
import Homepage from './components/Homepage';
import { NoMatch } from './components/404';

const App = () => {
  return (
    <Provider store={Store}>
      <LocaleProvider locale={enUS}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </LocaleProvider>
    </Provider>
  );
}

export default App;
