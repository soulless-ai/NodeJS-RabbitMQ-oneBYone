const { simulateProcessingDelay } = require('../utils/utils.cjs');

const M2Model = require('../models/m2.cjs');

const MODEL = new M2Model();

class M2Service {
    constructor() {}

    async processTaskFromQueue(task) {
        try {
            await simulateProcessingDelay(5000);
            return await MODEL.processTask(task);
        } catch (error) {
            console.error('Error processing task from queue:', error);
            throw error;
        }
    }
}

module.exports = M2Service;
