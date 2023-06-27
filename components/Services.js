import { useState } from 'react'

// styles
import styles from '@/styles/Services.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const Services = ({ services }) => {
	const [activeService, setActiveService] = useState(services[0])

	return (
		<section id='services' className={styles.services}>
			<div className={styles.servicesText}>
				<div className={styles.content}>
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
									<h3 onClick={() => setActiveService(services[index])}>
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

					<p className={styles.serviceDescription}>
						{activeService.fields.description}
					</p>

					<Link href='#contact' scroll={false} passHref>
						<Button buttonWhite={false}>Order Service</Button>
					</Link>
				</div>
			</div>

			<div className={styles.servicesGallery}>
				<div className={styles.servicePhoto}>
					<Image
						src={'https:' + activeService.fields.image.fields.file.url}
						fill
						sizes='(max-width: 768px) 100vw, 768px'
						alt='Team Member Photo'
						priority={false}
					/>
				</div>
			</div>
		</section>
	)
}

export default Services
