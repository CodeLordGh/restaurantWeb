import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:searchTerm' element={<Home />} />
        <Route path='/tag/:tag' element={<Home />} />
    </Routes>
  )
}

export default AppRoutes