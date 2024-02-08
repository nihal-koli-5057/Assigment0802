const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');

function generateToken(data, expiresMs) {
	const token = jwt.sign(
		{ exp: Math.floor(expiresMs / 1000), ...data },
		"ASSIY1DIG62mWO4DwopAGrLvmpmR6X3qFxfj3qQ9pLyJgO38OgdwqHJChrQk8ekeV0WfNbLL3vxomLVNC"
	);
	return token;
}

async function encryptData(string) {
	const salt = await bycrypt.genSalt(10);
	const hashedString = await bycrypt.hash(string, salt);
	return hashedString;
}
function generateExpires(hours) {
	const ms = Math.floor(Date.now() + hours * 60 * 60 * 1000);
	return ms;
}

module.exports = {
	generateToken,
	generateExpires,
	encryptData,
};