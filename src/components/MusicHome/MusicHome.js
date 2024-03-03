import s from './MusicHome.module.css'
import {useState,useEffect,useRef,useMemo,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { FaPlay,FaPause  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


const MusicHome = ()=>{

	const { playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song} = useContext(MyContext);

	
	const [playingIndex, setPlayingIndex] = useState(null);


useEffect(()=>{

  	if(playingSong && playing){
  		song.current.pause()
      setTimeout(()=>{song.current.play()},0)		
  		
  	}
  },[playing,playingSong,index])

	

		const newSchoolTracks = tracks
  .filter(track => track.mode === "newschool")
  .map(m => 
    <span key={m.id}  className={s.miniBlock2}>
      <span className={s.item1} style={{backgroundImage:`url(${m.backG})`}}>
      	{index === m.id && playing 
      	? <FaPause onClick={()=>{
      		setPlayingSong(false)
      		setPlaying((prevPlaying)=>false)
      		if(playing){
      		song.current.pause()
      	}
      
					
      	}}/> : <FaPlay onClick={()=>{
      		setPlayingSong(true)
      		setIndex(m.id)
      		setPlayingIndex(index)
      		
      		if(playing){
      			song.current.pause()
      		} else{
      			setPlaying((prevPlaying)=>true)
      		}

      	}}/>  }
      </span>
      <span className={s.item2}>{m.songName}</span>
       <span className={s.item3}>
       <a href={m.song} download={`${m.songName}.mp3`} ><IoMdDownload /></a>
       save
       </span>
    </span> )

    	const oldSchoolTracks = tracks
  .filter(track => track.mode === "oldschool")
  .map(m => 
    <span key={m.id} className={s.miniBlock2}>
      <span className={s.item1} style={{backgroundImage:`url(${m.backG})`}}>
      	{index === m.id && playing
      	? <FaPause onClick={()=>{
      		setPlayingSong(false)
      		setPlaying((prevPlaying)=>false)
      		if(playing){
      		song.current.pause()
      	}
      		
      		
      	}}/> : <FaPlay onClick={()=>{
      		setPlayingSong(true)
      		setIndex(m.id)
      		setPlayingIndex(index)
      		
      		if(playing){
      			song.current.pause()
      		} else{
      			setPlaying((prevPlaying)=>true)
      		}

      		
      		
      		
      	}}/>  }
      </span>
      <span className={s.item2}>{m.songName}</span>
      <span className={s.item3}>
      <a href={m.song} download={`${m.songName}.mp3`} ><IoMdDownload /></a>
      save
      </span>
    </span>
  );
	return (
		<div className={s.megaContainer}>
			<div className={s.content1}>
				<span className={s.miniBlock1}>New School</span>
				{newSchoolTracks.slice(0, 3)}
				<span className={s.miniBlock3}><button>More</button></span>
			</div>
			<div className={s.content2}>
				<span className={s.miniBlock1}>Old School</span>
				{oldSchoolTracks.slice(0, 3)}
				<span className={s.miniBlock3}><button>More</button></span>
			</div>
		</div>
		)
}

export default MusicHome