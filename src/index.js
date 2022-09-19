import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {store, persistedStore} from './Redux/Store/store'
import {PersistGate} from 'redux-persist/integration/react'
import DefaultModal from './components/DefaultModal'
import Foooter from './components/Footer/Foooter'
// import Dice from './pages/rollDice'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
        <DefaultModal />
        {/* <Dice/> */}
        <Foooter/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
