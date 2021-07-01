import './styles/main.css'
import Home from './components/home'
import Meal from './pages/Meal'

function App() {
  return (
    <div >
      <Home />
      {/* this is the meal page below*/}
      <Meal />
    </div>
  );
}

export default App;
