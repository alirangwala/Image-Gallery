const Pool = require("pg").Pool;

const pool = new Pool({
	database: "imagelib",
	user: "alirangwala",
});

// GET images
readImages = (callback) => {
	let sqlQuery = "SELECT * FROM images";

	pool.query(sqlQuery, (err, res) => {
		if (err) {
			throw err;
		}
		callback(null, res);
	});
};

// tag image
tagImageTrue = (callback, id) => {
	let sqlQuery = "UPDATE images SET tagged = TRUE WHERE image_id = $1";
	pool.query(sqlQuery, [id], (err, res) => {
		if (err) {
			throw err;
		}
		callback(null, res);
	});
};

tagImageFalse = (callback, id) => {
	let sqlQuery = "UPDATE images SET tagged = FALSE WHERE image_id = $1";
	pool.query(sqlQuery, [id], (err, res) => {
		if (err) {
			throw err;
		}
		callback(null, res);
	});
};

module.exports = { readImages, tagImageTrue, tagImageFalse };
