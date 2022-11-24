import './App.css';
import Routes from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Routes></Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
