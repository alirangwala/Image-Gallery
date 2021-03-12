import React from "react";
import styled from "styled-components";
import Carousel from "styled-components-carousel";
import ImageCard from "./ImageCard.js";

const StyledCarousel = styled(Carousel)`
display: flex;
align: center
width: 75%
padding: 0;
margin: 0;
list-style: none;
`;

const Images = ({ images, tagImage, condition }) => {
	return (
		<StyledCarousel
			center
			showArrows
			showIndicator
			slidesToShow={3}
			breakpoints={[
				{
					size: 400,
					settings: {
						slidesToShow: 1,
						showArrows: true,
						showIndicator: true,
					},
				},
				{
					size: 800,
					settings: {
						slidesToShow: 2,
						showArrows: true,
						showIndicator: true,
					},
				},
				{
					size: 1200,
					settings: {
						slidesToShow: 3,
						showArrows: true,
						showIndicator: true,
					},
				},
				{
					size: 1600,
					settings: {
						slidesToShow: 4,
						showArrows: true,
						showIndicator: true,
					},
				},
			]}
		>
			{images
				.filter((image) => image.tagged === condition)
				.map((image, i) => (
					<ImageCard image={image} tagImage={tagImage} key={i} />
				))}
		</StyledCarousel>
	);
};

export default Images;
