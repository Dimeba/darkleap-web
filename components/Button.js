// styles
import styles from '@/styles/Button.module.scss'

const Button = ({ type, event, buttonWhite, children }) => {
	return (
		<button
			className={styles.button}
			type={type}
			onClick={event ? event : undefined}
		>
			<div
				className={
					buttonWhite ? styles.preButtonLineWhite : styles.preButtonLineBlack
				}
			></div>
			<p
				className={
					buttonWhite ? styles.buttonTextWhite : styles.buttonTextBlack
				}
			>
				{children}
			</p>

			<div className={styles.arrow}>
				<div
					className={
						buttonWhite ? styles.arrowLineWhite : styles.arrowLineBlack
					}
				></div>
				<div
					className={
						buttonWhite ? styles.arrowHeadWhite : styles.arrowHeadBlack
					}
				></div>
			</div>
		</button>
	)
}

export default Button
