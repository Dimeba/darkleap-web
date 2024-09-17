// Initialize Google Analytics
export const pageview = url => {
	window.gtag('config', process.env.GOOGLE_ANALYTICS, {
		page_path: url
	})
}

// Log specific events
export const event = ({ action, category, label, value }) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	})
}
