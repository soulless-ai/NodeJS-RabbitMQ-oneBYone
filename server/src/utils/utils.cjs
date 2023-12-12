const simulateProcessingDelay = (duration) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
};


module.exports = { simulateProcessingDelay };