import { Route, Routes } from 'react-router-dom';
import QuotePage from '@/pages/QuotePage/QuotePage';
// import PlanesPage from '@/pages/PlanesPage/PlanesPage';
// import ResumenPage from '@/pages/ResumenPage/ResumenPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuotePage />} />
      {/* <Route path="/planes" element={<PlanesPage />} />
      <Route path="/resumen" element={<ResumenPage />} />
      <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}

export default App
