import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Layout from './components/Layout';
import Contact from './components/Contact';
import MainPage from './components/MainPage';
import './App.css';

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
