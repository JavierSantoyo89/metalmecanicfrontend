import bender from '../../assets/Bender.webp'
import style from './Error404.module.css'
export const Error404 = () => {
	function handleClick() {
		history.back()
	}
	return (
		<div
			className={style.body}
			onClick={handleClick}>
			<br />
			The page you are looking for does not exist.
			<img
				src={bender}
				alt='Bender'
			/>
		</div>
	)
}
