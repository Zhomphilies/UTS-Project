const { User } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  return User.create({
    name,
    email,
    password,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

/**
 * Check a email
 * @param {string} email - Email
 * @returns {Promise}
 */
async function checkUserEmail(email){
  return userEmail = User.findOne({ email: email });
} 

/**
 * Change user password
 * @param {string} id = User ID
 * @param {string} password - old pass
 * @param {string} new_password = new pass
 * @return {Promise}
 */
async function changeUserPass(id, password){
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        password,
      },
    }
  );
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  checkUserEmail,
  changeUserPass,
};