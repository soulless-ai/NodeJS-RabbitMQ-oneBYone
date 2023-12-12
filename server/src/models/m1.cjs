const { enqueueTaskToRabbitMQ } = require('../utils/rabbitmq.cjs');

class M1Model {
    async enqueueTaskToRabbitMQ(task) {
        try {
            return await enqueueTaskToRabbitMQ(task);
        } catch (error) {
            console.error('Error enqueuing task to RabbitMQ:', error);
            throw error;
        }
    }
};

module.exports = M1Model;