const adminService = require('../services/adminService');

class AdminController {
    async createSession(req, res) {
        const {login, password} = req.body;
        const newSession = await adminService.createSession({login, password});
        if (!newSession) {
            return res.status(401).json({message: 'Invalid username or password'});
        }

        res.cookie('token', newSession.token, {maxAge: 900000, httpOnly: true});
        res.json({login});
    }
}

module.exports = new AdminController();