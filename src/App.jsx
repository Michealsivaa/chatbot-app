import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from "./routes/routes";
import './App.css';
import { createContext, useState } from 'react';
import Breadcrumbs from './components/Breadcrumbs/breadCrumbs';


export const MyContextApi = createContext("");


function App() {
  console.warn = console.error = () => null;
  const [selectRadio, setSelectedRadio] = useState("");

  return (
    <>
      <BrowserRouter>
        <MyContextApi.Provider value={{selectRadio, setSelectedRadio}}>
          <Routes />
        </MyContextApi.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
