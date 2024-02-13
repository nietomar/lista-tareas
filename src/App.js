import './App.css';
import logo from './img/freecodecamp-logo.png'
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <img className='logo' src={logo} alt="Logo de freecodecamp" />
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
