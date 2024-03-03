import s from './SearchMusic.module.css'

const SearchMusic = ()=>{
	return (
		<>
		<input className={s.search} placeholder="Search music..." type="search" />
		</>
		)
}

export default SearchMusic