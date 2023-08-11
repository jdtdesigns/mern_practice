const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Task = model('Task', taskSchema);

// Task.deleteMany({})
//   .then(() => console.log('tasks deleted'))
//   .then(() => {
//     Task.insertMany([
//       {
//         text: 'Task one',
//         username: 'JD'
//       },
//       {
//         text: 'Task two',
//         username: 'Bob'
//       }
//     ]).then(() => console.log('tasks seeded'));
//   });

module.exports = Task;