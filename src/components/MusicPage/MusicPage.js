import s from './MusicPage.module.css'
import {useState,useEffect,useRef,useMemo,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { FaPlay,FaPause  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { MdFavoriteBorder,MdOutlineFavorite } from "react-icons/md";


const MusicPage = ()=>{

	const { activeLink,playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song,changedPath,savedTracks,saveMusicToFavorite,removeMusicToFavorite} = useContext(MyContext);
		const [playingIndex, setPlayingIndex] = useState(null);
		const [newSchool,setNewSchool] = useState(3)
		const [oldSchool,setOldSchool] = useState(3)
		const [topMusicWeek,setTopMusicWeek] = useState(9)
		const [open,setOpen] = useState(false)

		const animBlock1 = useRef()
		const animBlock2 = useRef()
		const animBlock3 = useRef()

		const newRef = useRef()
		const oldRef = useRef()
		const topRef = useRef()

		useEffect(()=>{
			window.scrollTo(0,0)
		},[])


		useEffect(()=>{
			if(activeLink === "/music/"){
			setTimeout(()=>{animBlock1.current.classList.add(s.animBlock1)
			animBlock2.current.classList.add(s.animBlock2)
			animBlock3.current.classList.add(s.animBlock3)},50)
		} 
		 return ()=>{
		 	if(activeLink !== "/music/" && animBlock1.current){
		 		animBlock1.current.classList.remove(s.animBlock1)
			animBlock2.current.classList.remove(s.animBlock2)
			animBlock3.current.classList.remove(s.animBlock3)
		 	}
		 }
		
		},[activeLink,newSchool])

// 		

// 		useEffect(()=>{
// 
//   	if(playingSong && playing){
//   		song.current.pause()
//       setTimeout(()=>{song.current.play()},0)		
//   	} 
// 
// 
//   },[playing,playingSong,index])

		useEffect(()=>{
			if(open ){
				setOpen((prevOpen)=>false)
			animBlock1.current.classList.add(s.blockShadow)
			animBlock2.current.classList.add(s.blockShadow)
			animBlock3.current.classList.add(s.blockShadow)

			setTimeout(()=>{
			animBlock1.current.classList.remove(s.blockShadow)
			animBlock2.current.classList.remove(s.blockShadow)
			animBlock3.current.classList.remove(s.blockShadow)
			},250)
		}


		},[open])

	const AllTracks = tracks
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


    const newSchoolTracks = tracks
    .filter(track => track.mode === "newschool")
    .map(m => 
    	<span key={m.id} className={s.miniTrack}>
    		<span className={s.trackItem1} style={{backgroundImage:`url(${m.backG})`}}>
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
    		<span className={s.trackItem2}>
    		<Link to={`/music/${m.id}`}>{m.songName}</Link>	
    		</span>
    		<span className={s.trackItem3}></span>
    		
    	</span>
    	)

    const oldSchoolTracks = tracks
    .filter(track => track.mode === "oldschool")
    .map(m => 
    	<span key={m.id} className={s.miniTrack}>
    		<span className={s.trackItem1} style={{backgroundImage:`url(${m.backG})`}}>
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
    		<span className={s.trackItem2}>
    			<Link to={`/music/${m.id}`}>{m.songName}</Link>	
    		</span>
    		<span className={s.trackItem3}></span>
    		
    	</span>
    	)

	return(
		<main className={s.megaContainer}>
			<div className={s.megaContent1}>
				<div className={s.Block1} ref={animBlock1}>
					<div className={s.content1}><h1 ref={newRef}>New School</h1></div>
					<div className={s.content2}>{newSchoolTracks.slice(0,newSchool)}</div>
					<div className={s.content3}>
					{newSchool <= 3 
					? <button onClick={()=>{
						setNewSchool((prevNewSchool)=>newSchoolTracks.length)
						setOpen((prevOpen)=>!open)
						
					}

					}><IoIosArrowDropdownCircle size="45" /></button>
					: <button onClick={()=>{
						setNewSchool((prevNewSchool)=> 3)
						newRef.current.scrollIntoView()
						setOpen((prevOpen)=>!open)
					}}><IoIosArrowDropupCircle size="45"/></button> }
					</div>
				</div>
				<div className={s.Block2} ref={animBlock2}>
				  <div className={s.content1}><h1 ref={oldRef}>Old School</h1></div>
					<div className={s.content2}>{oldSchoolTracks.slice(0,oldSchool)}</div>
					<div className={s.content3}>
					{oldSchool <= 3 
					? <button onClick={()=>{
						setOldSchool((prevOldSchool)=>oldSchoolTracks.length)
						setOpen((prevOpen)=>!open)
						
					}

					}><IoIosArrowDropdownCircle size="45"/></button>
					: <button onClick={()=>{
						setOldSchool((prevOldSchool)=> 3)
						oldRef.current.scrollIntoView()
						setOpen((prevOpen)=>!open)
					}}><IoIosArrowDropupCircle size="45"/></button> }
					</div>
				</div>
			</div>
			<div className={s.megaContent2} ref={animBlock3}>
				<h5 ref={topRef}>Top 15 music in week<IoMusicalNotesSharp/></h5>
				{AllTracks.slice(0,topMusicWeek)}
				<div className={s.content3}>
					{topMusicWeek <= 9 
					? <button onClick={()=>{
						setTopMusicWeek((prevTopMusicWeek)=>14)
						setOpen((prevOpen)=>!open)
						
					}

					}><IoIosArrowDropdownCircle size="45"/></button>
					: <button onClick={()=>{
						setTopMusicWeek((prevTopMusicWeek)=>9)
						topRef.current.scrollIntoView()
						setOpen((prevOpen)=>!open)
					}}><IoIosArrowDropupCircle size="45"/></button> }
					</div>
			</div>
		</main>
		)


}

export default MusicPage