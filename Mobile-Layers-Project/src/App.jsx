import { ToastContainer } from "react-toastify";
import './App.css'
import ProtectedRouter from "./Router/ProtectedRouter";

function App() {
  return (
    <>
      <div>
        <ProtectedRouter />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
