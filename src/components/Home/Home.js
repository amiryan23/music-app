import MusicSlider  from './../MusicSlider/MusicSlider'
import MusicHome from './../MusicHome/MusicHome'
import {useState,useEffect,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { Bars } from 'react-loader-spinner'



const Home = ()=>{
	 
	 	const { playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song,loaderMusic,setLoaderMusic} = useContext(MyContext);


  useEffect(() => {
    if(!loaderMusic){
    const preloadTracks = () => {
      tracks.forEach(track => {
        const audio = new Audio(track.song);
        audio.preload = 'auto'; 
        setTimeout(()=>{setLoaderMusic(true)},500)
      });
    };

    preloadTracks(); 
  }
    return () => {
      
    };
  }, []);


	return (
		<>
		{!loaderMusic 

		? 
     
      <div className="loader">
        <Bars
  height="80"
  width="80"
  color="#821BB2 "
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
      </div>
      
      : <> 
      	<MusicSlider />
		<MusicHome /> 
		</>
		}
		</>
		)
}

export default Home 