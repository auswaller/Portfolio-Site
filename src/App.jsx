import PageNav from './components/PageNav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
}

export default App