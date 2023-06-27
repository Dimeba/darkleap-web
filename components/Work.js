// styles
import styles from '@/styles/Work.module.scss'

// components
import ProjectCard from './ProjectCard'

const Work = () => {
	return (
		<section className={styles.work}>
			<div id='work' className={styles.projects}>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
			<div className={styles.title}>
				<h2>
					Our Most
					<br />
					Recent Work
				</h2>
			</div>
		</section>
	)
}

export default Work
