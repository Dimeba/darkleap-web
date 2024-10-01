// styles
import styles from '@/styles/Work.module.scss'

// components
import ProjectCard from './ProjectCard'

const Work = ({ projects }) => {
	return (
		<section className={styles.work} id='work'>
			<div className={styles.projects}>
				{projects.map(project => (
					<ProjectCard
						key={project.sys.id}
						title={project.fields.title}
						photo={project.fields.photo.fields.file.url}
						link={project.fields.link}
					/>
				))}
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
