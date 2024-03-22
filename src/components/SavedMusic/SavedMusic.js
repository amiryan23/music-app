import s from './SavedMusic.module.css'
import { MyContext } from './../../Context/TrackContext';
import {useState,useEffect,useRef,useContext} from 'react'
import {Link} from 'react-router-dom'
import { FaPlay,FaPause  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const SavedMusic = ()=>{
	const { playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song,changedPath,savedTracks,saveMusicToFavorite,removeMusicToFavorite} = useContext(MyContext);
	const [playingIndex, setPlayingIndex] = useState(null);

	const animBlock1 = useRef()

	useEffect(()=>{
		window.scrollTo(0,0)
		let timer = setTimeout(()=>{animBlock1.current.classList.add(s.animBlock1)},0)

		return ()=>{
			if(animBlock1.current){
				clearTimeout(timer)
				animBlock1.current.classList.remove(s.animBlock1)
			}
		}
	},[])

		

	useEffect(()=>{
setPlayingIndex((prevPlayingIndex)=>index)
},[index])

	const favoriteSongs = savedTracks
 	.map(m => 
    <span key={m.id}   className={playingIndex === m.id && playingSong && playing ? ` ${s.playingStyleMusic} ${s.miniBlock2}` : s.miniBlock2}>
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
     <span className={s.favoriteMusic}>
      <button className={s.addedMusic} title="Remove to favorite musics" onClick={()=>{removeMusicToFavorite(m.id)}}><MdDeleteForever/></button>
     </span>
      <span className={s.saveMusic}>
      <Link title="Download" onClick={()=>{changedPath("/music/")}} to={`/music/${m.id}`}><IoMdDownload /></Link>
      
      </span>
      </span>
    </span> )
	return(
		<main className={s.megaContainer}>
			<div className={s.container} ref={animBlock1}>
			<div className={s.content1}>My Favorite Songs</div>
			<div className={s.content2}>
			{savedTracks.length 
			? favoriteSongs.reverse()
			: <span className={s.notFound}>
			You haven't added any songs yet :3<br/>
			<Link onClick={()=>{changedPath("/music/")}} to="/music/"><FaPlus />Add music now</Link>
			</span>}
			</div>
				
			</div>
		</main>
		)
}

export default SavedMusic