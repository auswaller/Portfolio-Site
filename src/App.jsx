import PageNav from './components/PageNav';
import PageFoot from './components/PageFoot';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <PageNav />
      <Outlet />
      <PageFoot />
    </>
  );
}

export default App