import Head from 'next/head'

// sections
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Values from '@/components/Values'
// import Testimonials from '@/components/Testimonials'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ContactButton from '@/components/ContactButton'

// lib
import { getEntries } from '@/lib/contentful'

// types
import {
	Service,
	TeamMember,
	Testimonial,
	Project
} from '@/types/contentfulTypes'

// hooks
import { useEffect } from 'react'
import { scrollEvent } from '@/lib/gtag'

export async function getStaticProps() {
	const service = await getEntries('service')
	const team = await getEntries('team')
	// const testimonial = await getEntries('testimonial')
	const project = await getEntries('project')

	return {
		props: {
			services: service.items,
			teamMembers: team.items,
			projects: project.items
			// testimonials: testimonial.items
		}
	}
}

interface Props {
	services: Service[]
	teamMembers: TeamMember[]
	// testimonials: Testimonial[]
	projects: Project[]
}

export default function Home({
	services,
	teamMembers,
	// testimonials,
	projects
}: Props) {
	// Scroll event tracking
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							scrollEvent(`${entry.target.id} section viewed`)
						}
					})
				},
				{
					threshold: 0.5
				}
			)

			const sections = document.querySelectorAll('section')
			sections.forEach(section => {
				observer.observe(section)
			})

			// Clean up the observer on unmount
			return () => {
				sections.forEach(section => {
					observer.unobserve(section)
				})
			}
		}
	}, [])

	return (
		<>
			<Head>
				<title>Dark Leap | Web Design, Web Development, Graphic Design</title>
				<meta
					name='description'
					content='Dark Leap | From Concept to Success: Partnering for Exceptional Results | We specialize in web design, development, and graphic solutions. From captivating websites to stunning visual identities, we deliver exceptional results that exceed expectations. Collaborate with our expert team to elevate your online presence and achieve your business goals.'
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
				{/* <Testimonials testimonials={testimonials} /> */}
				<Projects projects={projects} />
				<Contact />
				<ContactButton />
			</>
		</>
	)
}
