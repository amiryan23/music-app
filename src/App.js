import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'

import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MusicPage from './components/MusicPage/MusicPage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {useState} from 'react'
import { MyContextProvider } from './Context/TrackContext';

function App() {
  const [open,setOpen] = useState(false)
  return (
    <BrowserRouter>
<MyContextProvider>
    <div className="App">
      <Header open={open} setOpen={setOpen}/>
     {open ? <SideBar open={open} setOpen={setOpen} /> : ""}
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/music/*" element={<MusicPage />} />
      </Routes>
      <Footer />
    </div>
</MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
