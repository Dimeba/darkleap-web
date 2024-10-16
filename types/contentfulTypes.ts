export interface Entry {
	sys: { id: string; createdAt: string }
}

export interface Image {
	fields: { file: { url: string }; title: string }
}

export interface Service extends Entry {
	fields: { title: string; description: string; image: Image }
}

export interface TeamMember extends Entry {
	fields: {
		name: string
		title: string
		linkedin: string
		image: Image
	}
}

export interface Project extends Entry {
	fields: {
		title: string
		link: string
		photo: Image
	}
}
