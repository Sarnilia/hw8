import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import initState from './redux/initState'
import rootReducer from './redux/reducers/rootReducer'
import App from './App'

const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
