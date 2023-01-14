/** @format */

import React from "react";
import styles from "./banner.module.css";

const Banner = (props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.span1}>Coffee</span>
				<span className={styles.span2}> Lovers</span>
			</h1>
			<p className={styles.subTitle}>Coffee that fuels your dreams.</p>
			<div className={styles.buttonWrapper}>
				<button className={styles.button} onClick={props.handleOnClick}>
					{props.buttonText}
				</button>
			</div>
		</div>
	);
};

export default Banner;
