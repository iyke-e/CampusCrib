
import './App.css'
import ThemeMode from './components/ThemeMode'
import { Router } from './routes/Router'

function App() {

  return (
    <div className='bg-background min-h-screen'>

      <Router />
      <ThemeMode />

    </div>
  )
}

export default App
