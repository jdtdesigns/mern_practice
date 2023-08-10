const Task = require('../models/Task');

module.exports = {
  Query: {
    sayHello() {
      return 'Hi There';
    },
    async getTasks() {
      const tasks = await Task.find();

      return tasks;
    }
  }
}