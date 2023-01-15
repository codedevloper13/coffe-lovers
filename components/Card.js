/** @format */

import React from "react";
import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
import cls from "classnames";

function Card(props) {
	return (
		<Link href={props.href} legacyBehavior>
			<a className={styles.cardLink}>
				<div className={cls("glass", styles.container)}>
					<div className={styles.cardHeaderWrapper}>
						<h2 className={styles.cardHeader}>{props.name}</h2>
					</div>
					<div className={styles.cardImageWrapper}>
						<Image className={styles.cardImage} src={props.imgUrl} alt='card' width={260} height={160} />
					</div>
				</div>
			</a>
		</Link>
	);
}

export default Card;
