import React from 'react';
import store from './context/store';
import { Provider } from 'react-redux';
import Counter from './components/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>

    
  );
}