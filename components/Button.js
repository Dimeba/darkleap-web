// styles
import styles from '@/styles/Button.module.scss'

const Button = props => {
	return (
		<button className={styles.button} type={props.type}>
			<div
				className={
					props.buttonWhite
						? styles.preButtonLineWhite
						: styles.preButtonLineBlack
				}
			></div>
			<p
				className={
					props.buttonWhite ? styles.buttonTextWhite : styles.buttonTextBlack
				}
			>
				{props.children}
			</p>

			<div className={styles.arrow}>
				<div
					className={
						props.buttonWhite ? styles.arrowLineWhite : styles.arrowLineBlack
					}
				></div>
				<div
					className={
						props.buttonWhite ? styles.arrowHeadWhite : styles.arrowHeadBlack
					}
				></div>
			</div>
		</button>
	)
}

export default Button
