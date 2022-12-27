import './App.css';
import Empleado from './components/Empleado'

function App() {
  return (
    <div className="App">
      <div className='container d-flex d-flex flex-row justify-content-center gap-5 mt-5'>
        <Empleado         
        imagen='Empleado1'
        nombre="Avril"
        cargo="Becaria"
        />
        <Empleado         
        imagen='Empleado2'
        nombre="Chester"
        cargo="CEO"
        />
        <Empleado         
        imagen='Empleado3'
        nombre="Mike"
        cargo="CTO"
        />
      </div>
    </div>
  );
}

export default App;