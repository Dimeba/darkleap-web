// styles
import styles from '@/styles/Contact.module.scss'

// components
import Button from './Button'
import Link from 'next/link'

const Contact = () => {
	return (
		<section id='contact' className={`${styles.contact} grid-container`}>
			<div className={styles.contactText}>
				<h2>Get In Touch</h2>
				<p>
					We're here to listen. Let's discuss your project and explore how we
					can bring your ideas to life. Looking forward to connecting with you!
				</p>

				<Link href='#' scroll={false} passHref>
					<Button buttonWhite={false}>Get In Touch</Button>
				</Link>
			</div>
			<form
				name='contact'
				method='POST'
				netlify-honeypot='bot-field'
				data-netlify='true'
				action='/success'
			>
				<input type='hidden' name='form-name' value='contact' />
				<div className={styles.field}>
					<label htmlFor='firstName'>First Name</label>
					<input type='text' id='firstName' name='firstName' />
				</div>
				<div className={styles.field}>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' name='lastName' />
				</div>
				<div className={styles.field}>
					<label htmlFor='company'>Company</label>
					<input type='text' id='company' name='company' />
				</div>
				<div className={styles.field}>
					<label htmlFor='email'>Email Address</label>
					<input type='email' id='email' name='email' />
				</div>
				<div className={styles.area}>
					<label htmlFor='message'>Message</label>
					<textarea id='message' name='message' />
				</div>

				<button className='buttonRed' type='submit'>
					SEND
				</button>
			</form>
		</section>
	)
}

export default Contact
