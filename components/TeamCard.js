// styles
import styles from '@/styles/Team.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const TeamCard = props => {
	return (
		<div className={styles.bio}>
			<div className={styles.teamMemberPhoto}>
				<Image
					src={props.image}
					fill
					sizes='(max-width: 768px) 100vw, 768px'
					alt={`Photo of ${props.name}`}
					priority={false}
				/>
			</div>

			<div>
				<h3>{props.name}</h3>
				<p className={styles.teamMemberTitle}>{props.title}</p>
				<Link href={props.linkedin} scroll={false} passHref>
					<Button buttonWhite={false}>LinkedIn</Button>
				</Link>
			</div>
		</div>
	)
}

export default TeamCard
