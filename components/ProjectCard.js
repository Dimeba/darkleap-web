// styles
import styles from '@/styles/Work.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = () => {
	return (
		<Link href='#' scroll={false} passHref>
			<div className={styles.project}>
				<div className={styles.projectThumbnail}>
					<Image
						src='/square-placeholder.jpg'
						fill
						sizes='(max-width: 768px) 100vw, 768px'
						alt='Project Thumbnail'
						priority={false}
					/>
				</div>
				<p>Project Name</p>
			</div>
		</Link>
	)
}

export default ProjectCard
