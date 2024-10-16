// styles
import styles from '@/styles/Team.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

// GA
import * as gtag from '@/lib/gtag'

interface Props {
	name: string
	title: string
	linkedin: string
	image: string
}

const TeamCard: React.FC<Props> = ({ name, title, linkedin, image }) => {
	return (
		<div className={styles.bio}>
			<div className={styles.teamMemberPhoto}>
				<Image
					src={image}
					fill
					sizes='(max-width: 768px) 100vw, 768px'
					alt={`Photo of ${name}`}
					priority={false}
				/>
			</div>

			<div>
				<h4>{name}</h4>
				<p className={styles.teamMemberTitle}>{title}</p>
				<Link href={linkedin} scroll={false} passHref>
					<Button
						transparent
						event={() => gtag.buttonEvent(`${name} LinkedIn profile button`)}
					>
						LinkedIn
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default TeamCard
