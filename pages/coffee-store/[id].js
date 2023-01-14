/** @format */

import { useRouter } from "next/router";

import React from "react";

const CoffeeStore = () => {
	const router = useRouter();
	console.log("router", router.asPath);
	return <div>coffee-store-{router.query.id}</div>;
};

export default CoffeeStore;
