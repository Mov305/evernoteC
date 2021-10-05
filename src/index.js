import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducer/rootReducer'
import fbconfig from './config/fbconfig'
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase'
import {createFirestoreInstance,getFirestore} from 'redux-firestore'
import {Provider} from 'react-redux'
import firebase from 'firebase/compat/app'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'


const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}),logger),
  )
)

const rrfProps ={
  firebase,
  config: fbconfig,
  dispatch:store.dispatch,
  createFirestoreInstance,
}



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>

      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <App />

        </ReactReduxFirebaseProvider>

      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
