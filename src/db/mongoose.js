const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number');
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     validate(value) {
//       if (value.length <= 6 || value.toLowerCase().includes('password')) {
//         throw new Error(
//           'Password cannot contain "password" or be shorter than 7 letters'
//         );
//       }
//     },
//   },
// });

// const me = new User({
//   name: '   Mike  ',
//   email: 'MIKESEMAIL@GMAIL.COM',
//   age: 33,
//   password: 'passwors',
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: 'Go to the gym',
});

task
  .save()
  .then((task) => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
