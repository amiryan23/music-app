import React, { createContext, useState ,useCallback ,useRef,useEffect , useMemo } from 'react';
import { useCookies} from 'react-cookie';
import TS_Fien from './../Songs/TSFien.mp3'
import AllofMe from './../Songs/AllofMe.mp3'
import DEGodP from './../Songs/DEGodP.mp3'
import CBbodakYellow from './../Songs/CBbodakYellow.mp3'
import PMrockstar from './../Songs/PMrockstar.mp3'
import Еlose from './../Songs/Еlose.mp3'
import tuPacAll from './../Songs/tuPacAll.mp3'
import JayZp from './../Songs/JayZp.mp3'
import Nwa from './../Songs/Nwa.mp3'
import BIGjuicy from './../Songs/BIGjuicy.mp3'
import TSsickM from './../Songs/TSsickM.mp3'
import TSgooseb from './../Songs/TSgooseb.mp3'
import KWstronger from './../Songs/KWstronger.mp3'
import LWamilli from './../Songs/LWamilli.mp3'
import PMcircles from './../Songs/PMcircles.mp3'
import Etrss from './../Songs/Etrss.mp3'
import MBandTStrance from './../Songs/MBandTStrance.mp3'




// Создаем контекст
const MyContext = createContext();

// Создаем провайдер контекста
const MyContextProvider = ({ children }) => {

   // const allTracks = JSON.parse(localStorage.getItem('allTracks')) 

  const [tracks, setTracks] = useState(
    [
    {id:0,songName:"21 Savage - All of me",song:AllofMe,backG:"https://wallpapers.com/images/hd/21-savage-streetzfest-2k18-o70nt8nefuuq9rpv.jpg",mode: "newschool",artist:"21 Savage",artistPhoto:"https://assets-global.website-files.com/65b300512ced7cf5a4ad20ab/65d7c107f2d38ce9d8e883db_21%20Savage.jpg",albumBackG:"https://wallpapers.com/images/hd/21-savage-background-qg5awte81mi00i8u.jpg"},
    {id:1,songName:"Travis Scott - Fe!n",song:TS_Fien,backG:"https://i.pinimg.com/originals/a9/a7/29/a9a729f26baddd99af9d2cdb9da36961.jpg",mode: "newschool",artist:"Travis Scott",artistPhoto:"https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-018166785ff8ed3e47c6e014e0f58618be107ddf.jpg",albumBackG:"https://i.pinimg.com/originals/a9/a7/29/a9a729f26baddd99af9d2cdb9da36961.jpg"},
    {id:2,songName:"2Pac - All Eyez On Me",song:tuPacAll,backG:"https://e0.pxfuel.com/wallpapers/1001/383/desktop-wallpaper-2pac-background-tupac.jpg",mode: "oldschool",artist:"2Pac",artistPhoto:"https://cdn.prod.www.spiegel.de/images/6dbf3ec7-0001-0004-0000-000000682110_w1200_r1_fpx42.63_fpy50.jpg"},
    {id: 3, songName: "Eminem - Lose Yourself", song:Еlose, backG: "https://upload.wikimedia.org/wikipedia/en/d/d6/Lose_Yourself.jpg", mode: "oldschool",artist:"Eminem",artistPhoto:"https://pbs.twimg.com/profile_images/1571096890938212352/Pud9XpLp_400x400.jpg"},
    {id: 4, songName: "Drake - God's Plan", song:DEGodP, backG: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5", mode: "newschool",artist:"Drake",artistPhoto:"https://pyxis.nymag.com/v1/imgs/be9/a0a/13c5454a5667c3964f6d39e1e4f1a3eec1-31-drake.rsquare.w400.jpg"},
    {id: 5, songName: "Cardi B - Bodak Yellow", song:CBbodakYellow, backG: "https://upload.wikimedia.org/wikipedia/en/4/48/Cardi_B_-_Bodak_Yellow.png", mode: "newschool",artist:"21 Savage"},
    {id: 6, songName: "Post Malone - Rockstar", song:PMrockstar, backG: "https://i1.sndcdn.com/artworks-000278300330-cmnuzz-t500x500.jpg", mode: "newschool",artist:"21 Savage"},
    {id: 7, songName: "Jay-Z - 99 Problems", song:JayZp, backG: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Jay-Z_-_99_Problems%2BDirt_Off_Your_Shoulder_%28CD2%29.jpg/220px-Jay-Z_-_99_Problems%2BDirt_Off_Your_Shoulder_%28CD2%29.jpg", mode: "oldschool",artist:"21 Savage"},
    {id: 8, songName: "N.W.A - Straight Outta Compton", song:Nwa, backG: "https://upload.wikimedia.org/wikipedia/en/8/84/StraightOuttaComptonN.W.A..jpg", mode: "oldschool",artist:"21 Savage"},
    {id: 9, songName: "Biggie Smalls - Juicy", song:BIGjuicy, backG: "https://www.thisisdig.com/wp-content/uploads/2021/08/Juicy.jpg", mode: "oldschool",artist:"Biggie Smalls",artistPhoto:"https://pbs.twimg.com/profile_images/1003375115390849030/9ZXXfw31_400x400.jpg"},
    {id: 10, songName: "Travis Scott - SICKO MODE", song:TSsickM, backG: "https://i1.sndcdn.com/artworks-fHz0TehPvqo9-0-t500x500.jpg", mode: "newschool",artist:"Travis Scott"},
    {id: 11, songName: "Kanye West - Stronger", song:KWstronger, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/db/2c/2fdb2c9d-171c-c6dc-57ee-4bae2b4bb11a/07UMGIM12671.rgb.jpg/400x400cc.jpg", mode: "newschool",artist:"21 Savage"},
    {id: 12, songName: "Lil Wayne - A Milli", song:LWamilli, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7d/63/39/7d6339c5-6ce7-7cf6-5f5b-6f3f3f478817/08UMGIM10308.rgb.jpg/400x400cc.jpg", mode: "oldschool",artist:"21 Savage"},
    {id: 13, songName: "Post Malone - Circles", song:PMcircles, backG: "https://i.ytimg.com/vi/x9ahMkugiEA/hqdefault.jpg", mode: "newschool",artist:"21 Savage"},
    {id: 14, songName: "Eminem - The Real Slim Shady", song:Etrss, backG: "https://i.ebayimg.com/images/g/6uQAAOSwaztiDoPR/s-l400.jpg", mode: "oldschool",artist:"Eminem"},
    {id: 15, songName: "Travis Scott - Goosebumps", song:TSgooseb, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/50/f7/a3/50f7a39d-3bd5-28e9-0264-532f08b5b810/886446074726.jpg/400x400cc.jpg", mode: "newschool",artist:"Travis Scott"},
    {id: 16, songName: "Travis Scott & Young Thug - Trance", song:MBandTStrance, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6e/fc/48/6efc48ad-d371-c4d6-62ff-1655c2be943d/22UM1IM40165.rgb.jpg/400x400cc.jpg", mode: "newschool",artist:"Travis Scott"}
    ]
    );

 

//   useEffect(()=>{
//     if(!loaderMusic){
//      localStorage.setItem('allTracks', JSON.stringify(
//       [
//     {id:0,songName:"21 Savage - All of me",song:AllofMe,backG:"https://wallpapers.com/images/hd/21-savage-streetzfest-2k18-o70nt8nefuuq9rpv.jpg",mode: "newschool",artist:"21 Savage",artistPhoto:"https://assets-global.website-files.com/65b300512ced7cf5a4ad20ab/65d7c107f2d38ce9d8e883db_21%20Savage.jpg",albumBackG:"https://wallpapers.com/images/hd/21-savage-background-qg5awte81mi00i8u.jpg"},
//     {id:1,songName:"Travis Scott - Fe!n",song:TS_Fien,backG:"https://i.pinimg.com/originals/a9/a7/29/a9a729f26baddd99af9d2cdb9da36961.jpg",mode: "newschool",artist:"Travis Scott",artistPhoto:"https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-018166785ff8ed3e47c6e014e0f58618be107ddf.jpg",albumBackG:"https://i.pinimg.com/originals/a9/a7/29/a9a729f26baddd99af9d2cdb9da36961.jpg"},
//     {id:2,songName:"2Pac - All Eyez On Me",song:tuPacAll,backG:"https://e0.pxfuel.com/wallpapers/1001/383/desktop-wallpaper-2pac-background-tupac.jpg",mode: "oldschool",artist:"2Pac",artistPhoto:"https://cdn.prod.www.spiegel.de/images/6dbf3ec7-0001-0004-0000-000000682110_w1200_r1_fpx42.63_fpy50.jpg"},
//     {id: 3, songName: "Eminem - Lose Yourself", song:Еlose, backG: "https://upload.wikimedia.org/wikipedia/en/d/d6/Lose_Yourself.jpg", mode: "oldschool",artist:"Eminem",artistPhoto:"https://pbs.twimg.com/profile_images/1571096890938212352/Pud9XpLp_400x400.jpg"},
//     {id: 4, songName: "Drake - God's Plan", song:DEGodP, backG: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5", mode: "newschool",artist:"Drake",artistPhoto:"https://pyxis.nymag.com/v1/imgs/be9/a0a/13c5454a5667c3964f6d39e1e4f1a3eec1-31-drake.rsquare.w400.jpg"},
//     {id: 5, songName: "Cardi B - Bodak Yellow", song:CBbodakYellow, backG: "https://upload.wikimedia.org/wikipedia/en/4/48/Cardi_B_-_Bodak_Yellow.png", mode: "newschool",artist:"21 Savage"},
//     {id: 6, songName: "Post Malone - Rockstar", song:PMrockstar, backG: "https://i1.sndcdn.com/artworks-000278300330-cmnuzz-t500x500.jpg", mode: "newschool",artist:"21 Savage"},
//     {id: 7, songName: "Jay-Z - 99 Problems", song:JayZp, backG: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Jay-Z_-_99_Problems%2BDirt_Off_Your_Shoulder_%28CD2%29.jpg/220px-Jay-Z_-_99_Problems%2BDirt_Off_Your_Shoulder_%28CD2%29.jpg", mode: "oldschool",artist:"21 Savage"},
//     {id: 8, songName: "N.W.A - Straight Outta Compton", song:Nwa, backG: "https://upload.wikimedia.org/wikipedia/en/8/84/StraightOuttaComptonN.W.A..jpg", mode: "oldschool",artist:"21 Savage"},
//     {id: 9, songName: "Biggie Smalls - Juicy", song:BIGjuicy, backG: "https://www.thisisdig.com/wp-content/uploads/2021/08/Juicy.jpg", mode: "oldschool",artist:"Biggie Smalls",artistPhoto:"https://pbs.twimg.com/profile_images/1003375115390849030/9ZXXfw31_400x400.jpg"},
//     {id: 10, songName: "Travis Scott - SICKO MODE", song:TSsickM, backG: "https://i1.sndcdn.com/artworks-fHz0TehPvqo9-0-t500x500.jpg", mode: "newschool",artist:"Travis Scott"},
//     {id: 11, songName: "Kanye West - Stronger", song:KWstronger, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/db/2c/2fdb2c9d-171c-c6dc-57ee-4bae2b4bb11a/07UMGIM12671.rgb.jpg/400x400cc.jpg", mode: "newschool",artist:"21 Savage"},
//     {id: 12, songName: "Lil Wayne - A Milli", song:LWamilli, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7d/63/39/7d6339c5-6ce7-7cf6-5f5b-6f3f3f478817/08UMGIM10308.rgb.jpg/400x400cc.jpg", mode: "oldschool",artist:"21 Savage"},
//     {id: 13, songName: "Post Malone - Circles", song:PMcircles, backG: "https://i.ytimg.com/vi/x9ahMkugiEA/hqdefault.jpg", mode: "newschool",artist:"21 Savage"},
//     {id: 14, songName: "Eminem - The Real Slim Shady", song:Etrss, backG: "https://i.ebayimg.com/images/g/6uQAAOSwaztiDoPR/s-l400.jpg", mode: "oldschool",artist:"Eminem"},
//     {id: 15, songName: "Travis Scott - Goosebumps", song:TSgooseb, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/50/f7/a3/50f7a39d-3bd5-28e9-0264-532f08b5b810/886446074726.jpg/400x400cc.jpg", mode: "newschool",artist:"Travis Scott"},
//     {id: 16, songName: "Travis Scott & Young Thug - Trance", song:MBandTStrance, backG: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6e/fc/48/6efc48ad-d371-c4d6-62ff-1655c2be943d/22UM1IM40165.rgb.jpg/400x400cc.jpg", mode: "newschool",artist:"Travis Scott"}
//     ]
//       ));
// }
//   },[])

  const savedMusicStorage = JSON.parse(localStorage.getItem('savedMusics'))

  const [savedTracks,setSavedTracks] = useState(savedMusicStorage ? savedMusicStorage : [])

const [playing,setPlaying] = useState(false)
const [index,setIndex] = useState(0)
const [playingSong,setPlayingSong] = useState(false)
const [addedFavorite,setAddedFavorite] = useState(false)
const [cookies, setCookie] = useCookies(['activeLink']);
const [activeLink,setActiveLink] = useState(cookies.activeLink ? cookies.activeLink : '/')
const [randomMusic,setRandomMusic] = useState(false)
const [loaderMusic,setLoaderMusic] = useState(true)
const [loaderImage,setLoaderImage] = useState(false)

const song = useRef()

  
const saveMusicToFavorite = useMemo(() => (id) => {
    const updatedSavedTracks = [...savedTracks];
    const isNewTrack = updatedSavedTracks.every(track => track.id !== tracks[id].id);
    if (isNewTrack) {
      updatedSavedTracks.push(tracks[id]);
      setSavedTracks(updatedSavedTracks);
      localStorage.setItem('savedMusics', JSON.stringify(updatedSavedTracks));
    }
    setAddedFavorite(true);
    setTimeout(() => { setAddedFavorite(false) }, 350);
  }, [tracks, savedTracks, setSavedTracks, setAddedFavorite]);

  const removeMusicToFavorite = useMemo(() => (id) => {
    const updatedSavedTracks = savedTracks.filter(track => track.id !== id);
    setSavedTracks(updatedSavedTracks);
    localStorage.setItem('savedMusics', JSON.stringify(updatedSavedTracks));
  }, [savedTracks, setSavedTracks]);

  
 const changedPath = useMemo(() => (path) => {
    setActiveLink(path);
    setCookie('activeLink', path, { path: '/' });
  }, [setActiveLink, setCookie]);

 const handlerPlaying = useMemo(() => () => {
    song.current.pause();
    if (!playing) {
      song.current.play();
    } else {
      song.current.pause();
    }
  }, [playing, song]);


  const handlerNextMusic = useMemo(() => () => {
    let randomMusicIndex = Math.floor(Math.random() * tracks.length);
    if (index < tracks.length - 1) {
      if (randomMusic) {
        setIndex(randomMusicIndex);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
      if (playing) {
        setTimeout(() => { song.current.play() }, 10);
      } else {
        setPlaying(false);
      }
    }
    if (index === tracks.length - 1) {
      setIndex(0);
      if (randomMusic) {
        setIndex(randomMusicIndex);
      }
      if (playing) {
        setTimeout(() => { song.current.play() }, 10);
      } else {
        setPlaying(false);
      }
    }
    song.current.pause();
    song.current.currentTime = 0;
  }, [index, tracks, playing, randomMusic, setIndex, song]);

  const handlerPrevMusic = useMemo(() => () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      if (playing) {
        setTimeout(() => { song.current.play() }, 10);
      } else {
        setPlaying(false);
      }
    }
    if (index === 0) {
      setIndex(tracks.length - 1);
      if (playing) {
        setTimeout(() => { song.current.play() }, 10);
      } else {
        setPlaying(false);
      }
    }
    song.current.pause();
    song.current.currentTime = 0;
  }, [index, tracks, playing, setIndex, song]);

  const changeRandom = useMemo(() => () => {
    setRandomMusic((prevRandomMusic) => !prevRandomMusic);
  }, [setRandomMusic]);
 

  return (
    <MyContext.Provider value={{ song,tracks, playingSong,setPlayingSong,setTracks ,playing ,setPlaying,handlerPlaying,index,setIndex,handlerNextMusic,handlerPrevMusic,changedPath,activeLink,savedTracks,setSavedTracks,saveMusicToFavorite,removeMusicToFavorite,addedFavorite,changeRandom,randomMusic,loaderMusic,setLoaderMusic,loaderImage,setLoaderImage}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };