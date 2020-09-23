const Admin = require('../../database/models/admin.models');

class AdminRepository {
    async findAdmin(credentials) {
        const admin = await Admin.findOne({where: credentials}, {raw: true});
        return admin;
    }



}

module.exports = new AdminRepository();