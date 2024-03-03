import s from './Header.module.css'
import React,{useCallback} from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import {NavLink} from 'react-router-dom'
import Player from './../Player/Player'
import SearchMusic from './../SearchMusic/SearchMusic'

const Header = ({open,setOpen})=>{

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
					<NavLink to="/">Home</NavLink>
					<NavLink to="/music/">Music</NavLink>
					<NavLink to="/2">About</NavLink>
					<NavLink to="/3">Favorite</NavLink>
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