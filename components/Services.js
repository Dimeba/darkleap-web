import { useState, useRef } from 'react'

// styles
import styles from '@/styles/Services.module.scss'

// components
import Button from './Button'
import Image from 'next/image'

// GA
import * as gtag from '@/lib/gtag'

const Services = ({ services }) => {
	const [activeService, setActiveService] = useState(services[0])
	const targetRef = useRef(null)

	// scroll to targetRef when service is clicked on mobile
	const handleScroll = () => {
		const mobileBreakpoint = 768

		if (window.innerWidth <= mobileBreakpoint) {
			const offset = 78

			const targetPosition =
				targetRef.current.getBoundingClientRect().top + window.pageYOffset

			window.scrollTo({
				top: targetPosition - offset,
				behavior: 'smooth'
			})
		}
	}

	const handleServiceClick = (index, serviceTitle) => {
		setActiveService(services[index])
		gtag.buttonEvent(`${serviceTitle} button on services section`)
		handleScroll()
	}

	return (
		<section id='services' className={styles.services}>
			<div className={styles.servicesText}>
				<h2>Our Services</h2>
				<div className={styles.serviceNav}>
					{services.map((service, index) => {
						return (
							<div
								key={service.sys.id}
								className={`${styles.serviceTitle} ${
									activeService.sys.id === service.sys.id
										? styles.activeService
										: ''
								}`}
							>
								<div className={styles.leftBorder}></div>
								<h3
									onClick={() =>
										handleServiceClick(index, service.fields.title)
									}
								>
									{service.fields.title}
								</h3>
								<Image
									src='/arrow.svg'
									width={9}
									height={18}
									alt='arrow image'
									priority={false}
								/>
							</div>
						)
					})}
				</div>

				<div className={styles.desktop}>
					<p className={styles.serviceDescription}>
						{activeService.fields.description}
					</p>

					<a href='#contact' aria-label='Link to contact form'>
						<Button
							buttonWhite={false}
							event={() =>
								gtag.buttonEvent(
									`Get In Touch button on ${activeService.fields.title} service`
								)
							}
						>
							Order Service
						</Button>
					</a>
				</div>
			</div>

			<div className={styles.servicePhoto} ref={targetRef}>
				<Image
					src={'https:' + activeService.fields.image.fields.file.url}
					fill
					quality={100}
					style={{ objectFit: 'cover' }}
					sizes='(max-width: 768px) 100vw, 768px'
					alt='Team Member Photo'
					priority={false}
				/>
			</div>

			<div className={`${styles.servicesText} ${styles.mobile}`}>
				<p className={styles.serviceDescription}>
					{activeService.fields.description}
				</p>

				<a href='#contact' aria-label='Link to contact form'>
					<Button
						buttonWhite={false}
						event={() =>
							gtag.buttonEvent(
								`Get In Touch button on  ${activeService.fields.title} service`
							)
						}
					>
						Order Service
					</Button>
				</a>
			</div>
		</section>
	)
}

export default Services
