import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
     <NavBar/>
     <br/>
     <br/>
     <ItemListContainer  greeting='Bienvenido(a) seleciona tu equipo a comprar'/>
    </div>
  );
}
export default App;
