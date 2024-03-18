import s from './SearchMusic.module.css'
import React,{useState,useEffect,useContext,useRef} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { FaPlay,FaPause  } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { IoMdDownload } from "react-icons/io";

const SearchMusic = React.memo(()=>{
	const { tracks, setTracks , song , playing , setPlaying ,playingSong,setPlayingSong, handlerPlaying,index,setIndex,handlerNextMusic,handlerPrevMusic,changedPath} = useContext(MyContext);
	const [search,setSearch] = useState("")
	const [open,setOpen] = useState(false)
	const [isFocused, setIsFocused] = useState(false)
	const [playingIndex, setPlayingIndex] = useState(null);
	const containerRef = useRef()



const handleFocus = () => {
    setIsFocused(true);
   
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpen(false);
  };



const chnageText = (e)=>{
	setSearch(e.target.value)
	}

let findMusic = tracks
  .filter(track => track.songName.toLowerCase().includes(search?.toLowerCase()))
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
      <span className={s.item2}>
      <a onClick={()=>{changedPath("/artists/")}} href={`/artists/album/${m.artist}/${m.id}`}>{m.songName}</a>
      </span>
       <span className={s.item3}>
       {/* <a href={m.song} download={`${m.songName}.mp3`} ><IoMdDownload /></a> */}
       <a onClick={()=>{changedPath("/music/")}} href={`/music/${m.id}`}><IoMdDownload /></a>
       save
       </span>
    </span> )

  useEffect(()=>{
	if(search != "" ){
		setOpen((prevOpen)=>true)
	} else (setOpen((prevOpen)=>false))

  
},[search])

  useEffect(() => {
  const handleDocumentClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      // Клик вне контейнера, закрыть контейнер
      setOpen(false);
    } else {
    	if(search != "")
    	setOpen(true)
    }
  };

  document.addEventListener('click', handleDocumentClick);

  return () => {
    // Удалите обработчик событий при размонтировании компонента
    document.removeEventListener('click', handleDocumentClick);
  };
}, [containerRef, setOpen,search]);

	return (
		<>
		<div ref={containerRef} className={s.megaContainer}>
		<input 
		autoComplete="off" 
		className={s.search} 
		onChange={chnageText} 
		onFocus={handleFocus}
      	
		value={search} placeholder="Search music..." type="search" />
		{open ? <div  onFocus={handleFocus} className={s.container}>{findMusic.length 
		? findMusic 
		:<div className={s.notFound}>Music not found</div>}</div> : "" }
		</div>
		</>
		)

})

export default SearchMusic