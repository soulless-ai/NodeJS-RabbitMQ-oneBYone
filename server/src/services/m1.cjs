const M1Model = require('../models/m1.cjs');

const MODEL = new M1Model();

class M1Service {
    constructor() {}

    async processNumber(number) {
        try {
            return await MODEL.enqueueTaskToRabbitMQ({ taskType: 'M1', number });
        } catch (error) {
            console.error('Error processing number:', error);
            throw error;
        }
    }
}

module.exports = M1Service;