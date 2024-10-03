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
import ContactButton from '@/components/ContactButton'

// contentful
import { createClient } from 'contentful'

// hooks
import { useEffect, useState } from 'react'
import { scrollEvent } from '@/lib/gtag'

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

	const testimonial = await client.getEntries({
		content_type: 'testimonial'
	})

	const project = await client.getEntries({
		content_type: 'project'
	})

	return {
		props: {
			services: service.items,
			teamMembers: team.items,
			projects: project.items,
			testimonials: testimonial.items
		}
	}
}

export default function Home({
	services,
	teamMembers,
	testimonials,
	projects
}) {
	const [hideContactButton, setHideContactButton] = useState(false)
	const [buttonBottom, setButtonBottom] = useState(false)

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

	// Contact button visibility
	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Determine if the device is mobile
			const isMobile = window.innerWidth <= 768 // Adjust the breakpoint as needed

			// Set thresholds based on screen size
			const heroThreshold = isMobile ? 0.1 : 1
			const contactThreshold = 0.1

			// Observer for the 'hero' section
			const heroObserver = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setButtonBottom(false)
						} else {
							setButtonBottom(true)
						}
					})
				},
				{
					threshold: heroThreshold
				}
			)

			// Observer for the 'contact' section
			const contactObserver = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setHideContactButton(true)
						} else {
							setHideContactButton(false)
						}
					})
				},
				{
					threshold: contactThreshold
				}
			)

			// Get the elements to observe
			const heroSection = document.getElementById('hero')
			const contactSection = document.getElementById('contact')

			// Start observing the 'hero' section
			if (heroSection) {
				heroObserver.observe(heroSection)
			}

			// Start observing the 'contact' section
			if (contactSection) {
				contactObserver.observe(contactSection)
			}

			// Clean up the observers on unmount
			return () => {
				if (heroSection) {
					heroObserver.unobserve(heroSection)
				}
				if (contactSection) {
					contactObserver.unobserve(contactSection)
				}
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
				<Work projects={projects} />
				<Contact />
				<ContactButton
					hideContactButton={hideContactButton}
					buttonBottom={buttonBottom}
				/>
			</>
		</>
	)
}
