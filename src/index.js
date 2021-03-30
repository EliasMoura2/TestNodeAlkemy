
const app = require('./app');

app.set('port', process.env.PORT || 5000);

const port = app.get('port');

const init = async() => {
  await app.listen(port, () => {
    console.log(`server listening on port = ${port}`);
  })
}

init();

// process.on('SIGINT', () => {
//   console.log('Server closed');
//   debug.close();
//   process.exit();
// })