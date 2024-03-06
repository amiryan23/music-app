import React, { createContext, useState ,useCallback ,useRef } from 'react';
import TS_Fien from './../Songs/TSFien.mp3'
import AllofMe from './../Songs/AllofMe.mp3'
import DEGodP from './../Songs/DEGodP.mp3'
import CBbodakYellow from './../Songs/CBbodakYellow.mp3'
import PMrockstar from './../Songs/PMrockstar.mp3'
import Еlose from './../Songs/Еlose.mp3'
import JayZp from './../Songs/JayZp.mp3'
import Nwa from './../Songs/Nwa.mp3'
// Создаем контекст
const MyContext = createContext();

// Создаем провайдер контекста
const MyContextProvider = ({ children }) => {
  const [tracks, setTracks] = useState([
    {id:0,songName:"21 Savage - All of me",song:AllofMe,backG:"https://wallpapers.com/images/hd/21-savage-streetzfest-2k18-o70nt8nefuuq9rpv.jpg",mode: "newschool"},
    {id:1,songName:"Travis Scott - f!en",song:TS_Fien,backG:"https://i.pinimg.com/originals/a9/a7/29/a9a729f26baddd99af9d2cdb9da36961.jpg",mode: "newschool"},
    {id:2,songName:"2Pac - All Eyez On Me",backG:"https://e0.pxfuel.com/wallpapers/1001/383/desktop-wallpaper-2pac-background-tupac.jpg",mode: "oldschool"},
    {id: 3, songName: "Eminem - Lose Yourself", song:Еlose, backG: "https://upload.wikimedia.org/wikipedia/en/d/d6/Lose_Yourself.jpg", mode: "oldschool"},
    {id: 4, songName: "Drake - God's Plan", song:DEGodP, backG: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5", mode: "newschool"},
    {id: 5, songName: "Cardi B - Bodak Yellow", song:CBbodakYellow, backG: "https://upload.wikimedia.org/wikipedia/en/4/48/Cardi_B_-_Bodak_Yellow.png", mode: "newschool"},
    {id: 6, songName: "Post Malone - Rockstar", song:PMrockstar, backG: "https://i1.sndcdn.com/artworks-000278300330-cmnuzz-t500x500.jpg", mode: "newschool"},
    {id: 7, songName: "Jay-Z - 99 Problems", song:JayZp, backG: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Jay-Z_-_99_Problems%2BDirt_Off_Your_Shoulder_%28CD2%29.jpg/220px-Jay-Z_-_99_Problems%2BDirt_Off_Your_Shoulder_%28CD2%29.jpg", mode: "oldschool"},
    {id: 8, songName: "N.W.A - Straight Outta Compton", song:Nwa, backG: "https://upload.wikimedia.org/wikipedia/en/8/84/StraightOuttaComptonN.W.A..jpg", mode: "oldschool"},
    {id: 9, songName: "Biggie Smalls - Juicy", song: '', backG: "https://example.com/eminem.jpg", mode: "oldschool"},
    {id: 10, songName: "Travis Scott - SICKO MODE", song: '', backG: "https://example.com/taylor-swift.jpg", mode: "newschool"},
    {id: 11, songName: "Kanye West - Stronger", song: '', backG: "https://example.com/kanye-west.jpg", mode: "newschool"},
    {id: 12, songName: "Lil Wayne - A Milli", song: '', backG: "https://example.com/lil-wayne.jpg", mode: "oldschool"},
    {id: 13, songName: "Post Malone - Circles", song: '', backG: "https://example.com/post-malone.jpg", mode: "newschool"},
    {id: 14, songName: "Eminem - The Real Slim Shady", song: '', backG: "https://example.com/eminem-2.jpg", mode: "oldschool"},
    {id: 15, songName: "Travis Scott - Goosebumps", song: '', backG: "https://example.com/travis-scott-2.jpg", mode: "newschool"},
    ]);

const [playing,setPlaying] = useState(false)
const [index,setIndex] = useState(0)
const [playingSong,setPlayingSong] = useState(false)
const [activeLink,setActiveLink] = useState('/')

const song = useRef()

  const changedPath = (path) =>{
      setActiveLink(path)
  }

 const handlerPlaying = ()=>{
  
  
  song.current.pause()
  if(!playing ){
    song.current.play()

    } else (song.current.pause())

 }

 const handlerNextMusic = ()=>{
  if(index < tracks.length - 1){
    setIndex((prevIndex)=>index + 1)
  }
  setPlaying((prevPlaying)=>false)
    song.current.pause()
    song.current.currentTime = 0
  
 }

  const handlerPrevMusic = ()=>{
  if(index > 0){
    setIndex((prevIndex)=>index - 1)
  }

  setPlaying((prevPlaying)=>false)
  song.current.pause()
  song.current.currentTime = 0
 }

 const playThisSong = (thisIndex)=>{
    setIndex(thisIndex)
      setPlaying((prevPlaying)=>!prevPlaying)
  song.current.pause()
  if(!playing){
    song.current.play()

    } else (song.current.pause())

 }

 

  return (
    <MyContext.Provider value={{ song,tracks, playingSong,setPlayingSong,setTracks ,playing ,setPlaying,handlerPlaying,index,setIndex,handlerNextMusic,handlerPrevMusic,playThisSong,changedPath,activeLink }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };