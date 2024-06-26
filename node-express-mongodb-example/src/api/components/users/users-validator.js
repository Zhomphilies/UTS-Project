const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      confirm_password: joi.string().min(6).max(32).required().label('Confirm password'),
      //confirm_password: joi.valid(joi.ref('password')).required().label('Confirm password')
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changeUserPassword: {
    body: {
      password: joi.string().min(6).max(32).required().label('Password'),
      new_password: joi.string().min(6).max(32).required().label('New Password'),
      confirm_new_password: joi.string().min(6).max(32).required().label('Confirm new password'),
      //confirm_password: joi.valid(joi.ref('new_password')).required().label('Confirm password')
    }
  }
};
