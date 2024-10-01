// Initialize Google Analytics
export const pageview = url => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', process.env.GOOGLE_ANALYTICS, {
			page_path: url
		})
	}
}

// Log specific events
export const event = ({ action, category, label, value }) => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value
		})
	}
}

// Button event
export const buttonEvent = label => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', label, {
			event_category: 'Button',
			event_label: label,
			value: 1
		})
	}
}

// Scroll event
export const scrollEvent = label => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', label, {
			event_category: 'Scroll',
			event_label: label,
			value: 1
		})
	}
}
