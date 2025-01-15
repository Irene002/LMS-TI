import Home from '../Pages/Home'
import About from '../Pages/About'
import PembelajaranDetail from '../Pages/MethodePembelajaran/PembelajaranDetail'
import { Routes, Route } from 'react-router-dom'

const Routing = () => {

  const RouteLinks = [
    { path: '/', component: <Home /> },
    { path: '/About', component: <About /> },
    { path: '/pembelajaran/:description', component: <PembelajaranDetail /> },
  ]
  return (
    <>
      <Routes>
        {RouteLinks.map((value, index) => (
          <Route key={index} path={value.path} element={value.component}></Route>
        ))}
      </Routes>
    </>
  )
}

export default Routing;