import s from './MusicSlider.module.css'
import { CgPlayTrackPrevR,CgPlayTrackNextR } from "react-icons/cg";
import React,{useState,useEffect,useRef,useMemo,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';
import { GrFormNextLink } from "react-icons/gr";
import {Link} from "react-router-dom"

const MusicSlider = React.memo(()=>{
	const [indexImg,setIndexImg] = useState(0)
 const {song, index , setIndex , tracks, setTracks , playing , setPlaying,changedPath} = useContext(MyContext);
	const animSlider = useRef()

	

	const newTracks = useMemo(() => {
  return tracks.map(m => (
    <div key={m.id} ref={animSlider} className={s.megaBlock} style={{backgroundImage:`url(${m.backG})`}}>
      <div className={s.miniContent1}>
      <div className={s.miniBlock1}>{m.artist}</div>
      <div className={s.miniBlock2}>
        <span>====================</span>
       <Link onClick={()=>{changedPath("/artists/")}} to={`/artists/album/${m.artist}/${m.id}`}>See this album</Link> 
        <span>====================</span>
        </div>
      </div>
    </div>
  ));
}, [tracks, indexImg]);

	const handlerNextClick = useMemo(() => ()=>{
		if(indexImg < 2){
			setIndexImg((prevIndexImg)=>prevIndexImg + 1)
		}
	}, [indexImg])

	const handlerPrevClick = useMemo(() => ()=>{
		if(indexImg > 0){
			setIndexImg((prevIndexImg)=>prevIndexImg - 1)
		}
	} , [indexImg])



useEffect(() => {
  const intervalId = setInterval(() => {
    if (indexImg < 2) {
      setIndexImg((prevIndexImg) => prevIndexImg + 1);
    } else if(indexImg >= 2){
    	setIndexImg((prevIndexImg)=> 0);
    }
  }, 5000);

  
  return () => clearInterval(intervalId);
}, [indexImg, newTracks]);


	useEffect(()=>{
		
		setTimeout(()=>{animSlider.current.classList.add(s.animSlider)},50)
	},[indexImg])


  return useMemo(() => (
    <main className={s.megaContainer}>
      <div className={s.content1}>
        <button onClick={handlerPrevClick}><CgPlayTrackPrevR size="30" color="#777" /></button>
      </div>
      <div className={s.content2} style={{backgroundImage:`url(${tracks.backG})`}}>
        {newTracks[indexImg]}
      </div>
      <div className={s.content3}>
        <button onClick={handlerNextClick}><CgPlayTrackNextR size="30" color="#777" /></button>
      </div>
    </main>
  ), [indexImg, newTracks, tracks.backG]);

})

export default MusicSlider