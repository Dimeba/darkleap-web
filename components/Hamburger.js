import navStyle from '../styles/Nav.module.scss'

const Hamburger = props => {
	return (
		<div onClick={props.toggleMenu} className={props.menuClass}>
			<div className={navStyle.menuBtnBurger}></div>
		</div>
	)
}

export default Hamburger
