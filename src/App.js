import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { LoadingScreen } from './components/LoadingScreen';
import './App.css';

function App() {
  const MainPageComponent = React.lazy(() => import('./components/MainPage'))
  const AboutComponent = React.lazy(() => import('./components/About'))
  const ContactComponent = React.lazy(() => import('./components/Contact'))

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
