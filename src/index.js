import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { lightSwitchReducer } from './App';

const store = createStore(lightSwitchReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  root.render(
    <App 
      state={store.getState()}
      store={store}
      // dispatch={store.dispatch()}
    />
);
}

render();

store.subscribe(render)
