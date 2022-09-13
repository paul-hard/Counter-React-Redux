import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter'
import './index.css'
import { Provider } from "react-redux"
import { store } from "./store"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
)
