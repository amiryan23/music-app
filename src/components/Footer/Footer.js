import s from './Footer.module.css'
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub,FaTelegram } from "react-icons/fa";


const Footer = ()=>{
	return (
		<footer className={s.megaContainer}>
		<div className={s.megaContent}>
		<div className={s.container1}>
			<div className={s.content1}>
				<div className={s.miniBlock1}><h2>Contact me</h2></div>
				<div className={s.miniBlock2}>
				<span className={s.item1}>
				<a href="#" traget="_blank" ><IoLogoInstagram size="40" /></a>
				</span> 
				<span className={s.item2}>
				<a href="#" traget="_blank" ><FaGithub size="40"  /></a>
				</span> 
				<span className={s.item3}>
				<a href="#" traget="_blank" ><FaTelegram size="40" /></a>
				</span> 
				</div>
			</div>
			<div className={s.content2}>
				<div className={s.miniBlock1}><h2>Opensource in github</h2></div>
				<div className={s.miniBlock2}>
				<a href="#" target="_blank">www.github.com</a>
				</div>
			</div>
			<div className={s.content3}>
				<div className={s.miniBlock1}><h2>About this project</h2></div>
				<div className={s.miniBlock2}>
				<a href="#" target="_blank">Learn</a>
				</div>
			</div>
			</div>
		<div className={s.container2}>
		© amiryan23 
		</div>
		</div>
		</footer>
		)
}

export default Footer