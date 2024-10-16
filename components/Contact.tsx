// styles
import styles from '@/styles/Contact.module.scss'

// components
import ContactForm from './ContactForm'

const Contact = () => {
	return (
		<section id='contact' className={`${styles.contact} grid-container`}>
			<div className={styles.contactText}>
				<h2>Get a Free Consultation</h2>
				<p>
					We're here to listen. Let's discuss your project and explore how we
					can bring your ideas to life. Looking forward to connecting with you!
				</p>
			</div>
			<ContactForm />
		</section>
	)
}

export default Contact
