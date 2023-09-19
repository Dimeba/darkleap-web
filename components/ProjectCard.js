// styles
import styles from '@/styles/Work.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ title, photo, link }) => {
	return (
		<Link href={link} scroll={false} passHref>
			<div className={styles.project}>
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
