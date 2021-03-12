import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteImages from "./FavoriteImages.js";
import Images from "./Images.js";
import Carousel from "styled-components-carousel";
import styled from "styled-components";

const App = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/images/`)
			.then((results) => results.data)
			.then(setImages);
	}, [images]);

	const tagImage = (imageId) => {
		axios
			.put(`http://localhost:3001/images/${imageId}/tag`, imageId)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};

	return (
		<div>
			<h1>IMAGE GALLERY</h1>
			<h2>Favorite Images</h2>
			<FavoriteImages images={images} tagImage={tagImage} />
			<h2>Images</h2>
			<Images images={images} tagImage={tagImage} />
		</div>
	);
};

export default App;
