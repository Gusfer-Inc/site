import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/App';
import Page from './pages/404';
import Github from './pages/Github';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={< Main />} />
            <Route path="/github" element={<Github />} />
            <Route path="*" element={<Page />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
