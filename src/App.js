import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MusicPage from './components/MusicPage/MusicPage'
import MusicItem from './components/MusicPage/MusicItem/MusicItem'
import ArtistPage from './components/ArtistPage/ArtistPage'
import ArtistAlbum from './components/ArtistPage/ArtistAlbum/ArtistAlbum'
import SavedMusic from './components/SavedMusic/SavedMusic'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {useState,useEffect,useContext} from 'react'
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
      <Route path="/music/" element={<MusicPage />} />
      <Route path="/music/:id" element={<MusicItem />} />
      <Route path="/artists/" element={<ArtistPage />} />
      <Route path="/artists/album/:name/:id" element={<ArtistAlbum />} />
      <Route path="/mySavedMusic/" element={<SavedMusic />} />
      </Routes>
      
      <Footer />
      
    </div>
</MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
