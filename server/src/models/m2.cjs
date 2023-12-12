class M2Model {
    async processTask(task) {
        try {
            const result = task.number * 2;
            return result;
        } catch (error) {
            console.error('Error processing task:', error);
            throw error;
        }
    }
}

module.exports = M2Model;