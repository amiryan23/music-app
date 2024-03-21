import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
// import Footer from './components/Footer/Footer'
// import Home from './components/Home/Home'
// import MusicPage from './components/MusicPage/MusicPage'
// import MusicItem from './components/MusicPage/MusicItem/MusicItem'
// import ArtistPage from './components/ArtistPage/ArtistPage'
// import ArtistAlbum from './components/ArtistPage/ArtistAlbum/ArtistAlbum'
// import SavedMusic from './components/SavedMusic/SavedMusic'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import React,{useState,useEffect,useContext,Suspense} from 'react'
import { MyContextProvider } from './Context/TrackContext';
import { ColorRing } from 'react-loader-spinner'

const Header = React.lazy(() => import('./components/Header/Header'));
// const SideBar = React.lazy(() => import('./components/SideBar/SideBar'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Home = React.lazy(() => import('./components/Home/Home'));
const MusicPage = React.lazy(() => import('./components/MusicPage/MusicPage'));
const MusicItem = React.lazy(() => import('./components/MusicPage/MusicItem/MusicItem'));
const ArtistPage = React.lazy(() => import('./components/ArtistPage/ArtistPage'));
const ArtistAlbum = React.lazy(() => import('./components/ArtistPage/ArtistAlbum/ArtistAlbum'));
const SavedMusic = React.lazy(() => import('./components/SavedMusic/SavedMusic'));


function App() {
  const [open,setOpen] = useState(false)





  

  return (
    <BrowserRouter>
<MyContextProvider>
    <div className="App">
      <Header open={open} setOpen={setOpen}/>
     {open ? <SideBar open={open} setOpen={setOpen} /> : ""}
     <Suspense fallback={<div className="loading">
       <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#222', '#222' , '#222']}
          />
     </div>}>
      <Routes >
      
      <Route path="/" element={<Home />} />
      <Route path="/music/" element={<MusicPage />} />
      <Route path="/music/:id" element={<MusicItem />} />
      <Route path="/artists/" element={<ArtistPage />} />
      <Route path="/artists/album/:name/:id" element={<ArtistAlbum />} />
      <Route path="/mySavedMusic/" element={<SavedMusic />} />
      
      </Routes>
      </Suspense>
      <Footer />
      
    </div>
</MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
