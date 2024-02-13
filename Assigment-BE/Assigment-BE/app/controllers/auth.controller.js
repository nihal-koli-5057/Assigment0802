const catchAsync = require('../utils/catchAsync');
const authService  = require('../services/auth.service');

const login = catchAsync(async (req, res) => {
	const login  = await authService.login(req)
	res.send({...login });
});
const refreshToken = catchAsync(async (req, res) => {
	const refreshToken  = await authService.refreshToken(req)
	res.send({...refreshToken });
});

module.exports = {
	login,
	refreshToken

};