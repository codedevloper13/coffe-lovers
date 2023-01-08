/** @format */

import React from "react";
import styles from "./banner.module.css";

const Banner = (props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span>Coffee</span>
				<span> Lovers</span>
			</h1>
			<p className={styles.subTitle}>Coffee that fuels your dreams.</p>
			<button className={styles.button} onClick={props.handleOnClick}>
				{props.buttonText}
			</button>
		</div>
	);
};

export default Banner;
