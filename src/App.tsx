import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import { ThemeProvider } from './context/theme-provider'
import Dashboard from './pages/Dashboard'
import City from './pages/City'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const App = () => {
 

  return (
    <div>
      <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    
    </div>
  )
}

export default App