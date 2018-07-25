import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MovieInput from './components/MovieInput.js'
import { Provider } from 'react-redux'
//import the reducer
import reducer from './store/reducer'
import { createStore } from 'redux'


//create the store by passing the reducer

const store = createStore(reducer,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route path = "/MovieInput" component = {MovieInput} />
      </Switch>
    </App>
  </Provider>
  </BrowserRouter>





  , document.getElementById('root'));
registerServiceWorker();
