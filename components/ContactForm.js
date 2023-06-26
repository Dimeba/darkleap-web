// styles
import styles from '@/styles/Contact.module.scss'

// components
import Button from './Button'

const ContactForm = () => {
	return (
		<form
			name='contact'
			// method='POST'
			netlify-honeypot='bot-field'
			data-netlify='true'
			// onSubmit='submit'
		>
			<input type='hidden' name='form-name' value='contact' />

			<div className={styles.formContainer}>
				<label htmlFor='fullName'>Full Name</label>
				<input
					type='text'
					id='fullName'
					name='fullName'
					placeholder='FullName'
				/>

				<label htmlFor='howCanWeHelp'>How can we help?</label>
				<select id='howCanWeHelp' name='howCanWeHelp'>
					<option disabled selected value='kadSeSetim'>
						How can we help?
					</option>
					<option value='kadSeSetim'>I need a website</option>
					<option value='kadSeSetim'>I need a logo</option>
					<option value='kadSeSetim'>I need abranding</option>
					<option value='kadSeSetim'>I need a brochure</option>
					<option value='kadSeSetim'>Other</option>
				</select>

				<label htmlFor='emailAddress'>Email Address</label>
				<input
					type='text'
					id='emailAddress'
					name='emailAddress'
					placeholder='FullName'
				/>

				<label htmlFor='howDidYouHearAboutUs'>How did you hear about us?</label>

				<select id='howDidYouHearAboutUs' name='howDidYouHearAboutUs'>
					<option disabled selected value='kadSeSetim'>
						How did you hear about us?
					</option>
					<option value='kadSeSetim'>Reccomended by someone</option>
					<option value='kadSeSetim'>On Social Media</option>
					<option value='kadSeSetim'>On Google</option>
					<option value='kadSeSetim'>On Upwork</option>
					<option value='kadSeSetim'>Other</option>
				</select>

				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' placeholder='FullName' />
			</div>

			<Button type='submit'>Send Message</Button>
		</form>
	)
}

export default ContactForm
