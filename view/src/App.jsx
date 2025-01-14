import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import ROUTES from './Routes/routes'
const routes = createBrowserRouter(ROUTES)

function App() {


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
