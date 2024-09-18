// styles
import styles from '@/styles/Work.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

// GA
import * as gtag from '@/lib/gtag'

const ProjectCard = ({ title, photo, link }) => {
	return (
		<Link href={link} scroll={false} target='_blank' passHref>
			<div
				className={styles.project}
				onClick={() => gtag.buttonEvent(`${title} project button`)}
			>
				<div className={styles.projectThumbnail}>
					<Image
						src={'https:' + photo}
						fill
						quality={100}
						style={{ objectFit: 'cover' }}
						sizes='(max-width: 768px) 100vw, 768px'
						alt='Project Thumbnail'
						priority={false}
					/>
				</div>
				<div className={styles.gradient}></div>
				<p>{title}</p>
			</div>
		</Link>
	)
}

export default ProjectCard
