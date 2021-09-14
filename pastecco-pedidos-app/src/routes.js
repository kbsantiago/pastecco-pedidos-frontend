import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
// import Cardapio from './pages/Cardapio'

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      {/* <Route component={Cardapio} path='/cardapio' /> */}
    </BrowserRouter>
  )
}

export default Routes