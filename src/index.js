if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}
const { sequelize } = require('./models/index');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const init = async() => {
  await app.listen(PORT, () => {
    console.log(`server listening on port = ${PORT}`);
    sequelize.sync({force: true})
      .then(() => console.log('Connection has been established successfully'))
  })
}

init();
