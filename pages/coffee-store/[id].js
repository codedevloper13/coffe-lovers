/** @format */

import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";
//import coffeeStoresData from "../../data/coffee-stores.json";

import styles from "../../styles/coffee-store.module.css";
import { fetchCooffeStores } from "../../lib/coffee-stores";
export async function getStaticProps(staticProps) {
	const CoffeeStores = await fetchCooffeStores();
	const params = staticProps.params;
	return {
		props: {
			coffeeStore: CoffeeStores.find((coffeeStore) => {
				return coffeeStore.id.toString() === params.id; //dynamic id
			}),
			revalidate: 10,
		},
	};
}

export async function getStaticPaths() {
	const CoffeeStores = await fetchCooffeStores();
	const paths = CoffeeStores.map((coffeeStore) => {
		return {
			params: {
				id: coffeeStore.id.toString(),
			},
		};
	});
	return {
		paths,
		fallback: true,
	};
}

const CoffeeStore = (props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const { formatted_address, name, imgUrl, locality } = props.coffeeStore;

	const handleUpvoteButton = () => {
		alert("gggg");
	};

	return (
		<div className={styles.layout}>
			<Head>
				<title>{name}</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.col1}>
					<div className={styles.backToHomeLink}>
						<Link href='/' legacyBehavior>
							<a>Back to home</a>
						</Link>
					</div>
					<div className={styles.nameWrapper}>
						<h1 className={styles.name}>{name}</h1>
					</div>
					<Image
						src={
							imgUrl ||
							"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
						}
						width={600}
						height={360}
						className={styles.storeImgWrapper}
						alt={name}
					/>
				</div>

				<div className={cls("glass", styles.col2)}>
					<div className={styles.iconWrapper}>
						<Image src='/static/icons/places.svg' width='24' height='24' alt='' />
						<p className={styles.text}>{formatted_address}</p>
					</div>
					<div className={styles.iconWrapper}>
						<Image src='/static/icons/nearMe.svg' width='24' height='24' alt='' />
						<p className={styles.text}>{locality }</p>
					</div>
					<div className={styles.iconWrapper}>
						<Image src='/static/icons/star.svg' width='24' height='24' alt='' />
						<p className={styles.text}>1</p>
					</div>

					<button className={styles.upvoteButton} onClick={handleUpvoteButton}>
						Up vote!
					</button>
				</div>
			</div>
		</div>
	);
};

export default CoffeeStore;
