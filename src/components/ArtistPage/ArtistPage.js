import s from './ArtistPage.module.css'
import { MyContext } from './../../Context/TrackContext';
import React,{useState,useEffect,useRef,useContext} from 'react'
import {useParams,Link} from "react-router-dom"
import { ColorRing } from 'react-loader-spinner'


const ArtistPage = React.memo(()=>{
	const { activeLink,tracks,loaderImage,setLoaderImage} = useContext(MyContext);
	
	const animBlock1 = useRef()

	const {id} = useParams()
	const {name} = useParams()

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
	
useEffect(() => {
    if(!loaderImage){
    const preloadImage = () => {
      tracks.forEach(track => {
        const image = new Image(track.artistPhoto);
        image.preload = 'auto'; 
        setTimeout(()=>{setLoaderImage(true)},500)
      });
    };

    preloadImage(); 
  }
    return () => {
      
    };
  }, []);

	const uniqueArtists = tracks.filter((track, index) => {
  return (
    tracks.findIndex(t => t.artist === track.artist) === index
  );
});
	
	const artistsArray = uniqueArtists.map(m=> <div key={m.id} className={s.container}>
		{loaderImage 
		? <Link to={`/artists/album/${m.artist}/${m.id}`} ><div className={s.content1} style={{backgroundImage:`url(${m.artistPhoto}`}}></div></Link>
		: <div className={s.content1}> <ColorRing
				  visible={true}
				  height="40"
				  width="40"
				  ariaLabel="color-ring-loading"
				  wrapperStyle={{}}
				  wrapperClass="color-ring-wrapper"
				  colors={['#999', '#222']}
				  /> </div> }
		<div className={s.content2}>{m.artist}</div>
	</div>)

	return(
		<main className={s.megaContainer}>
		<div className={s.megaContent} ref={animBlock1}>
			{artistsArray}
		</div>
		</main>
		)
})

export default ArtistPage