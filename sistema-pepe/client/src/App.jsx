import { AuthProvider } from './routes'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
