import React from 'react';
import Notes from './Notes/Notes';
import store from './redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
}

export default App;
