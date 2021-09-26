import './App.css';
import Header from './Components/Header/Header';
import Vaccines from './Components/Vaccines/Vaccines';

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header></Header>
      {/* Vaccines and cost component */}
      <Vaccines></Vaccines>
    </div>
  );
}

export default App;
