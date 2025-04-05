import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import { ThemeProvider } from './context/theme-provider'
import Dashboard from './pages/Dashboard'
import City from './pages/City'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ThemeProvider defaultTheme='dark'>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/city/:cityName' element={<City/>}/>
        </Routes>
      </Layout>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App