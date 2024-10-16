// styles
import styles from '@/styles/Button.module.scss'

interface Props {
	type?: 'button' | 'submit' | 'reset'
	event?: React.MouseEventHandler<HTMLButtonElement>
	transparent?: boolean
	children: React.ReactNode
}

const Button: React.FC<Props> = ({ type, event, transparent, children }) => {
	return (
		<button
			className={styles.button}
			type={type}
			onClick={event ? event : undefined}
			style={
				!transparent
					? {
							backgroundColor: '#b4e300',
							padding: '1rem 1rem 1rem 1.5rem',
							borderRadius: '2rem'
					  }
					: undefined
			}
		>
			<div
				className={styles.preButtonLine}
				style={{ borderTopColor: transparent ? '#b4e300' : '#16171a' }}
			></div>
			<p
				className={styles.buttonText}
				style={{
					color: transparent ? '#b4e300' : '#16171a'
				}}
			>
				{children}
			</p>

			<div className={styles.arrow}>
				<div
					className={styles.arrowLine}
					style={{
						borderTopColor: transparent ? '#b4e300' : '#16171a'
					}}
				></div>
				<div
					className={styles.arrowHead}
					style={{
						borderTopColor: transparent ? '#b4e300' : '#16171a',
						borderRightColor: transparent ? '#b4e300' : '#16171a'
					}}
				></div>
			</div>
		</button>
	)
}

export default Button
