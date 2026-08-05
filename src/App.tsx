import { Home } from './pages/Home'
import { Sources } from './pages/Sources'

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path =
    window.location.pathname.slice(base.length).replace(/\/+$/, '') || '/'
  return path === '/sources' ? <Sources /> : <Home />
}

export default App
