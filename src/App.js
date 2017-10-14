import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Homepage from './components/Homepage';
import { NoMatch } from './components/404';

const App = () => {
  return (
    <LocaleProvider locale={enUS}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
