import Koa from 'koa'
import applyMiddleware from './server.js'

const app = new Koa()

// start the server
applyMiddleware(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Koa server is running on port ${PORT}`);
});


export default app 