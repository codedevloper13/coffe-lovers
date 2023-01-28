/** @format */

/**
 * Create unsplash Api KEy
 */

import { createApi } from "unsplash-js";

const unsplash = createApi({
	accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

/**
 * Get Url for Coffee stores..
 */

const getUrlForCoffeeStores = (latlong, query, limit) => {
	return process.env.FOURSQUARE_API_URL + `/places/search?query=${query}&ll=${latlong}&limit=${limit}`;
};

/**
 * Get Coffee Stores images
 * @return string
 */

const getListOfCoffeeStoreImages = async () => {
	const photos = await unsplash.search.getPhotos({
		query: "coffee stores",
		page: 1,
		perPage: 5000,
	});
	const unsplashResults = photos.response.results;
	return unsplashResults.map((result) => result.urls["small"]);
};

// Get coffee stores from lat and long
export const fetchCooffeStores = async () => {
	const photos = await getListOfCoffeeStoreImages();
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: process.env.FOURSQUARE_API_KEY,
		},
	};

	const response = await fetch(getUrlForCoffeeStores("23.119520169890254%2C72.57985903467701", "coffee", 9), options);
	const data = await response.json();
	return data.results.map((result, idx) => {
		return {
			id: result.fsq_id,
			formatted_address: result.location.formatted_address,
			name: result.name,
			locality: result.location.locality || "Ahmedabad",
			imgUrl: photos.length > 0 ? photos[idx] : null,
		};
	});
	// .then((response) => response.json())
	// .then((response) => console.log(response))
	// .catch((err) => console.error(err));
};
