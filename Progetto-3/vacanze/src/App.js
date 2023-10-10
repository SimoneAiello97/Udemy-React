import Cities from './components/Cities';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-dark text-white d-flex flex-column align-items-center">
      <h2 className='mb-0 pb-0'>Le Nostre Vacanze</h2>
      <div className='col-1 my-0'>
        <hr class="border border-primary border-3 opacity-75 "></hr>
        </div>
      <Cities/>
    </div>
  );
}

export default App;
