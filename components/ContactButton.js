// styles
import styles from '@/styles/ContactButton.module.scss'

// hooks
import { useState, useEffect } from 'react'

const ContactButton = () => {
	const [hideContactButton, setHideContactButton] = useState(false)
	const [buttonBottom, setButtonBottom] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Determine if the device is mobile
			const isMobile = window.innerWidth <= 768 // Adjust the breakpoint as needed

			// Set thresholds based on screen size
			const heroThreshold = isMobile ? 0.1 : 1
			const contactThreshold = 0.1

			// Observer for the 'hero' section
			const heroObserver = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setButtonBottom(false)
						} else {
							setButtonBottom(true)
						}
					})
				},
				{
					threshold: heroThreshold
				}
			)

			// Observer for the 'contact' section
			const contactObserver = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setHideContactButton(true)
						} else {
							setHideContactButton(false)
						}
					})
				},
				{
					threshold: contactThreshold
				}
			)

			// Get the elements to observe
			const heroSection = document.getElementById('hero')
			const contactSection = document.getElementById('contact')

			// Start observing the 'hero' section
			if (heroSection) {
				heroObserver.observe(heroSection)
			}

			// Start observing the 'contact' section
			if (contactSection) {
				contactObserver.observe(contactSection)
			}

			// Clean up the observers on unmount
			return () => {
				if (heroSection) {
					heroObserver.unobserve(heroSection)
				}
				if (contactSection) {
					contactObserver.unobserve(contactSection)
				}
			}
		}
	}, [])

	return (
		<>
			{buttonBottom && <div className={styles.background}></div>}
			<div
				className={`${styles.buttonContainer}`}
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
					} ${buttonBottom ? styles.bounceButton : ''}`}
				>
					Contact
				</a>
			</div>
		</>
	)
}

export default ContactButton
