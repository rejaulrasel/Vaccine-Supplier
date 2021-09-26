import logo from './logo.svg';
import './App.css';
import Header from './Components/Vaccine-data/Header/Header';
import Vaccines from './Components/Vaccines/Vaccines';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Vaccines></Vaccines>
    </div>
  );
}

export default App;
