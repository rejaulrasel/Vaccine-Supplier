import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Vaccines from './Components/Vaccines/Vaccines';

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header></Header>
      {/* Vaccines and cost component */}
      <Vaccines></Vaccines>
      <Footer></Footer>
    </div>
  );
}

export default App;
