import s from './MusicPage.module.css'
import {useState,useEffect,useRef,useMemo,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { FaPlay,FaPause  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle } from "react-icons/io";

const MusicPage = ()=>{

	const { activeLink,playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song} = useContext(MyContext);
		const [playingIndex, setPlayingIndex] = useState(null);
		const [newSchool,setNewSchool] = useState(3)
		const [oldSchool,setOldSchool] = useState(3)

		const animBlock1 = useRef()
		const animBlock2 = useRef()
		const animBlock3 = useRef()

		const newRef = useRef()
		const oldRef = useRef()

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

		useEffect(()=>{

  	if(playingSong && playing){
  		song.current.pause()
      setTimeout(()=>{song.current.play()},0)		
  		
  	}
  },[playing,playingSong,index])

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
       <a href={m.song} download={`${m.songName}.mp3`} ><IoMdDownload /></a>
       save
       </span>
    </span> )


    const newSchoolTracks = tracks
    .filter(track => track.mode === "newschool")
    .map(m => 
    	<span className={s.miniTrack}>
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
    			{m.songName}
    		</span>
    		<span className={s.trackItem3}></span>
    		
    	</span>
    	)

    const oldSchoolTracks = tracks
    .filter(track => track.mode === "oldschool")
    .map(m => 
    	<span className={s.miniTrack}>
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
    			{m.songName}
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
						
					}

					}><IoIosArrowDropdownCircle /></button>
					: <button onClick={()=>{
						setNewSchool((prevNewSchool)=> 3)
						newRef.current.scrollIntoView()
					}}><IoIosArrowDropupCircle /></button> }
					</div>
				</div>
				<div className={s.Block2} ref={animBlock2}>
				  <div className={s.content1}><h1 ref={oldRef}>Old School</h1></div>
					<div className={s.content2}>{oldSchoolTracks.slice(0,oldSchool)}</div>
					<div className={s.content3}>
					{oldSchool <= 3 
					? <button onClick={()=>{
						setOldSchool((prevOldSchool)=>oldSchoolTracks.length)
						
					}

					}><IoIosArrowDropdownCircle /></button>
					: <button onClick={()=>{
						setOldSchool((prevOldSchool)=> 3)
						oldRef.current.scrollIntoView()
					}}><IoIosArrowDropupCircle /></button> }
					</div>
				</div>
			</div>
			<div className={s.megaContent2} ref={animBlock3}>
				{AllTracks.slice(0,9)}
			</div>
		</main>
		)


}

export default MusicPage