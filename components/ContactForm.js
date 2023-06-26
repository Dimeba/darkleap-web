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
					placeholder='Full Name'
				/>

				<label htmlFor='howCanWeHelp'>How can we help?</label>
				<select
					id='howCanWeHelp'
					name='howCanWeHelp'
					defaultValue='defaultOption'
				>
					<option disabled hidden value='defaultOption'>
						How can we help?
					</option>
					<option value='I need a website'>I need a website</option>
					<option value='I need a logo'>I need a logo</option>
					<option value='I need a branding'>I need a branding</option>
					<option value='I need a brochure'>I need a brochure</option>
					<option value='Other'>Other</option>
				</select>

				<label htmlFor='emailAddress'>Email Address</label>
				<input
					type='text'
					id='emailAddress'
					name='emailAddress'
					placeholder='Email Address'
				/>

				<label htmlFor='howDidYouHearAboutUs'>How did you hear about us?</label>

				<select
					id='howDidYouHearAboutUs'
					name='howDidYouHearAboutUs'
					defaultValue='defaultOption'
				>
					<option disabled hidden value='defaultOption'>
						How did you hear about us?
					</option>
					<option value='Recommended by someone'>Recommended by someone</option>
					<option value='On Social Media'>On Social Media</option>
					<option value='On Google'>On Google</option>
					<option value='On Upwork'>On Upwork</option>
					<option value='Other'>Other</option>
				</select>

				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' placeholder='Message' />
			</div>

			<Button type='submit'>Send Message</Button>
		</form>
	)
}

export default ContactForm
