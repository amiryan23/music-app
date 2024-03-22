import s from './Footer.module.css'
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub,FaTelegram } from "react-icons/fa";
import React from 'react'


const Footer = React.memo(({setOpenModal})=>{
	return (
		<footer className={s.megaContainer}>
		<div className={s.megaContent}>
		<div className={s.container1}>
			<div className={s.content1}>
				<div className={s.miniBlock1}><h2>Contact me</h2></div>
				<div className={s.miniBlock2}>
				<span className={s.item1}>
				<a href="https://www.instagram.com/amiryann23?igsh=MW01dDJzeHhiYThoaQ==" target="_blank" ><IoLogoInstagram size="40" /></a>
				</span> 
				<span className={s.item2}>
				<a href="https://github.com/amiryan23" target="_blank" ><FaGithub size="40"  /></a>
				</span> 
				<span className={s.item3}>
				<a href="https://t.me/httpswww23" target="_blank" ><FaTelegram size="40" /></a>
				</span> 
				</div>
			</div>
			<div className={s.content2}>
				<div className={s.miniBlock1}><h2>Opensource in github</h2></div>
				<div className={s.miniBlock2}>
				<a href="https://github.com/amiryan23/music-app" target="_blank">https://github.com/amiryan23/music-app</a>
				</div>
			</div>
			<div className={s.content3}>
				<div className={s.miniBlock1}><h2>About this project</h2></div>
				<div className={s.miniBlock2}>
				<button onClick={()=>{
					setOpenModal(true)
					window.scrollTo(0,0)
				}}>Read</button>
				</div>
			</div>
			</div>
		<div className={s.container2}>
		© amiryan23 
		</div>
		</div>
		</footer>
		)
})

export default Footer