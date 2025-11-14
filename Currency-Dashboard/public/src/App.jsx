import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/dashBoard/DashBoard'
import Transaction from '../src/pages/transcation/Transaction.jsx'
import Support from '../src/pages/support/Support.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DashBoard />,
    },
    {
      path: '/transaction',
      element: <Transaction />,
    },
    {
      path: '/support',
      element: <Support />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    
    </>
  )
}

export default App
