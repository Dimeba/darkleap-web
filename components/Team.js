// styles
import styles from '@/styles/Team.module.scss'

// components
import TeamCard from './TeamCard'

const Team = () => {
	return (
		<section id='team' className={`${styles.team} grid-container`}>
			<div className={styles.teamText}>
				<h2>Our Team</h2>
				<p>
					DarkLeap was established by a highly skilled developer and a creative
					designer, uniting their expertise to deliver exemplary outcomes. We
					embody a passion for excellence, specializing in web design,
					development, and graphic solutions. Meticulous attention to detail,
					creativity, and a commitment to professionalism define our approach as
					we bring your vision to life.
				</p>
			</div>

			<div className={styles.teamBios}>
				<TeamCard />
				<TeamCard />
			</div>
		</section>
	)
}

export default Team
