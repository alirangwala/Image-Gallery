import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Images from "./Images.js";

const App = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/images/`)
			.then((results) => results.data)
			.then(setImages);
	}, [images]);

	const tagImageTrue = (imageId) => {
		axios
			.put(`http://localhost:3001/images/${imageId}/tag/true`, imageId)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};

	const tagImageFalse = (imageId) => {
		axios
			.put(`http://localhost:3001/images/${imageId}/tag/false`, imageId)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};
	return (
		<div>
			<h2>FAVORITE IMAGES</h2>
			<Images images={images} tagImage={tagImageFalse} condition={true} />
			<h2>IMAGE GALLERY</h2>
			<Images images={images} tagImage={tagImageTrue} condition={false} />
		</div>
	);
};

export default App;
