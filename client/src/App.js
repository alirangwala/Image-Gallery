import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard.js";
import Carousel from "styled-components-carousel";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
display: flex;
align: center
width: 75%
padding: 0;
margin: 0;
list-style: none;
`;

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
			<StyledCarousel
				center
				showArrows
				showIndicator
				slidesToShow={3}
				breakpoints={[
					{
						size: 300,
						settings: {
							slidesToShow: 1,
							showArrows: true,
							showIndicator: true,
						},
					},
					{
						size: 600,
						settings: {
							slidesToShow: 2,
							showArrows: true,
							showIndicator: true,
						},
					},
					{
						size: 900,
						settings: {
							slidesToShow: 3,
							showArrows: true,
							showIndicator: true,
						},
					},
					{
						size: 1200,
						settings: {
							slidesToShow: 4,
							showArrows: true,
							showIndicator: true,
						},
					},
				]}
			>
				{images.map((image, i) => (
					<ImageCard image={image} tagImage={tagImage} key={i} />
				))}
			</StyledCarousel>
		</div>
	);
};

export default App;
