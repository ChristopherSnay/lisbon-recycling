import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="container w-100 d-flex flex-column">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
