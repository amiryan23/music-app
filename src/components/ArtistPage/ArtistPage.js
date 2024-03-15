import s from './ArtistPage.module.css'
import { MyContext } from './../../Context/TrackContext';
import {useState,useEffect,useRef,useContext} from 'react'
import {useParams,Link} from "react-router-dom"


const ArtistPage = ()=>{
	const { activeLink,playing,setPlaying,tracks, playingSong,setPlayingSong,setTracks ,index,setIndex,playThisSong,handlerPlaying,song} = useContext(MyContext);

	const animBlock1 = useRef()

	const {id} = useParams()
	const {name} = useParams()

	useEffect(()=>{
		
		let timer = setTimeout(()=>{animBlock1.current.classList.add(s.animBlock1)},0)

		return ()=>{
			if(animBlock1.current){
				clearTimeout(timer)
				animBlock1.current.classList.remove(s.animBlock1)
			}
		}
	},[])
	
// 	useEffect(()=>{
// 
//   	if(playingSong && playing){
//   		song.current.pause()
//       setTimeout(()=>{song.current.play()},0)		
//   		
//   	}
//   },[playing,playingSong,index])

	const uniqueArtists = tracks.filter((track, index) => {
  return (
    tracks.findIndex(t => t.artist === track.artist) === index
  );
});
	
	const artistsArray = uniqueArtists.map(m=> <div key={m.id} className={s.container}>
		<Link to={`/artists/album/${m.artist}/${m.id}`} ><div className={s.content1} style={{backgroundImage:`url(${m.artistPhoto}`}}></div></Link>
		<div className={s.content2}>{m.artist}</div>
	</div>)
	return(
		<main className={s.megaContainer}>
		<div className={s.megaContent} ref={animBlock1}>
			{artistsArray}
		</div>
		</main>
		)
}

export default ArtistPage