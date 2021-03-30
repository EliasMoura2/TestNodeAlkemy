// if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
// }
const { sequelize } = require('./models/index');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const init = async() => {
  await app.listen(PORT, () => {
    console.log(`server listening on port = ${PORT}`);
    // connection.sync({ force: true})
    //   .then(() => console.log('Connection has been established successfully'))
    try {
      sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })
}

init();

// process.on('SIGINT', () => {
//   console.log('Server closed');
//   debug.close();
//   process.exit();
// })