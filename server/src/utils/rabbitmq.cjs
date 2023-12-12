const amqp = require('amqplib');
const { rabbitMqConfig } = require('../config/rabbitmq.config.cjs');
const M2Controller = require('../controllers/m2.cjs');

const M2_CONTROLLER = new M2Controller();

const createChannel = async () => {
    const connection = await amqp.connect(rabbitMqConfig.RABBITMQ_URL);
    const channel = await connection.createChannel();
    return { connection, channel };
};

const createQueue = async (channel, queueName) => {
    await channel.assertQueue(queueName, { durable: true });
};

const closeConnection = (connection) => {
    if (connection) {
        connection.close();
    }
};

const enqueueTaskToRabbitMQ = async (task) => {
    const { connection, channel } = await createChannel();
    try {
        await createQueue(channel, rabbitMqConfig.queueName);
        const taskString = JSON.stringify(task);
        channel.sendToQueue(rabbitMqConfig.queueName, Buffer.from(taskString), { persistent: true });
        return await M2_CONTROLLER.handleTaskFromQueue({ taskType: 'M2', number: task.number });
    } finally {
        closeConnection(connection);
    }
};

module.exports = { enqueueTaskToRabbitMQ };
