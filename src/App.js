import { BrowserRouter } from 'react-router-dom'
import Route from './routes.js'
import HeaderPage from './components/header/index.js'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Route />
    </BrowserRouter>
  )
}

export default App
