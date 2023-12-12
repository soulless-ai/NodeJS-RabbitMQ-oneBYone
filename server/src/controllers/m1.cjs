const M1Service = require('../services/m1.cjs');

const M1_SERVICE = new M1Service();

class M1Controller {
    constructor() {}

    async handleHttpRequest(req, res) {
        try {
            const result = await M1_SERVICE.processNumber(req.body.number);
            console.log(result);
            res.json({ success: true, result });
        } catch (error) {
            console.error('Error handling HTTP request:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

module.exports = M1Controller;