import MusicSlider  from './../MusicSlider/MusicSlider'
import MusicHome from './../MusicHome/MusicHome'
import {useState,useEffect,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { Bars } from 'react-loader-spinner'



const Home = ()=>{
	 const [loader,setLoader] = useState(true)
	 	const { playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song} = useContext(MyContext);


	 	useEffect(() => {
  const preloadMedia = () => {
    const mediaPromises = tracks.map((track) => {
      return Promise.all([
        new Promise((resolve, reject) => {
          const image = new Image();
          image.src = track.backG;
          image.onload = resolve;
          image.onerror = reject;
        }),
        new Promise((resolve, reject) => {
          const artist = new Image();
          artist.src = track.artistPhoto
          artist.onload = resolve;
          artist.onerror = reject;
        })
      ]);
    });

    Promise.all(mediaPromises)
      .then(() => {
    
      	setLoader(false);
   
      })
      .catch((error) => {
        console.error('Failed to preload media:', error);
     
       	setLoader(false);
   
      });
  };

  preloadMedia();
}, [tracks]);

	return (
		<>
		{loader 

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