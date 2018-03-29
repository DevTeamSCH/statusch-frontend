import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'grommet-css'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
