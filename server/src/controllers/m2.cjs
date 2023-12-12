const M2Service = require('../services/m2.cjs');

class M2Controller {
    constructor() {
        this.m2Service = new M2Service();
    }

    async handleTaskFromQueue(task) {
        try {
            return await this.m2Service.processTaskFromQueue(task);;
        } catch (error) {
            console.error('Error handling task from queue:', error);
            throw error;
        }
    }
}

module.exports = M2Controller;