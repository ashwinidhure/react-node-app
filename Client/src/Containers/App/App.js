import React from 'react';
import POCBuilder from '../../Components/POCBuilder/POCBuilder';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../../Components/Header/Header';
import Styles from './App.module.scss';

function App() {
  return (
    <Provider store={store} data-test="AppComponent">
      <div className={Styles.app_container}>
        <Header />
        <POCBuilder />
      </div>
    </Provider>
  );
}

export default App;
