const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const path = require("path");

const { readImages, tagImageTrue, tagImageFalse } = require("./queries");

app.use(express.static("../client/src")); // Host your dist folder up to the server
app.use(express.json());
app.use(cors());

app.get("/images/", (req, res) => {
	readImages((err, data) => {
		if (err) {
			res.status(400).send(err);
		} else {
			res.status(200).send(data.rows);
		}
	});
});

app.put("/images/:image_id/tag/true", (req, res) => {
	tagImageTrue((err, data) => {
		if (err) {
			res.status(400).send(err);
		} else {
			res.send(data);
		}
	}, req.params.image_id);
});

app.put("/images/:image_id/tag/false", (req, res) => {
	tagImageFalse((err, data) => {
		if (err) {
			res.status(400).send(err);
		} else {
			res.send(data);
		}
	}, req.params.image_id);
});

// Listening for requests on the PORT
app.listen(PORT, () => {
	console.log("Serving up now at " + JSON.stringify(PORT));
});
