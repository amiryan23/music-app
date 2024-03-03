import s from './Player.module.css'
import { GrChapterPrevious,GrChapterNext  } from "react-icons/gr";
import { FaPlay,FaPause  } from "react-icons/fa";
import {useState,useEffect,useContext,useMemo,useRef,useCallback} from 'react'
import axios from 'axios';
import { MyContext } from './../../Context/TrackContext';


const Player = ()=>{
const { tracks, setTracks , song , playing , setPlaying ,playingSong,setPlayingSong, handlerPlaying,index,handlerNextMusic,handlerPrevMusic} = useContext(MyContext);
const [formattedTime, setFormattedTime] = useState('0:00');
const [totalTime, setTotalTime] = useState('0:00');
	
// const song = tracks.map(() => useRef());

useEffect(() => {
	song.current = null;
song.current = new Audio(tracks[index].song)

   	 const updateFormattedTime = () => {
      const currentMinutes = Math.floor(song.current.currentTime / 60);
      const currentSeconds = Math.floor(song.current.currentTime % 60);
      setFormattedTime(`${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`);

      const totalMinutes = Math.floor(song.current.duration / 60);
      const totalSeconds = Math.floor(song.current.duration % 60);
      setTotalTime(`${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`);
    };
 	
 	

    if (song.current) {
      song.current.addEventListener('timeupdate', updateFormattedTime);

      return () => {
      	
      	if(song.current){
        song.current.removeEventListener('timeupdate', updateFormattedTime);
      }
      };
    }
  }, [index]);



	const newTracks = useMemo(()=>{
		return tracks.map(m=> <><div key={m.id} className={s.content1}>{m.songName}</div>
			<audio id={m.id} className={s.track} ref={song}  controls>
       <source src={m.song} type="audio/mp3" />
      		</audio>
      		</> )
	},[tracks,setTracks,playing,index])

  const handleClickOnMiniContent = (event) => {
    const progressBar = event.currentTarget;
    const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
    const percentage = clickPosition / progressBar.clientWidth;
    const newTime = percentage * song.current?.duration;
    song.current.currentTime = newTime;
  };

  useEffect(()=>{
  
  	if(playingSong){
  		setTimeout(()=>{song.current.play()},10)
  	}
  },[playingSong])


	return (
			<>
			{newTracks[index]}
			<div className={s.content2}>
			<div className={s.miniBlock1}>{formattedTime}</div>
			<div className={s.miniBlock2} onClick={handleClickOnMiniContent}>
				<div className={s.miniContent} style={{ width: `${(song.current?.currentTime / song.current?.duration) * 100}%` }}
				></div>
			</div>
			<div className={s.miniBlock3}>{totalTime}</div>
			</div>
			<div className={s.content3}>
				<GrChapterPrevious onClick={()=>{handlerPrevMusic()}} size="20" color="whitesmoke"/>
				{playing 
				? <FaPause onClick={()=>{
					setPlaying((prevPlaying)=>!prevPlaying)
					handlerPlaying()

				}} size="20" color="whitesmoke"/> 
				: <FaPlay onClick={()=>{
					setPlaying((prevPlaying)=>!prevPlaying)
					handlerPlaying()
				}
				} size="20" color="whitesmoke"/> }
				<GrChapterNext onClick={()=>{handlerNextMusic() 
				console.log(song)}} size="20" color="whitesmoke"/>
			</div>
			</>
		)
}

export default Player