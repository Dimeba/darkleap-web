// Extend the Window interface to include gtag
declare global {
	interface Window {
		gtag?: (
			command: 'config' | 'event',
			targetId: string,
			params?: Record<string, any>
		) => void
	}
}

// Initialize Google Analytics
export const pageview = (url: string): void => {
	const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS // Ensure this matches your env variable key
	if (typeof window !== 'undefined' && window.gtag && trackingId) {
		window.gtag('config', trackingId, {
			page_path: url
		})
	}
}

// Log specific events
interface EventParams {
	action: string
	category: string
	label: string
	value: number
}

export const event = ({
	action,
	category,
	label,
	value
}: EventParams): void => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value
		})
	}
}

// Button event
export const buttonEvent = (label: string): void => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', label, {
			event_category: 'Button',
			event_label: label,
			value: 1
		})
	}
}

// Scroll event
export const scrollEvent = (label: string): void => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', label, {
			event_category: 'Scroll',
			event_label: label,
			value: 1
		})
	}
}
