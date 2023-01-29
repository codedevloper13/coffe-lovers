/** @format */

import { useState } from "react";

const UserTrackLocation = () => {
	const [locationErrMsg, setlocationErrMsg] = useState("");
	const [LatLong, setLatLong] = useState("");
	const [isFindingLocation, setIsFindingLocation] = useState(false);

	const success = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		setLatLong(`${latitude},${longitude}`);
		setlocationErrMsg("");
		setIsFindingLocation(false);
	};

	const error = () => {
		setlocationErrMsg("Unable to retrieve your location");
		setIsFindingLocation(false);
	};

	const handleTrackLocation = () => {
		setIsFindingLocation(true);
		if (!navigator.geolocation) {
			setlocationErrMsg("Geolocation is not supported by your browser");
			setIsFindingLocation(false);
		} else {
			navigator.geolocation.getCurrentPosition(success, error);
		}
	};

	return {
		LatLong,
		handleTrackLocation,
		locationErrMsg,
		isFindingLocation,
	};
};

export default UserTrackLocation;
