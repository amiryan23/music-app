import s from './MusicItem.module.css'
import {useParams,Link} from "react-router-dom"
import React,{useState,useContext,useRef,useEffect} from 'react'
import { MyContext } from './../../../Context/TrackContext';
import { IoMdDownload } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { FaPlay,FaPause  } from "react-icons/fa";
import { LuListMusic } from "react-icons/lu";
import { MdFavoriteBorder,MdOutlineFavorite } from "react-icons/md";


const MusicItem = React.memo(()=>{
const { playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song,changedPath,savedTracks,saveMusicToFavorite,removeMusicToFavorite} = useContext(MyContext);
	const {id} = useParams()
	const [playingIndex, setPlayingIndex] = useState(null);
	const [randomSong1,setRandomSong1] = useState()
	const [randomSong2,setRandomSong2] = useState()
	const [randomSong3,setRandomSong3] = useState()
	const selectedMusic = tracks.find(song => song && song.id === parseInt(id, 10)) ;
	const scrollToText = useRef()
	const animBlock1 = useRef()
	const animBlock2 = useRef()

	

	useEffect(()=>{
		 window.scrollTo(0, 0);
		 let timer = setTimeout(()=>{
		 	animBlock1.current.classList.add(s.animBlock1)
		 	animBlock2.current.classList.add(s.animBlock1)
		 },0)

   const generateRandom = (exclude) => {
    let random;
    do {
      random = Math.floor(Math.random() * simlerSongArray.length);
    } while (exclude.includes(random));
    return random;
  };

  const uniqueRandoms = new Set();

  
  const randomSong1 = generateRandom([]);

  const randomSong2 = generateRandom([randomSong1]);

  const randomSong3 = generateRandom([randomSong1, randomSong2]);

  setRandomSong1(randomSong1);
  setRandomSong2(randomSong2);
  setRandomSong3(randomSong3);

		

		return ()=>{
			if(animBlock1.current){
				clearTimeout(timer)
				animBlock1.current.classList.remove(s.animBlock1)
				animBlock1.current.classList.remove(s.animBlock2)
			}
			
		}
	},[])

	useEffect(()=>{
setPlayingIndex((prevPlayingIndex)=>index)
},[index])

	const simlerSong = tracks
	.filter(track => track.mode === selectedMusic.mode)

	const simlerSongArray = simlerSong.map(m => <span key={m.id}  className={playingIndex === m.id && playingSong ? ` ${s.playingStyleMusic} ${s.itemContainer}` : s.itemContainer}>
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
       <Link to={`/music/${m.id}`}><IoMdDownload /></Link>
       save
       </span>
    </span> )
	
	
	return (
		<div className={s.megaContainer} >
			<div className={s.content1} ref={animBlock1}>
				<div className={s.miniContent1} style={{backgroundImage:`url(${selectedMusic.backG})`}}>
					{index === selectedMusic.id && playing 
      	? <FaPause onClick={()=>{
      		setPlayingSong(false)
      		setPlaying((prevPlaying)=>false)
      		if(playing){
      		song.current.pause()
      	}
      
					
      	}}/> : <FaPlay onClick={()=>{
      		setPlayingSong(true)
      		setIndex(selectedMusic.id)
      		// setPlayingIndex(index)
      		
      		if(playing){
      			song.current.pause()
      		} else{
      			setPlaying((prevPlaying)=>true)
      		}

      	}}/>  }
				</div>
				<div className={s.miniContent2}>
					<div className={s.miniBlock1} ref={scrollToText}>{selectedMusic.songName}</div>
					<div className={s.miniBlock2}>
						<Link onClick={()=>{changedPath("/artists/")}} to={`/artists/album/${selectedMusic.artist}/${selectedMusic.id}`}>See more music from {selectedMusic.artist}<GrFormNextLink /></Link>
					</div>
					<div className={s.miniBlock3}>
					<a href={selectedMusic.song} download={`${selectedMusic.songName}.mp3`} >
					<button>Download<IoMdDownload /></button>
					</a>
					</div>
				</div>
				<div className={s.favoriteMusic}>
      {savedTracks.some(track => track.id === selectedMusic.id)
      	?
      	<> 
      	<h4>Add to favorite</h4>
      	<button className={s.addedMusic} title="Remove to favorite musics" onClick={()=>{removeMusicToFavorite(selectedMusic.id)}}><MdOutlineFavorite/></button>
      	</>
      	: 
      	<> 
      	<h4>Add to favorite</h4>
				<button className={s.unaddedMusic} title="Add to favorite musics" onClick={()=>{saveMusicToFavorite(selectedMusic.id)}}><MdFavoriteBorder/></button>
      	</>
      }
      </div>
			</div>
			<div className={s.content2} ref={animBlock2}>
				<div className={s.miniBlock4}>
					<div className={s.block1}>Similar songs <LuListMusic /> </div>
					<div className={s.block2}>
				{simlerSongArray[randomSong1]}
				{simlerSongArray[randomSong2]}
				{simlerSongArray[randomSong3]}
				</div>
				</div>
			</div>
		</div>
		)
})

export default MusicItem