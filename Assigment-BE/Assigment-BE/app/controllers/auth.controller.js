const catchAsync = require('../utils/catchAsync');
const authService  = require('../services/auth.service');

const login = catchAsync(async (req, res) => {
	const login  = await authService.login(req)
	res.send({...login });
});

module.exports = {
	login,

};