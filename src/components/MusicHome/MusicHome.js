import s from './MusicHome.module.css'
import React,{useState,useEffect,useRef,useMemo,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { FaPlay,FaPause  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import {Link} from 'react-router-dom'
import { MdFavoriteBorder,MdOutlineFavorite } from "react-icons/md";



const MusicHome = React.memo(()=>{

	const { playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song,changedPath,savedTracks,saveMusicToFavorite,removeMusicToFavorite} = useContext(MyContext);
const [playingIndex, setPlayingIndex] = useState(null);




// useEffect(()=>{
// 
//   	if(playingSong && playing){
//   		song.current.pause()
//       setTimeout(()=>{song.current.play()},0)		
//   		
//   	}
//   },[playing,playingSong,index])


useEffect(()=>{
setPlayingIndex((prevPlayingIndex)=>index)
},[index])

	

		const newSchoolTracks = tracks
  .filter(track => track.mode === "newschool")
  .map(m => 
    <span key={m.id}  className={playingIndex === m.id && playingSong && playing ? ` ${s.playingStyleMusic} ${s.miniBlock2}` : s.miniBlock2}>
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
      		// setPlayingIndex(index)
      		
      		if(playing){
      			song.current.pause()
      		} else{
      			setPlaying((prevPlaying)=>true)
      		}

      	}}/>  }
      </span>
      <span className={s.item2}>{m.songName}</span>
        <span className={s.item3}>
      {/* <a href={m.song} download={`${m.songName}.mp3`} ><IoMdDownload /></a> */}
      <span className={s.favoriteMusic}>
      {savedTracks.some(track => track.id === m.id)
      	? <button className={s.addedMusic} title="Remove to favorite musics" onClick={()=>{removeMusicToFavorite(m.id)}}><MdOutlineFavorite/></button>
      	: <button className={s.unaddedMusic} title="Add to favorite musics" onClick={()=>{saveMusicToFavorite(m.id)}}><MdFavoriteBorder/></button>
      }
      </span>
      <span className={s.saveMusic}>
      <Link title="Download" onClick={()=>{changedPath("/music/")}} to={`/music/${m.id}`}><IoMdDownload /></Link>
      
      </span>
      </span>
    </span> )

    	const oldSchoolTracks = tracks
  .filter(track => track.mode === "oldschool")
  .map(m => 
    <span key={m.id} className={playingIndex === m.id && playingSong && playing ? ` ${s.playingStyleMusic} ${s.miniBlock2}` : s.miniBlock2}>
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
      		// setPlayingIndex(index)
      		
      		if(playing){
      			song.current.pause()
      		} else{
      			setPlaying((prevPlaying)=>true)
      		}

      		
      		
      		
      	}}/>  }
      </span>
      <span className={s.item2}>{m.songName}</span>
            <span className={s.item3}>
      {/* <a href={m.song} download={`${m.songName}.mp3`} ><IoMdDownload /></a> */}
      <span className={s.favoriteMusic}>
      {savedTracks.some(track => track.id === m.id)
      	? <button className={s.addedMusic} title="Remove to favorite musics" onClick={()=>{removeMusicToFavorite(m.id)}}><MdOutlineFavorite/></button>
      	: <button className={s.unaddedMusic} title="Add to favorite musics" onClick={()=>{saveMusicToFavorite(m.id)}}><MdFavoriteBorder/></button>
      }
      </span>
      <span className={s.saveMusic}>
      <Link title="Download" onClick={()=>{changedPath("/music/")}} to={`/music/${m.id}`}><IoMdDownload /></Link>
      
      </span>
      </span>
    </span>
  );
	return (
		
		 
		<div className={s.megaContainer}>
			<div className={s.content1}>
				<span className={s.miniBlock1}>New School</span>
				{newSchoolTracks.slice(0, 3)}
				<span className={s.miniBlock3}>
				<Link onClick={()=>{changedPath("/music/")}} to={`/music/`}>More</Link>
				</span>
			</div>
			<div className={s.content2}>
				<span className={s.miniBlock1}>Old School</span>
				{oldSchoolTracks.slice(0, 3)}
				<span className={s.miniBlock3}>
				 <Link onClick={()=>{changedPath("/music/")}} to={`/music/`}>More</Link>
				</span>
			</div>
		</div>
		
      
		)
})

export default MusicHome