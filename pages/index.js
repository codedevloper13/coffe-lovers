/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import Card from "../components/Card";
import CoffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: "fsq3Vb/kHNyYdLgRIqC3pp/oPxjbH8yx8Pfvep4i8VETcH0=",
		},
	};

	const response = await fetch ("https://api.foursquare.com/v3/places/search?query=coffee&ll=23.119520169890254%2C72.57985903467701&limit=9", options);
	const data = await response.json();

	// .then((response) => response.json())
	// .then((response) => console.log(response))
	// .catch((err) => console.error(err));
	return {
		props: {
			CoffeeStores: data.results,
		},
	};
}

export default function Home(props) {
	const handleOnBannerBtnClick = () => {
		alert("hello");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Lovers</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Banner buttonText='View Stores Nearby' handleOnClick={handleOnBannerBtnClick} />
				<div className={styles.heroImage}>
					<Image src='/static/hero-banner.png' alt='banner' width={700} height={300} />
				</div>
				{props.CoffeeStores.length > 0 && (
					<>
						<h2 className={styles.headingtwo}>Chandkheda Stores</h2>
						<div className={styles.cardLayout}>
							{props.CoffeeStores.map((CoffeeStore) => {
								return (
									<Card
										key={CoffeeStore.fsq_id}
										className={styles.card}
										name={CoffeeStore.name}
										imgUrl={
											CoffeeStore.imgUrl ||
											"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
										}
										href={`/coffee-store/${CoffeeStore.fsq_id}`}
									/>
								);
							})}
						</div>
					</>
				)}
			</main>
		</div>
	);
}
