import styles from './Loading.module.css'
export const Loading = () => {
	return (
		<>
			<div className={styles.gearbox}>
				<div className={styles.overlay} />
				<div className={[styles.gear, styles.one].join(' ')}>
					<div className={styles.gearInner}>
						<div className={styles.bar} />
						<div className={styles.bar} />
						<div className={styles.bar} />
					</div>
				</div>
				<div className={[styles.gear, styles.two].join(' ')}>
					<div className={styles.gearInner}>
						<div className={styles.bar} />
						<div className={styles.bar} />
						<div className={styles.bar} />
					</div>
				</div>
				<div className={[styles.gear, styles.three].join(' ')}>
					<div className={styles.gearInner}>
						<div className={styles.bar} />
						<div className={styles.bar} />
						<div className={styles.bar} />
					</div>
				</div>
				<div className={[styles.gear, styles.four, styles.large].join(' ')}>
					<div className={styles.gearInner}>
						<div className={styles.bar} />
						<div className={styles.bar} />
						<div className={styles.bar} />
						<div className={styles.bar} />
						<div className={styles.bar} />
						<div className={styles.bar} />
					</div>
				</div>
			</div>
		</>
	)
}
