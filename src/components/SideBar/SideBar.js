import s from './SideBar.module.css'
import ReactDOM from 'react-dom';
import React,{useCallback} from 'react'

const SideBar = React.memo(({open,setOpen})=>{
	const handlePortalClose = useCallback(()=>{
		setOpen(false)
	},[setOpen])
	return ReactDOM.createPortal(
		<div className={s.Container} onClick={handlePortalClose}>
		<div className={s.megaContainer}>
			<button onClick={handlePortalClose}></button>
		</div>
		</div>,
    document.getElementById('sidebar-root')
		)
})

export default SideBar