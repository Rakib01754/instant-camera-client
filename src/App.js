import './App.css';
import Routes from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes></Routes>
    </div>
  );
}

export default App;
