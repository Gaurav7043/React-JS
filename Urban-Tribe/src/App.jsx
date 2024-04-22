import './App.css'
import Router from './Router/Router'
import { ToastContainer } from "react-toastify"

export default function App() {

  return (
    <>
      <div>
        <Router />
      </div>
      <ToastContainer />
    </>
  )
}
