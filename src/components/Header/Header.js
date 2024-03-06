import s from './Header.module.css'
import React,{useCallback,useContext,useState} from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import {NavLink} from 'react-router-dom'
import Player from './../Player/Player'
import SearchMusic from './../SearchMusic/SearchMusic'
import { MyContext } from './../../Context/TrackContext';

const Header = ({open,setOpen})=>{

	const {changedPath,activeLink} = useContext(MyContext);

	// const [activeLink,setActiveLink] = useState('/')

  const handlerPortalOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

 
	return(
			<header className={s.megaContainer}>
				<div className={s.content1}>
				<button onClick={handlerPortalOpen}><TiThMenuOutline size="50" color="#999" /></button>
				<span>MusicLogo</span>
				</div>
				<div className={s.content2}>
				<div className={s.miniContent1}>
					<span onClick={()=>{changedPath("/")}}>
					<NavLink  className={activeLink === "/" ? `${s.active} ${s.NavLink}` : s.NavLink } to="/">
					Home</NavLink></span>
					<span onClick={()=>{changedPath("/music/")}}>
					<NavLink  className={activeLink === "/music/" ? `${s.active} ${s.NavLink}` : s.NavLink }
					to="/music/">Music</NavLink></span>
					<span onClick={()=>{changedPath("/about/")}}>
					<NavLink className={activeLink === "/about/" ? `${s.active} ${s.NavLink}` : s.NavLink }
					to="/2">About</NavLink>
					</span>
					<span onClick={()=>{changedPath("/favorite/")}}>
					<NavLink className={activeLink === "/favorite/" ? `${s.active} ${s.NavLink}` : s.NavLink }
					to="/3">Favorite</NavLink>
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