import s from './MusicSlider.module.css'
import { CgPlayTrackPrevR,CgPlayTrackNextR } from "react-icons/cg";
import {useState,useEffect,useRef,useMemo,useContext} from 'react'
import { MyContext } from './../../Context/TrackContext';

const MusicSlider = ()=>{
	const [indexImg,setIndexImg] = useState(0)
 const {song, index , setIndex , tracks, setTracks , playing , setPlaying} = useContext(MyContext);
	const animSlider = useRef()

	

	const newTracks = useMemo(() => {
  return tracks.map(m => (
    <div key={m.id} ref={animSlider} className={s.megaBlock} style={{backgroundImage:`url(${m.backG})`}}>
      <div className={s.miniContent1}>
      <div className={s.miniBlock1}>{m.songName}</div>
      <div className={s.miniBlock2}>
        <span>====================</span>
        <button onClick={
        	()=>{
        		setIndex(m.id)
        		
        		
        	}
        }>Play this song</button>
        <span>====================</span>
        </div>
      </div>
    </div>
  ));
}, [tracks, indexImg]);

	const handlerNextClick = ()=>{
		if(indexImg < 2){
			setIndexImg((prevIndexImg)=>prevIndexImg + 1)
		}
	}

	const handlerPrevClick = ()=>{
		if(indexImg > 0){
			setIndexImg((prevIndexImg)=>prevIndexImg - 1)
		}
	}

	{/* useEffect(()=>{ */}
	{/* 	setInterval(()=>{ */}
	{/* 		if(index < newTracks.length - 1){ */}
	{/* 		setIndex((prevIndex)=>prevIndex + 1) */}
	{/* 	}  */}
	{/* 	},3000) */}
	{/* },[index]) */}

useEffect(() => {
  const intervalId = setInterval(() => {
    if (indexImg < 2) {
      setIndexImg((prevIndexImg) => prevIndexImg + 1);
    } else if(indexImg >= 2){
    	setIndexImg((prevIndexImg)=> 0);
    }
  }, 5000);

  // Очистка интервала при размонтировании компонента
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

}

export default MusicSlider