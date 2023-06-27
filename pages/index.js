import Head from 'next/head'

// sections
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Values from '@/components/Values'
import Testimonials from '@/components/Testimonials'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

// contentful

import { createClient } from 'contentful'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const service = await client.getEntries({
		content_type: 'service'
	})

	const team = await client.getEntries({
		content_type: 'team',
		order: 'sys.createdAt'
	})

	return {
		props: {
			services: service.items,
			teamMembers: team.items
		}
	}
}

export default function Home({ services, teamMembers }) {
	return (
		<>
			<Head>
				<title>DarkLeap | Web Design, Web Development, Graphic Design</title>
				<meta
					name='description'
					content='DarkLeap | From Concept to Success: Partnering for Exceptional Results | We specialize in web design, development, and graphic solutions. From captivating websites to stunning visual identities, we deliver exceptional results that exceed expectations. Collaborate with our expert team to elevate your online presence and achieve your business goals.'
				/>
				<meta
					name='keywords'
					content='Web design, web development, graphic design, visual identity, WordPress websites, React JS websites, creative solutions, digital experiences, online presence, branding, marketing materials, user experience, responsive design, professional services, customized solutions'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<link rel='icon' href='/favicon.svg' />
			</Head>
			<>
				<Hero />
				<About />
				<Services services={services} />
				<Team team={teamMembers} />
				<Values />
				<Testimonials />
				<Work />
				<Contact />
			</>
		</>
	)
}
