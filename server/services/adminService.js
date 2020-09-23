const adminRepository = require('../repositories/adminRepository');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('31312s321213h44cgvsdsckS21jcsd');


class AdminService {
    async createSession(credentials) {
        const admin = await adminRepository.findAdmin(credentials);
        if (!admin) {
            return null;
        }
        const encryptedString = cryptr.encrypt(admin.login);
        return {
            token: encryptedString
        };
    }
}

module.exports = new AdminService();