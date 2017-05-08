import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, hashHistory, Link, IndexLink, IndexRoute} from 'react-router';

const reducer = Redux.combineReducers({

});

const HomePage = ({ children }) =>
  <div>
    <h1>Welcome to my portfolio!</h1>
    <p>Have a look around!</p>
  </div>;

  const AppLayout = ({ children }) =>
  <div>
    Hello
    <div>
      {children}
    </div>
  </div>;

  const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    Redux.applyMiddleware(ReduxThunk)
  );

  ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppLayout}>
          <IndexRoute component={HomePage}/>

        </Route>
      </Router>
    </ReactRedux.Provider>,
    document.getElementById('root')
  );
