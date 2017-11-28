import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
