import './App.css';
import DrawerAppBar from './components/Appbar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <DrawerAppBar />
      <Main /><br />
      <Footer />
    </div>
  );
}

export default App;
