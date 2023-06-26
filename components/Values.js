// styles
import styles from '@/styles/Values.module.scss'

const Values = () => {
	return (
		<section id='values' className={`${styles.values} grid-container`}>
			<h2>Our Values</h2>
			<div className={styles.valuesText}>
				<div>
					<h3>Innovation</h3>
					<p>
						Embracing innovation and staying at the forefront of technology and
						design trends, continuously seeking new and creative solutions for
						our clients.
					</p>
				</div>
				<div>
					<h3>Attention to Detail</h3>
					<p>
						Paying meticulous attention to detail in every project, ensuring
						precision, accuracy, and a high level of craftsmanship in our work.
					</p>
				</div>
				<div>
					<h3>Passion</h3>
					<p>
						Fueled by passion for our craft, demonstrating enthusiasm,
						dedication, and a genuine love for what we do, which is reflected in
						the quality of our work.
					</p>
				</div>
				<div>
					<h3>Continuous Learning</h3>
					<p>
						Nurturing a learning culture, constantly expanding our knowledge,
						and keeping up with the latest industry advancements to deliver
						cutting-edge solutions.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Values
