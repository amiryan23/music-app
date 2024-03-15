import s from './Header.module.css'
import React,{useCallback,useContext,useState,useRef,useEffect} from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import {NavLink} from 'react-router-dom'
import Player from './../Player/Player'
import SearchMusic from './../SearchMusic/SearchMusic'
import { MyContext } from './../../Context/TrackContext';
import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { BiSolidAlbum } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { IoMdAlbums } from "react-icons/io";

const Header = ({open,setOpen})=>{

	const {changedPath,activeLink,addedFavorite} = useContext(MyContext);

	// const [activeLink,setActiveLink] = useState('/')

  const handlerPortalOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

//   const notific = useRef()
// 
//   useEffect(()=>{
//   	if(addedFavorite){
//   		notific.current.classList.add(s.notific)
//   	} else (notific.current.classList.remove(s.notific))
//   },[addedFavorite])

 
	return(
			<header className={s.megaContainer}>
				<div className={s.content1}>
				<button onClick={handlerPortalOpen}><TiThMenuOutline size="50" color="#999" /></button>
				<span>MusicLogo</span>
				</div>
				<div className={s.content2}>
				<div className={s.miniContent1}>
					<span  onClick={()=>{changedPath("/")}}>
					<NavLink  className={activeLink === "/" ? `${s.active} ${s.NavLink}` : s.NavLink } to="/">
					<span className={s.miniItem1}><FaHome /></span>
					<span className={s.miniItem2}>Home</span>
					</NavLink></span>
					<span  onClick={()=>{changedPath("/music/")}}>
					<NavLink  className={activeLink === "/music/" ? `${s.active} ${s.NavLink}` : s.NavLink }
					to="/music/">
					<span className={s.miniItem1}><FaMusic /></span>
					<span className={s.miniItem2}>Music</span>
					</NavLink></span>
					<span  onClick={()=>{changedPath("/artists/")}}>
					<NavLink className={activeLink === "/artists/" ? `${s.active} ${s.NavLink}` : s.NavLink }
					to="/artists/">
					<span className={s.miniItem1}><IoMdAlbums /></span>
					<span className={s.miniItem2}>Albums</span>
					</NavLink>
					</span>
					<span  onClick={()=>{changedPath("/mySavedMusic/")}}>
					<NavLink className={activeLink === "/mySavedMusic/" ? `${s.active} ${s.NavLink}` : s.NavLink }
					to="/mySavedMusic/">
					<span className={addedFavorite ? `${s.miniItem1} ${s.notific}` : s.miniItem1}><MdOutlineFavorite /></span>
					<span className={s.miniItem2}>Saved</span>
					</NavLink>
					</span>
				</div>
				<div className={s.miniContent2}>
				<SearchMusic />
					
				</div>
				</div>
				<div className={s.content3}>
					<Player />
				</div>
			</header>
		)
}

export default Header;