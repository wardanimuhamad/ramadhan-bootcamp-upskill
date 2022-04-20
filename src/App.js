import './App.css';
import './Assets/css/utilities.css';
import './Assets/css/homepage.css';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
