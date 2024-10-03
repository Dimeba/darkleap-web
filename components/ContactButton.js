// styles
import styles from '@/styles/ContactButton.module.scss'

const ContactButton = ({ hideContactButton, buttonBottom }) => {
	return (
		<>
			{buttonBottom && <div className={styles.background}></div>}
			<div
				className={`${styles.buttonContainer} ${
					buttonBottom ? styles.bounceButton : ''
				}`}
				style={{
					right: hideContactButton ? '-100%' : '0',
					bottom: buttonBottom ? '0' : '100vh',
					opacity: !buttonBottom ? '0' : ''
				}}
			>
				<a
					href='/#contact'
					className={`${styles.contactButton} ${
						buttonBottom ? styles.animatedButton : ''
					}`}
				>
					Contact
				</a>
			</div>
		</>
	)
}

export default ContactButton
