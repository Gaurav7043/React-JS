import { ToastContainer } from "react-toastify"
import './App.css'
import Router from "./Router/Router"

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
