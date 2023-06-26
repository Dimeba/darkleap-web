// styles
import styles from '@/styles/Team.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const TeamCard = () => {
	return (
		<div className={styles.bio}>
			<div className={styles.teamMemberPhoto}>
				<Image
					src='/square-placeholder.jpg'
					fill
					sizes='(max-width: 768px) 100vw, 768px'
					alt='Team Member Photo'
					priority={false}
				/>
			</div>

			<div>
				<h3>Darko Nikolich</h3>
				<p className={styles.teamMemberTitle}>Founder & Developer</p>
				<Link
					href='https://www.linkedin.com/in/darko-nikolich-80b20886/'
					scroll={false}
					passHref
				>
					<Button buttonWhite={false}>LinkedIn</Button>
				</Link>
			</div>
		</div>
	)
}

export default TeamCard
