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
					required
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
					<option value='I need a logo'>I need design services</option>
					<option value='I need a branding'>I need a branding</option>
					<option value='Other'>Other</option>
				</select>

				<label htmlFor='emailAddress'>Email Address</label>
				<input
					type='text'
					id='emailAddress'
					name='emailAddress'
					placeholder='Email Address'
					required
				/>

				<label htmlFor='phone'>Phone Number</label>
				<input type='tel' id='phone' name='phone' placeholder='Phone Number' />

				<label htmlFor='message'>Message</label>
				<textarea
					id='message'
					name='message'
					placeholder='Tell us a bit about your current challenges or goals.'
					required
				/>
			</div>

			<Button type='submit'>Send Message</Button>
		</form>
	)
}

export default ContactForm
