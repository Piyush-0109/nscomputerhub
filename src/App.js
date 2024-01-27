import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Layout from './components/Layout';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
