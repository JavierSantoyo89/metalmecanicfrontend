import { Link } from 'react-router-dom'
import styles from './Header.module.css'
export const Header = () => {
	return (
		<div className={styles.header}>
			<h1>Metalmecanic Frontend</h1>
			<Link to='/login'>Login</Link>
			<Link to='/dashboard'>Dashboard</Link>
			<Link to='/'>Home</Link>

			{/*<Link to='/login'>Login</Link>
			<Link to='/dashboard'>Dashboard</Link> */}
		</div>
	)
}
