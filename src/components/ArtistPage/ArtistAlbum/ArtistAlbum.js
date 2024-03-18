import s from './ArtistAlbum.module.css'
import {useParams,Link} from "react-router-dom"
import React,{useState,useEffect,useRef,useContext} from 'react'
import { MyContext } from './../../../Context/TrackContext';
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaPlay,FaPause  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdFavoriteBorder,MdOutlineFavorite } from "react-icons/md";

const ArtistAlbum = React.memo(()=>{
const { playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song,changedPath,savedTracks,saveMusicToFavorite,removeMusicToFavorite} = useContext(MyContext);
const [playingIndex, setPlayingIndex] = useState(null);
	const {id} = useParams()
	const {name} = useParams()
	const animBlock1 = useRef()

	const selectedArist = tracks.find(song => song && song.id === parseInt(id, 10)) ;

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

// useEffect(()=>{
// 
//   	if(playingSong && playing){
//   		song.current.pause()
//       setTimeout(()=>{song.current.play()},0)		
//   		
//   	}
//   },[playing,playingSong,index])

const thisSong = useRef()

useEffect(()=>{
setPlayingIndex((prevPlayingIndex)=>index)
},[index])


	const thisArtitsTracks = tracks
	.filter(track => track.artist === selectedArist.artist)
	.map(m=> <span key={m.id} ref={thisSong} className={playingIndex === m.id && playingSong ? ` ${s.playingStyleMusic} ${s.itemContainer}` : s.itemContainer}>
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
      		// setPlayingIndex((prevPlayingIndex)=>index)
      		
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

	return (
		<main className={s.megaContainer}>
			<div className={s.megaContent} ref={animBlock1}>
			<div className={s.content1} style={{backgroundImage:`url(${selectedArist.albumBackG})`}}>
				<div className={s.miniBlock1}>
					<Link to="/artists/"><BsArrowReturnLeft size="50" color="white" /></Link>
				</div>
				<div className={s.miniBlock2}>
					{selectedArist.artist} Album
				</div>
				<div className={s.miniBlock1}></div>
			</div>
			<div className={s.content2}>
				{thisArtitsTracks}
			</div>
			
			</div>
		</main>
		)
})

export default ArtistAlbum