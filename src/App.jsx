
import Homepage from './component/Homepage'
import Login from './component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route Component={Login} path={"/PaymentGateway"}/>
        <Route Component={Homepage} path={"/PaymentGateway/home"}/>

      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
