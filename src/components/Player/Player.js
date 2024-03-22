import s from './Player.module.css'
import { GrChapterPrevious,GrChapterNext  } from "react-icons/gr";
import { FaPlay,FaPause,FaRandom  } from "react-icons/fa";
import React,{useState,useEffect,useContext,useMemo,useRef,useCallback} from 'react'
import axios from 'axios';
import { MyContext } from './../../Context/TrackContext';
import { Bars } from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import { MdFavoriteBorder,MdOutlineFavorite } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { ColorRing } from 'react-loader-spinner'




const Player = React.memo(()=>{
const { tracks, setTracks , song , playing , setPlaying ,playingSong,setPlayingSong, handlerPlaying,index,setIndex,handlerNextMusic,handlerPrevMusic,changedPath,savedTracks,saveMusicToFavorite,removeMusicToFavorite,changeRandom,randomMusic} = useContext(MyContext);
const [formattedTime, setFormattedTime] = useState('0:00');
const [totalTime, setTotalTime] = useState('0:00');
const [playListIndex,setPlayListIndex] = useState(savedTracks.length - 1)
const [loading,setLoading] = useState(true)


     const handleClickOnMiniContent = useMemo(() =>  (event) => {
    const progressBar = event.currentTarget;
    const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
    const percentage = clickPosition / progressBar.clientWidth;
    const newTime = percentage * song.current?.duration;
      if (song.current.readyState >= 4){
          song.current.currentTime = newTime;
        }
  }, [song.current,index]);

  const updateFormattedTime = useMemo(() => () => {
    const currentMinutes = Math.floor(song.current.currentTime / 60);
    const currentSeconds = Math.floor(song.current.currentTime % 60);
    setFormattedTime(`${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`);

    const totalMinutes = Math.floor(song.current.duration / 60);
    const totalSeconds = Math.floor(song.current.duration % 60);
    setTotalTime(`${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`);
  }, [song.current,index]);

useEffect(() => {
	song.current = null;
song.current = new Audio(tracks[index].song)


   	 
 const handleunLoadedData = () => {
    setLoading(false)
    
  };

 	  const handleLoadedData = () => {
    setLoading(true)
   
  };

  const handleAudioEnded = () => {
    setTimeout(()=>{handlerNextMusic()},100) 
  };

 
    if (song.current) {
      song.current.addEventListener('timeupdate', updateFormattedTime);
      song.current.addEventListener('loadstart', handleunLoadedData);
     song.current.addEventListener('canplay', handleLoadedData);
     song.current.addEventListener('loadedmetadata', handleLoadedData);
     song.current.addEventListener('ended', handleAudioEnded);
  
  
}
      return () => {
      	
      	if(song.current){
        song.current.removeEventListener('timeupdate', updateFormattedTime);
        song.current.removeEventListener('loadstart', handleLoadedData);
      song.current.removeEventListener('canplay', handleLoadedData);
      song.current.removeEventListener('loadedmetadata', handleLoadedData);
      song.current.removeEventListener('ended', handleAudioEnded);
      
    
      
      }};
    
  }, [index]);

	useEffect(()=>{

  	if(playingSong && playing){
  		song.current.pause()
      setTimeout(()=>{song.current.play()},0)		
  	} 


  },[playing,playingSong,index])



	const newTracks = useMemo(()=>{
		return tracks.map(m=> <>
			<div key={m.id} className={s.content1}>
			<span className={s.miniItem1}></span>
			<span className={s.miniItem2}>{m.songName}</span>
			{playing ? <span className={s.miniItem1}> <Bars
  height="20"
  width="80"
  color="floralwhite"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /> </span> : <span className={s.miniItem1}></span>}</div>
			<audio id={m.id} className={s.track} ref={song} 
			preload="auto"
      controls>
       <source src={m.song} type="audio/mp3" />
      		</audio>
      		</> )
	},[tracks,playing,index,loading])





  // useEffect(()=>{
  // 
  // 	if(playingSong){
  // 		setTimeout(()=>{song.current.play()},10)
  // 	}
  // },[playingSong])
// 
//   useEffect(()=>{
//   	if(formattedTime === totalTime){
//   		handlerNextMusic()
//   		
//   		
// 
//   	}
//   },[formattedTime])




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
				<div className={s.block1}></div>
				<div className={s.block2}>
				<GrChapterPrevious onClick={()=>{handlerPrevMusic()}} size="20" color="whitesmoke"/>
				{loading
				? playing 
				? <FaPause onClick={()=>{
					setPlaying((prevPlaying)=>!prevPlaying)
					handlerPlaying()

				}} size="20" color="whitesmoke"/> 
				: <FaPlay onClick={()=>{
					setPlaying((prevPlaying)=>!prevPlaying)
					handlerPlaying()
				}
				} size="20" color="whitesmoke"/> 
				: <ColorRing
				  visible={true}
				  height="20"
				  width="20"
				  ariaLabel="color-ring-loading"
				  wrapperStyle={{}}
				  wrapperClass="color-ring-wrapper"
				  colors={['#999', '#222']}
				  />	}
				<GrChapterNext onClick={()=>{handlerNextMusic() 
				}} size="20" color="whitesmoke"/>
				</div>
				<div className={s.block3}>
				<span className={randomMusic ? `${s.randomActive} ${s.blockItem1}` : s.blockItem1}>
				<button className={s.randomMusic} onClick={changeRandom}><FaRandom /></button>
				</span>
				<span className={s.favoriteMusic}>
      {savedTracks.some(track => track.id === index)
      	? <button className={s.addedMusic} title="Remove to favorite musics" onClick={()=>{removeMusicToFavorite(index)}}><MdOutlineFavorite/></button>
      	: <button className={s.unaddedMusic} title="Add to favorite musics" onClick={()=>{saveMusicToFavorite(index)}}><MdFavoriteBorder/></button>
      }
      </span>
      <span className={s.saveMusic}>
      <Link title="Download" onClick={()=>{changedPath("/music/")}} to={`/music/${index}`}><IoMdDownload /></Link>
      
      </span>
				
				</div>
			</div>
			</>
		)
})

export default Player