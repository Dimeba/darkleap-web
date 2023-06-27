import { useState } from 'react'

// styles
import styles from '@/styles/Services.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const Services = () => {
	const servicesList = [
		{
			id: 'websites',
			title: 'We Develop Websites',
			description: `From visually captivating designs to robust functionality, our web design and development services encompass the creation of dynamic websites tailored to your unique needs. Whether it's building WordPress websites, developing React JS applications, or utilizing other frameworks, our team combines creativity and technical expertise to deliver exceptional online experiences that engage and impress.`
		},
		{
			id: 'design',
			title: 'We Create Visual Identites',
			description: `With our visual identity design services, we bring your brand to life by creating a cohesive and compelling visual representation. From logo design to color schemes and typography, we carefully craft elements that resonate with your target audience, leaving a memorable and impactful impression.`
		},
		{
			id: 'marketing',
			title: 'We Design Marketing Material',
			description: `Our marketing material design services empower your brand with visually striking collateral that captures attention and drives engagement. From brochures to presentations, we create captivating designs that effectively communicate your message, leaving a lasting impression on your audience.`
		}
	]

	const [activeService, setActiveService] = useState(servicesList[0])

	return (
		<section id='services' className={styles.services}>
			<div className={styles.servicesText}>
				<div className={styles.content}>
					<h2>Our Services</h2>
					<div className={styles.serviceNav}>
						{servicesList.map((service, index) => {
							return (
								<div
									key={service.id}
									className={`${styles.serviceTitle} ${
										activeService.id === service.id ? styles.activeService : ''
									}`}
								>
									<div className={styles.leftBorder}></div>
									<h3 onClick={() => setActiveService(servicesList[index])}>
										{service.title}
									</h3>
									<Image
										src='/arrow.svg'
										width={9}
										height={18}
										alt='Team Member Photo'
										priority={false}
									/>
								</div>
							)
						})}
					</div>

					<p className={styles.serviceDescription}>
						{activeService.description}
					</p>

					<Link href='#contact' scroll={false} passHref>
						<Button buttonWhite={false}>Order Service</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Services
