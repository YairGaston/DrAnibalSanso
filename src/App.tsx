import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import '../src/globals.css'
import Home from './pages/Home'

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <main>
          <Home>
          </Home>
        </main>
      </Layout>
      
    </HelmetProvider>
  )
}

export default App