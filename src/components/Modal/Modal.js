import s from './Modal.module.css'
import ReactDOM from 'react-dom';
import React,{useCallback} from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = React.memo(({openModal,setOpenModal})=>{
	const handlePortalClose = useCallback(()=>{
		setOpenModal(false)
	},[openModal])
	return ReactDOM.createPortal(
		<div className={s.Container} onClick={handlePortalClose}>
		<div className={s.megaContainer}>
			<div className={s.content1}>
			<span></span>
			<span>About this project</span>
			<span><button onClick={handlePortalClose}><IoMdClose size="35" color="#999"/></button></span>
			</div>
			<div className={s.content2}>
			<span className={s.block1}>Description</span>
				<span>The Music Project on React.js is created for testing purposes and showcasing skills in developing web applications using React.js and Context API. The project represents an interface for listening to music tracks with the usage of context for managing the application state.</span>
			</div>
			<div className={s.content3}>
				<span className={s.block1}>Functionality</span>
				<span className={s.block2}>
				<span>1.Music Playback: Users can listen to the music tracks presented in the project.</span>
				<span>2.Adding to Favorites: Users can add favorite tracks to their favorites list and remove them from</span>
				<span>3.Track Switching: There is an option to switch between different tracks for listening.</span>
				<span>4.Saving to Device: Users can download music tracks to their devices for offline listening.</span>
				</span>
			</div>
		</div>
		</div>,
    document.getElementById('modal')
		)
})

export default Modal