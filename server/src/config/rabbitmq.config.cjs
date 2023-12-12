const rabbitMqConfig = {
    RABBITMQ_URL: 'amqp://user:standart@localhost:5672', // Замените user и password на ваши учетные данные
    queueName: 'tasks'
};

module.exports = { rabbitMqConfig };