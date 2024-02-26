import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes/routes";
import './App.css';

function App() {
  console.warn = console.error = () => null;
  return (
    <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </>
  );
}

export default App;
