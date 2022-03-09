const sequelize = require('sequelize');

const connection = new sequelize('react_study', 'newuser', 'newUser@123', {
	host: 'localhost',
	dialect: 'mysql'
});

try {
	connection.authenticate();
	console.log('Connection has been established successfully.');
  } catch (error) {
	console.error('Unable to connect to the database:', error);
  }

module.exports = connection;