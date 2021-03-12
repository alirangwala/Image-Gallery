import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
	margin: 5px;
	width: 340px;
	height: 440px;
	background-image: linear-gradient(black, white);
	border-radius: 25px;
	box-shadow: 2px 2px 5px 6px rgb(172, 167, 140);
`;

const StyledStarImage = styled.img`
	position: absolute;
	height: 35px;
	width: 35px;
	top: 15px;
	left: 300px;
	border: black 1px;
	cursor: pointer;
	margin: 0px;
	background-color: black;
	border-radius: 50%;
	shadow: 10px 10px;
	:hover {
		background-color: gray;
		transform: scale(1.2);
	}
`;

const ImageCard = ({ image, tagImage }) => {
	// const [tag, setTag] = useState(image.tagged);

	return (
		<div id="container">
			<StyledStarImage
				onClick={() => tagImage(image.image_id)}
				src="./images/yellowstar.png"
			/>
			<StyledImage src={image.image} alt="NoImg" />
		</div>
	);
};

export default ImageCard;
